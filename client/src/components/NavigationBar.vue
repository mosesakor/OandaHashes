<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import FormButton from "./FormButton.vue";
import { useStore } from "@/stores/user";
import { useCookies } from "@vueuse/integrations/useCookies";

const store = useStore();

const open = ref(false);

const logout = (e: Event) => {
  e.preventDefault();
  useCookies([]).remove("token");
  store.update();
};
</script>
<template>
  <nav>
    <RouterLink class="logo" to="/"><span>Oanda</span>Hashes</RouterLink>
    <div class="hamburger" @click="open = !open">
      <span />
      <span />
      <span />
    </div>
    <div :class="{ menu: true, open }">
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/packages">Investment packages</RouterLink>
      <RouterLink to="/equipment">Equipment</RouterLink>
      <RouterLink to="/referral-program">Referral Program</RouterLink>
      <RouterLink to="/faq">FAQ</RouterLink>
    </div>
    <div class="buttons" v-if="store.loggedIn">
      <RouterLink to="/overview">Overview</RouterLink>
      <FormButton @click="logout">Logout</FormButton>
    </div>
    <div class="buttons" v-else>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
    </div>
  </nav>
</template>

<style scoped lang="less">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  padding: 0 0.5rem;
  background: transparent;
  position: sticky;
  z-index: 100;

}

.menu {
  margin: auto 0;
  background: transparent;
  margin-bottom: 0.5rem;

  @media (max-width: 1000px) {
    display: flex;
    overflow: hidden;
    flex-direction: column;
    max-height: 0;
    background-color: transparent;
    border-radius: 8px;
    border: 1px solid transparent;
    transition: max-height 0.15s ease, opacity 0.15s ease;
    width: 100%;
    align-items: flex-end;
    opacity: 0;
    background-color: var(--background-secondary);
    border: 1px solid var(--border);

    &.open {
      max-height: 50rem;
      opacity: 1;
    }
  }
}

a {
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: var(--text);
  transition: all 0.2s ease-in;
  font-size: 17px;

  &:hover {
    border-radius: 5px;
    color: var(--heading);
  }

  @media (max-width: 768px) {
    &:hover {
      background: none;
    }
  }

  &.router-link-active {
    color: var(--link-active);
  }

  &.logo {
    font-size: 32px;
    font-weight: 800;
    img {
      width: 100px;
    }
    span {
      color: white;
    }
  }
}

.hamburger {
  padding: 20px;
  display: none;
  flex-direction: column;

  span {
    height: 2px;
    width: 25px;
    background: #fff;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 1000px) {
    display: flex;
    cursor: pointer;
  }
}

.buttons {
  display: flex;
  cursor: pointer;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    color: var(--heading);
    background-color: var(--background-secondary);
    border: 1px solid var(--border);
    cursor: pointer;
    transition: background 0.15s ease;
    text-align: center;

    &:hover {
      background-color: var(--background-tertiary);
    }
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;

    &:first-child {
      margin-right: 0.5rem;
      background: var(--background-tertiary);

      &:hover {
        background-color: var(--background-secondary);
      }
    }
  }

  button {
    color: var(--heading);
    font-size: 0.9rem;
    font-weight: 600;
  }

  @media (max-width: 1000px) {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
}
</style>
