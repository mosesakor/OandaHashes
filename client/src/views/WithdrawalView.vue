<script setup lang="ts">
import moment from 'moment'
import NavigationBar from "../components/NavigationBar.vue";
import PageFooter from "../components/PageFooter.vue";
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
                <RouterLink class="link" to="/withdrawal">
                    <img src="@/assets/navicon04.svg" alt="" /> Withdrawal
                </RouterLink>
                <RouterLink class="link" to="/referral-program">
                    <img src="@/assets/navicon05.svg" alt="" /> Referral Program
                </RouterLink>
            </div>
        </nav>
        <div class="main-section">
            <div class="heading">
                <h1>Payouts</h1>
            </div>
            <div class="content-area">
                <div class="payout">
                    <div class="section">
                        <div class="heading">
                            <div class="header">
                                <img src="" alt="" />
                                <h3>BALANCE STATUS</h3>
                            </div>
                        </div>
                        <div class="body">
                            <p>{{ Number(info.profit.total).toLocaleString() }}</p>
                            <div class="balance-box">
                                <div class="">
                                    <p>WITHDRAWAL LOCKED:</p>
                                    <span>BTC 0</span>
                                </div>
                                <div>
                                    <p>AVAILABLE BALANCE</p>
                                    <span>BTC 0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section">
                        <div class="heading">
                            <div class="header">
                                <h3>MAKE PAYOUTS</h3>
                            </div>
                        </div>
                        <div class="pay">
                            <div>
                                <p>Enter Wallet address:</p>
                                <div class="input">
                                    <input />
                                </div>
                            </div>
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bank-details">
                <div class="form">
                    <div>
                        <label for="name">Account Holder Name:</label>
                        <input />
                    </div>
                    <div>
                        <label for="name">Bank Name:</label>
                        <input />
                    </div>
                    <div>
                        <label for="name">IBAN:</label>
                        <input />
                    </div>
                    <div>
                        <label for="name">Swift Code:</label>
                        <input />
                    </div>
                    <div>
                        <label for="name">City:</label>
                        <input />
                    </div>
                    <div>
                        <label for="name">Bank Account Number:</label>
                        <input />
                    </div>
                    <div class="submit">
                        <RouterLink to="/overview"> <button class="button">Submit</button></RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="less">
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
            filter: invert(58%) sepia(84%) saturate(451%) hue-rotate(71deg) brightness(94%) contrast(94%);
        }
    }

    &:hover {
        color: var(--link-active) !important;

        img {
            filter: invert(58%) sepia(84%) saturate(451%) hue-rotate(71deg) brightness(94%) contrast(94%);
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
    background-color: var(--background-tertiary);
}

.content-area {
    @media (min-width: 1000px) {
        width: 100%;
    }
}

.heading {
    margin-bottom: 24px;
    justify-content: space-between;
    font-family: 'Chakra Petch', sans-serif;
}

.payout {
    background: var(--background-tertiary);
    border: 1px solid var(--border);
    padding: 15px;
    border-radius: 8px;

    @media (min-width: 1000px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}

.header {
    display: flex;

    h3 {
        font-size: 12px;
        font-weight: 600;
        margin-left: 10px;
    }
}

.body {
    color: #df852b;
    font-size: 56px;
    font-weight: 500;
    font-family: 'Chakra Petch', sans-serif;

    p {
        margin: 20px 0;
    }
}

.balance-box {
    font-family: 'Chakra Petch', sans-serif;
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 12px;
    margin-bottom: 10px;

    div {}

    p {
        color: rgb(96, 185, 103);
        margin: 10px 0;
    }

    span {
        color: #fff;
    }

    @media (min-width: 1000px) {}
}

.pay {
    p {
        color: rgb(96, 185, 103);
        margin: 10px 0;
    }

    button {
        min-height: 48px;
        padding: 10px 54px;
        border-radius: 90px;
        background: #df852b;
        border: 1px solid #df852b;
        color: #fff;
        font-size: 14px;
        font-family: Montserrat, sans-serif;
        font-weight: 600;
        cursor: pointer;
        margin-top: 15px;
    }
}

.input {
    align-items: center;
    padding: 0px 24px;
    min-height: 48px;
    border: 1px solid #60b967;
    border-radius: 90px;
    display: flex;

    input,
    input:active {
        outline: none;
        border: none;
        width: 100%;
        color: #60b967;
        font-size: 14px;
        font-family: Montserrat, sans-serif;
        font-weight: 500;
        background: 0 0;
    }
}

.chart {
    margin-top: 20px;
    background: var(--background-tertiary);
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid var(--border);

    @media (min-width: 1000px) {
        margin-top: 0;
    }
}

.bank-details {
    margin-top: 20px;
    background: var(--background-tertiary);
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid var(--border);
}

.form {

    div {
        min-height: 48px;
        display: flex;

        a {
            margin: 0 auto;
        }

        @media (max-width: 1000px) {
            flex-direction: column;
        }
    }

    label {
        text-align: right;
        margin-right: 10px;
        font-weight: 800;
        width: 25%;

        @media (max-width: 1000px) {
            text-align: center;
            margin-right: 0;
            width: 100%;
            margin-bottom: 10px;
            margin-top: 10px;
        }
    }

    input {
        width: 75%;
        height: 40px;
        background: var(--background-tertiary);
        border: 1px solid #60b967;
        color: #60b967;
        font-size: 14px;
        font-family: Montserrat, sans-serif;
        font-weight: 500;
        padding: 0 24px;

        @media (max-width: 1000px) {
            width: 100%;
        }
    }


    .button {
        min-height: 48px;
        padding: 10px 54px;
        border-radius: 90px;
        background: #df852b;
        border: 1px solid #df852b;
        color: #fff;
        font-size: 14px;
        font-family: Montserrat, sans-serif;
        font-weight: 600;
        cursor: pointer;
        margin: 0 auto;
        margin-top: 20px;
        width: 20rem;
    }

    .submit {
        text-align: center !important;
    }
}
</style>