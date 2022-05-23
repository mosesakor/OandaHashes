<script setup lang="ts">
import { ref } from "vue";
import type User from "@/models/User";
import { useStore } from "@/stores/user";
import { useRouter } from "vue-router";
import { useCookies } from "@vueuse/integrations/useCookies";
import AdminUser from "../components/AdminUser.vue";

const store = useStore();
const router = useRouter();
const cookies = useCookies(["token"]);

if (!store.loggedIn) {
  router.push("/login");
}

const tokenData: { id: string } = JSON.parse(
  atob(cookies.get("token").split(".")[1])
);

const users = ref<string[]>([]);

const update = async () => {
  const resp = await fetch(`/api/users/${tokenData.id}`, {
    headers: {
      Authorization: cookies.get("token"),
    },
  });
  const data: {
    type: number;
    name?: string;
    message?: string;
    user?: User;
  } = await resp.json();

  if (data.type !== 0) {
    alert(`Error, ${data.type}, ${data.name}, ${data.message}`);
    cookies.remove("token");
    store.update();
    router.push("login");
  } else {
    if (!data.user?.isStaff) {
      router.push("/overview");
    }

    const resp = await fetch("/api/users", {
      headers: {
        Authorization: cookies.get("token"),
      },
    });
    const data2: {
      type: number;
      name?: string;
      message?: string;
      users?: string[];
    } = await resp.json();

    if (data.type !== 0) {
      alert(`Error, ${data.type}, ${data.name}, ${data.message}`);
      cookies.remove("token");
      store.update();
      router.push("login");
    } else {
      users.value = data2.users as string[];
    }
  }
};
update();
</script>

<template>
  <main>
    <div class="split-view">
      <div class="sidebar">
        <h1>Admin</h1>
        <a href="/">← Back</a>
        <h3 className="option active">User Management</h3>
      </div>
      <div class="main">
        <h1>User Management</h1>
        <div className="list">
          <AdminUser
            :update="update"
            v-for="user in users"
            :key="user"
            :id="user"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="less">
main {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.split-view {
  display: flex;
  flex-direction: column;
  @media (min-width: 648px) {
    flex-direction: row;
  }
  flex-grow: 1;
  max-height: 100%;
}

.sidebar {
  display: flex;
  flex-direction: row;
  padding: 1rem;
  gap: 0.5rem;
  align-items: center;

  @media (min-width: 648px) {
    flex-direction: column;
    align-items: flex-start;
  }

  h1 {
    flex-grow: 1;
    @media (min-width: 648px) {
      flex-grow: 0;
    }
    color: var(--heading);
  }

  a {
    color: var(--text);

    &:hover {
      color: var(--heading);
    }
  }

  .option {
    display: flex;

    &.active {
      color: var(--link-active);
    }
  }
}

.main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1rem;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: var(--background-secondary);
  border-radius: 8px 0 0 8px;
  border: 1px solid var(--border);

  h1 {
    color: var(--heading);
  }

  .list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    flex-direction: column;
    margin-top: 1rem;

    @media (min-width: 648px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 980px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
</style>
