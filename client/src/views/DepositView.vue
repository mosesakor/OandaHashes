<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";
import { ref, onMounted } from 'vue'
import PackageData from '../models/PackageData';

const key = ref("Silver 1")
const count = ref(1)
const amount = ref(0.012334)

function increment() {
    count.value++
}

function decrement() {

    count.value > 1 ? count.value = count.value-- : count.value = count.value
    console.log(count.value)
}

const PackageInfo = ref(PackageData)
const packageType = ref(PackageData[0])

const getPackage = (package_name: string) => {
    switch (package_name) {
        case 'Silver 1':
            packageType.value = PackageData[0];
            break;
        case 'Silver 2':
            packageType.value = PackageData[1];
            break;
        case 'Gold 1':
            packageType.value  = PackageData[2];
            break;
        case 'Gold 2':
            packageType.value = PackageData[3];
            break;
        case 'Platinum 1':
            packageType.value = PackageData[4];
            break;
        case 'Platinum 2':
            packageType.value = PackageData[5];
            break;
        case 'Diamond 1':
            packageType.value = PackageData[6];
            break;
        case 'Diamond 2':
            packageType.value = PackageData[7];
            break;
        default:
            packageType.value = PackageData[0];
    }
};

const onChange = (e: any) => {
    key.value = e.target.value
    getPackage((e.target.value));
    console.log(e.target.value)
}

const handleAmount = () => {
    amount.value = count.value * packageType.value['btc'];

}

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
                <RouterLink class="link" to="/withdrawal">Withdrawal
                    <img src="@/assets/navicon04.svg" alt="" /> 
                </RouterLink>
                <RouterLink class="link" to="/referral-program">
                    <img src="@/assets/navicon05.svg" alt="" /> Referral Program
                </RouterLink>
            </div>
        </nav>
        <div class="main-section">
            <div class="heading">
                <h1>Order Payment</h1>
            </div>
            <div class="content">
                <div class="payment">
                    <div class="payment-info">
                        <p>
                            Please send <span>{{amount}}</span> BTC to the following address or scan the QR code.
                        </p>
                        <div class="address">
                            <span>Payment address</span>
                            <p>3BrjvTxezwv8w2UnVScPES5BZGQ5491nsq</p>
                        </div>
                        <div class="barcode">
                            <img src="@/assets/barcode.png" alt="barcode" />
                        </div>
                    </div>
                </div>
                <div class="package-selector">
                    <div class="heading">
                        <div class="header">
                            <img src="" alt="" />
                            <h3>Selected Package</h3>
                        </div>
                    </div>
                    <div class="info">
                        <select @change="onChange" v-model="key">
                            <option selected value="Silver 1">Silver1</option>
                            <option value="Silver 2">Silver 2</option>
                            <option value="Gold 1">Gold 1</option>
                            <option value="Gold 2">Gold 2</option>
                            <option value="Platinum 1">Platinum 1</option>
                            <option value="Platinum 2">Platinum 2</option>
                            <option value="Diamond 1">Diamond 1</option>
                            <option value="Diamond 2">Diamond 2</option>
                        </select>
                        <div class="counter">
                            <p>Amount</p>
                            <button @click="decrement">-</button>
                            <span>{{ count }}</span>
                            <button @click="increment">+</button>
                            <button class="update" @click="handleAmount">Update</button>
                        </div>
                    </div>
                    <div class="specification">
                        <div>
                            <p>Hash</p>
                            <span>{{ packageType.hashes }}</span>
                        </div>
                        <div>
                            <p>Duration</p>
                            <span>{{ packageType.duration }}</span>
                        </div>
                        <div>
                            <p>Order Code</p>
                            <span></span>
                        </div>
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
    background-color: var(--background-secondary);
}

.heading {
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
}

.content {
    @media (min-width: 1000px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}

.payment {
    background: rgba(255, 255, 255, 0.07);
    padding: 15px;

    @media (min-width: 1000px) {
        min-height: 500px;
        margin-right: 20px;
    }
}

.payment-info {
    font-size: 24px;
    font-weight: 500;

    p {
        color: rgb(96, 185, 103);
        margin: 10px auto;
    }

    span {
        color: rgb(223, 133, 43);
    }
}

.address {
    font-size: 12px;
}

.barcode {
    margin: 0 auto;
    margin-top: 40px;
    width: 180px;

    img {
        width: 100%;
    }
}

.package-selector {
    margin-top: 20px;
    background: rgba(255, 255, 255, 0.07);
    padding: 15px;

    @media (min-width: 1000px) {
        min-height: 500px;
        margin-top: 0;
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

.info {
    margin-top: 15px;

    select {
        color: #fff;
        width: 80%;
        height: 56px;
        padding: 20px 10px;
        background: rgba(255, 255, 255, 0.07);
        border: 0 solid #e7e7e7;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;

        option {
            width: 50px;
        }
    }
}

.counter {
    display: flex;
    align-items: center;
    margin-top: 15px;
    height: 100px;

    button {
        height: 20px;
        margin: 0 8px;
    }
}

.update {
    border: 0;
    color: #fff;
    min-height: 56px;
    cursor: pointer;
    padding: 16px 24px;
    background: rgb(223, 133, 43);
    border-radius: 90px;
    transition: background 0.5s linear 0s;
    font-size: 13px;
}

.specification {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100px;

    p {
        color: rgb(96, 185, 103);

    }

    span {
        color: rgb(223, 133, 43);
        font-size: 12px;
    }
}
</style>