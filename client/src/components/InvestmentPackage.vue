<script setup lang="ts">
import type { PackageInfo } from "@/models/PackageData";
import FormButton from "./FormButton.vue";

defineProps<{ info: PackageInfo }>();
</script>

<template>
  <div class="container">
    <div class="heading">
      <h2>{{ info.type }}</h2>
      <img :src="info.img" alt="" />
    </div>
    <div class="body">
      <div>
        <p>Referral level</p>
        <p>{{ info.level }}</p>
      </div>
      <div>
        <p>Duration of the contract</p>
        <p>{{ info.duration }}</p>
      </div>
      <div>
        <p>Daily profit</p>
        <p>{{ info.profit }}</p>
      </div>
      <div>
        <p>Number of hashes</p>
        <p>{{ info.hashes }}</p>
      </div>
    </div>
    <div class="footer">
      <p>${{ info.price }}</p>
      <FormButton>
        <span>I want this package</span>
      </FormButton>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  background-color: var(--background-secondary);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--border);
}

.heading {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-full);

  h2 {
    font-size: 1.25rem !important;
  }

  img {
    width: 2rem;
  }
}

.body {
  flex-grow: 1;
  padding: 1rem 0;

  div {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    padding: 0;
    margin: 0;

    p {
      margin: 6px 0;
      color: var(--heading);

      &:first-child {
        color: var(--text);
      }
    }
  }

  span {
    display: block;
  }
}

.footer {
  display: flex;
  flex-direction: column;
  margin: 0;

  p {
    font-size: 40px;
    margin: 0.5rem 0;
    text-align: right;
    color: var(--heading);
  }
}
</style>
