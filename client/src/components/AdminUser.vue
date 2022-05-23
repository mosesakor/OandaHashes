<script setup lang="ts">
import type User from "@/models/User";
import { useStore } from "@/stores/user";
import { useCookies } from "@vueuse/integrations/useCookies";
import { ref } from "vue";
import { useRouter } from "vue-router";
import FormButton from "./FormButton.vue";

const store = useStore();
const router = useRouter();
const cookies = useCookies();

const props = defineProps<{ id: string; update: () => unknown }>();

const info = ref<User>({
  id: props.id,
  username: "",
  email: "",
  balance: 0,
  isStaff: false,
  profit: { daily: 0, total: 0 },
});

fetch(`/api/users/${props.id}`, {
  headers: {
    Authorization: cookies.get("token"),
  },
}).then(async (resp) => {
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
    info.value = data.user as User;
  }
});

const del = async (e: Event) => {
  e.preventDefault();

  const resp = await fetch(`/api/users/${props.id}`, {
    method: "DELETE",
    headers: {
      Authorization: cookies.get("token"),
    },
  });

  const data: {
    type: number;
    name?: string;
    message?: string;
  } = await resp.json();

  if (data.type !== 0) {
    alert(`Error, ${data.type}, ${data.name}, ${data.message}`);
    cookies.remove("token");
    store.update();
    router.push("login");
  } else {
    alert("Success");
    props.update();
  }
};

const edit = async (e: Event) => {
  e.preventDefault();

  const balance = Number(
    prompt("Enter new balance", info.value.balance.toString())
  );

  if (isNaN(balance)) {
    alert("Invalid input");
    return;
  }

  const daily = Number(
    prompt("Enter new daily profit", info.value.profit.daily.toString())
  );

  if (isNaN(daily)) {
    alert("Invalid input");
    return;
  }

  const total = Number(
    prompt("Enter new total profit", info.value.profit.total.toString())
  );

  if (isNaN(total)) {
    alert("Invalid input");
    return;
  }

  const resp = await fetch(`/api/users/${props.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: cookies.get("token"),
    },
    body: JSON.stringify({ balance, profit: { daily, total } }),
  });

  const data: {
    type: number;
    name?: string;
    message?: string;
  } = await resp.json();

  if (data.type !== 0) {
    alert(`Error, ${data.type}, ${data.name}, ${data.message}`);
    cookies.remove("token");
    store.update();
    router.push("login");
  } else {
    alert("Success");
    props.update();
    info.value.balance = balance;
    info.value.profit = { daily, total };
  }
};
</script>

<template>
  <div class="user">
    <h3>{{ info.username }}</h3>
    <h4>
      ID: <span>{{ info.id }}</span>
    </h4>
    <h4>
      Email: <span>{{ info.email }}</span>
    </h4>
    <h4 class="last">
      <span>${{ info.balance }}</span>
    </h4>
    <div class="options">
      <FormButton @click="del">Delete</FormButton>
      <FormButton @click="edit">Edit</FormButton>
    </div>
  </div>
</template>

<style scoped lang="less">
.user {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: var(--background-tertiary);
  border: 1px solid rgba(84, 84, 84, 0.65);
  border-radius: 8px;

  h3 {
    margin: 0;
    color: var(--heading);
  }

  h4 {
    margin: 0;
    color: darkgray;
    text-align: right;

    &.last {
      margin-bottom: 1rem;
    }

    span {
      color: var(--heading);
    }
  }
}

.options {
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  gap: 0.5rem;
  align-self: center;
}
</style>
