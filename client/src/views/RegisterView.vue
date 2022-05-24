<script setup lang="ts">
import NavigationBar from "../components/NavigationBar.vue";
import { RouterLink, useRouter } from "vue-router";
import InputField from "../components/InputField.vue";
import FormButton from "../components/FormButton.vue";
import { useStore } from "@/stores/user";
import { ref } from "vue";
import PageFooter from "../components/PageFooter.vue";

const store = useStore();
const router = useRouter();

if (store.loggedIn) {
  router.push("/overview");
}

const username = ref("");
const email = ref("");
const password = ref("");
const passwordConfirm = ref("");

const onClick = async (e: Event) => {
  e.preventDefault();

  const resp = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username.value,
      email: email.value,
      password: password.value,
    }),
  });
  const data: {
    type: number;
    id?: string;
    name?: string;
    message?: string;
  } = await resp.json();

  switch (data.type) {
    case 0:
      alert("Success");
      router.push("/login");

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
            <RouterLink to="/login">Login</RouterLink>
          </div>
          <div class="inner">
            <div class="field">
              <label>Username</label>
              <InputField
                type="username"
                name="username"
                required
                v-model="username"
              />
            </div>
            <div class="field">
              <label>Email</label>
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
            <div class="field">
              <label>Password confirmation</label>
              <InputField
                type="password"
                name="password"
                required
                v-model="passwordConfirm"
              />
            </div>
            <div class="link">
              <RouterLink to="/login">Already have an account?</RouterLink>
            </div>
            <div class="agree">
              By clicking "Create an account" you agree to our
              <RouterLink to="/terms">terms</RouterLink> and conditions and
              <RouterLink to="/privacy">privacy policy</RouterLink>
            </div>
            <FormButton
              @click="onClick"
              :disabled="
                !username ||
                !email ||
                !password ||
                !passwordConfirm ||
                password !== passwordConfirm
              "
            >
              <span>Create an account</span>
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

.agree {
  margin-bottom: 24px;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  a {
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    transition: color 0.25s linear;
    text-decoration: underline;
    outline: 0;

    &:hover {
      color: #ffa244;
      text-decoration: none;
    }
  }
}
</style>
