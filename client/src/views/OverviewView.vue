<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";
import { ref } from "vue";
import FormButton from "@/components/FormButton.vue";
import type User from "@/models/User";
import { useStore } from "@/stores/user";
import { useCookies } from "@vueuse/integrations/useCookies";

const store = useStore();
const router = useRouter();
const cookies = useCookies(["token"]);

if (!store.loggedIn) {
  router.push("/login");
}

const info = ref<User>({
  id: "",
  username: "",
  email: "",
  balance: 0,
  profit: { daily: 0, total: 0 },
} as User);

const tokenData: { id: string } = JSON.parse(
  atob(cookies.get("token").split(".")[1])
);

fetch(`/api/users/${tokenData.id}`, {
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
</script>

<template>
  <main>
    <nav>
      <div class="menu">
        <RouterLink to="/">← Back</RouterLink>
        <RouterLink class="link" to="/overview">
          <img src="@/assets/navicon01.svg" alt="" /> Overview
        </RouterLink>
        <RouterLink class="link" to="/packages">
          <img src="@/assets/navicon02.svg" alt="" /> Buy a package
        </RouterLink>
        <RouterLink class="link" to="/deposit">
          <img src="@/assets/navicon03.svg" alt="" /> Deposit
        </RouterLink>
        <RouterLink class="link" to="/order-histroy">
          <img src="@/assets/navicon04.svg" alt="" /> Order History
        </RouterLink>
        <RouterLink class="link" to="/referral-program">
          <img src="@/assets/navicon05.svg" alt="" /> Referral Program
        </RouterLink>
      </div>
    </nav>
    <div class="main-section">
      <div class="heading">
        <h1>Overview</h1>
      </div>
      <div class="content">
        <div class="payment">
          <div class="heading">
            <div class="header">
              <img src="@/assets/package.svg" alt="" />
              <h3>BALANCE</h3>
            </div>
            <FormButton>Cash Out</FormButton>
          </div>
          <div class="balance">${{ info.balance }}</div>
          <div class="balance-box">
            <div>
              <p>TOTAL PROFIT</p>
              <span>${{ info.profit.total }}</span>
            </div>
            <div>
              <p>BTC/USD</p>
              <span>$38,720.24</span>
            </div>
            <div>
              <p>DAILY PROFIT</p>
              <span>${{ info.profit.daily }}</span>
            </div>
          </div>
        </div>
        <div class="referral">
          <div class="heading">
            <div class="header">
              <img src="@/assets/package.svg" alt="" />
              <h3>REFERRALS INFO</h3>
            </div>
          </div>
          <div class="body">
            <div>
              <div class="balance">$0.00</div>
              <span>PROFIT</span>
            </div>
            <div>
              <div class="balance">0</div>
              <span>REFERRALS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="less">
footer {
  display: none !important;
}

main {
  flex-direction: column;
  min-height: 100vh;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
}

nav {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: sticky;
  flex-direction: row;

  @media (min-width: 1000px) {
    padding-right: 1rem;
    flex-direction: column;
    align-items: flex-start;
  }
}

.menu {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 1000px) {
    align-items: flex-start;
  }

  a {
    color: var(--text);
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: var(--heading);
    }

    &:nth-child(1) {
      @media (min-width: 1000px) {
        margin-bottom: 0.5rem;
      }
    }
  }
}

.link {
  display: flex;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  list-style-type: none;
  transition: color 0.15s ease, filter 0.15s ease;
  font-size: 1rem;
  color: rgb(110, 110, 116);
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  white-space: nowrap;

  &.router-link-active {
    color: var(--link-active);

    img {
      filter: invert(52%) sepia(36%) saturate(4362%) hue-rotate(169deg) brightness(104%) contrast(107%);
    }
  }

  &:hover {
    color: var(--heading);

    img {
      filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(235deg) brightness(103%) contrast(101%);
    }
  }
}

.main-section {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  border-radius: 8px 0 0 8px;
  border: 1px solid var(--border);
  padding: 1rem;
  background-color: var(--background-secondary);
}

.heading {
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 1000px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

.payment {
  background: var(--background-tertiary);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--heading);
  }

  img {
    filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(235deg) brightness(103%) contrast(101%);
  }
}

.balance {
  color: goldenrod;
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.balance-box {
  display: grid;
  grid-template-columns: 2fr 1fr;
  font-size: 12px;
  gap: 0.5rem;

  p {
    color: var(--link-active);
  }

  @media (min-width: 1000px) {}
}

.referral {
  margin-top: 20px;
  background: var(--background-tertiary);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--border);

  @media (min-width: 1000px) {
    margin-top: 0;
  }
}

.body {
  display: grid;
  grid-template-columns: 2fr 1fr;

  span {
    font-size: 12px;
    font-weight: 600;
    color: rgb(96, 185, 103);
  }
}
</style>
