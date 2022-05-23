<script setup lang="ts">
import InvestmentPackage from "../components/InvestmentPackage.vue";
import PackageData from "@/models/PackageData";
import NavigationBar from "../components/NavigationBar.vue";
import PageFooter from "../components/PageFooter.vue";
</script>

<template>
  <main>
    <div class="main-section">
      <NavigationBar />
      <div class="info">
        <h1>Investment Packages</h1>
        <p>
          Choose any valid package that meets all your requirements.
          <br />
          Each package has its own advantage.
        </p>
      </div>
    </div>
    <div class="packages">
      <InvestmentPackage v-for="v in PackageData" :key="v.type" :info="v" />
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
  min-height: 29.9rem;
  text-align: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    text-align: left;
  }

  .info {
    display: flex;
    flex-direction: column;
    margin: auto 0;

    h1 {
      font-size: 40px;
      font-weight: 900;
      color: var(--heading);
    }

    p {
      font-size: 16px;
      font-weight: 600;
    }
  }
}

.packages {
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  margin: 40px 0;

  @media (min-width: 648px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 980px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
