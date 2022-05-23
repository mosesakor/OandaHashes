<script setup lang="ts">
import CollapsibleContent from "../components/CollapsibleContent.vue";
import NavigationBar from "../components/NavigationBar.vue";
import PageFooter from "../components/PageFooter.vue";
</script>

<template>
  <main>
    <div class="main-section">
      <NavigationBar />
      <div class="info">
        <h1>FAQ</h1>
        <p>
          Here we have tried to answer frequently asked questions. Please read
          the below before contacting support.
        </p>
      </div>
    </div>
    <div class="section">
      <div class="box">
        <CollapsibleContent title="1. How to start mining with AtomicHashes?">
          Read the Terms of Service, create an account, login and familiarize
          yourself with the currently available packages.
        </CollapsibleContent>
        <CollapsibleContent title="2. How can I purchase a package?">
          Select the package that interests you and follow the on-screen
          instructions.
          <br />
          In order to pay for any package, a virtual wallet is required which
          will be used to transfer the amount required for the selected package
          to the wallet address that is indicated.
        </CollapsibleContent>
        <CollapsibleContent title="3. How to withdraw earned profit?">
          Enter the Payout section, enter your wallet address and the amount you
          would like to withdraw. The amount should not exceed your account
          balance and your wallet address must be valid, otherwise the
          withdrawal is not possible.
        </CollapsibleContent>
        <CollapsibleContent title="4. How to use the Referral Program?">
          You can find information about the referral program on our website.
          Invite a friend, purchase packages together and get your bonus.
        </CollapsibleContent>
        <CollapsibleContent
          title="5. Is there a minimum or maximum purchase amount?"
        >
          The prices range from $100 to $18,000. For more details, enter the
          Packages tab.
        </CollapsibleContent>
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

.section {
  margin: 1rem;
  padding: 1rem;
}

.main-info {
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 3rem 0;

  h1 {
    font-size: 40px;
    line-height: 48px;
    color: var(--heading);
  }

  p {
    font-size: 16px;
  }

  @media (min-width: 980px) {
    max-width: 500px;
    margin: 0;
    text-align: left;
    padding: 50px 0px;

    h1 {
      font-size: 64px;
      line-height: 72px;
    }
    p {
      font-size: 22px;
    }
  }
}

.box {
  @media (min-width: 980px) {
    text-align: left;
  }
}
</style>
