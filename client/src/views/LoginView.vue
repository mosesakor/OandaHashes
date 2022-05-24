<script setup lang="ts">
import NavigationBar from "../components/NavigationBar.vue";
import { RouterLink, useRouter } from "vue-router";
import InputField from "../components/InputField.vue";
import FormButton from "../components/FormButton.vue";
import { useStore } from "@/stores/user";
import { ref } from "vue";
import { useCookies } from "@vueuse/integrations/useCookies";
import PageFooter from "../components/PageFooter.vue";

const cookies = useCookies(["token"]);
const store = useStore();
const router = useRouter();

if (store.loggedIn) {
  router.push("/overview");
}

const email = ref("");
const password = ref("");

const onClick = async (e: Event) => {
  e.preventDefault();
  const resp = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });
  const data: {
    type: number;
    token?: string;
    name?: string;
    message?: string;
  } = await resp.json();

  switch (data.type) {
    case 0:
      cookies.set("token", data.token, {
        secure: location.protocol === "https:",
      });
      store.update();
      router.push("/overview");

      break;
    default:
      alert(`Failure: ${data.type} / ${data.name}: ${data.message}`);
  }
};
</script>

<template>
  <main>
    <div class="main-section">
      <NavigationBar />
      <div class="form-container">
        <form>
          <div class="page">
            <RouterLink to="/register">Registration</RouterLink>
            <RouterLink to="/login"> Login </RouterLink>
          </div>
          <div class="inner">
            <div class="field">
              <label>Email/Username</label>
              <InputField type="email" name="email" required v-model="email" />
            </div>
            <div class="field">
              <label>Password</label>
              <InputField
                type="password"
                name="password"
                required
                v-model="password"
              />
            </div>
            <div class="link">
              <RouterLink to="/forgot-password">
                Forgot your password?
              </RouterLink>
            </div>
            <FormButton @click="onClick" :disabled="!email || !password">
              <span>Login</span>
            </FormButton>
          </div>
        </form>
      </div>
    </div>
  </main>
  <PageFooter />
</template>

<style scoped lang="less">
.main-section {
  background-image: url("@/assets/atom_background.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0.5rem 1rem 2rem;
  background-attachment: fixed;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-self: stretch;
}

.form-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  justify-self: center;
  flex-grow: 1;

  form {
    background-color: var(--background-secondary);
    border-radius: 8px;
    border: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
}

.page {
  display: flex;
  margin-bottom: 32px;

  a {
    display: inline-flex;
    min-height: 56px;
    padding: 18px 32px;
    border-radius: 8px;
    border: 2px solid transparent;
    color: #6e6e74;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    outline: 0;

    &.router-link-active {
      color: var(--link-active);
      border: 2px solid var(--link-active);
    }
  }
}

.inner {
  display: flex;
  flex-direction: column;
}

.field {
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;

  label {
    display: block;
    margin-bottom: 10px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
  }
}

.link {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;

  a {
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    transition: color 0.25s linear;
    text-decoration: none;
    outline: 0;

    &:hover {
      color: #ffa244;
    }
  }
}
</style>
