<script setup lang="ts">
import NavigationBar from "@/components/NavigationBar.vue";
import InputField from "../components/InputField.vue";
import FormButton from "../components/FormButton.vue";
import PageFooter from "../components/PageFooter.vue";
</script>

<template>
  <main>
    <div class="main-section">
      <NavigationBar />
      <div class="info">
        <h1>Mining Equipment</h1>
        <p>
          AtomicHashes provides an all-in-one staking solution. Let us do the
          work, while you earn the rewards.
        </p>
      </div>
    </div>
    <div class="section">
      <div class="items">
        <div class="item">
          <img
            src="https://media.discordapp.net/attachments/775447356702851113/969254454010470440/eqp1.png?width=645&height=616"
            alt="Loading"
          />
          <h2>Asic Whatsminer M20S 70TH/s</h2>
          <p>
            MicroBT has released ASIC Whatsminer M20s 70 TH / s for Bitcoin
            mining on the SHA-256 algorithm.
            <br />
            <br />
            ASIC Whatsminer M20s 70 TH / s is made of high quality aluminum, so
            the structure of the device is reliably protected from mechanical
            damage. On the sides there are special coolers in the amount of 2
            pieces, which provide effective cooling, protecting the ASIC from
            overheating.
          </p>
          <br />
          <ul>
            <li>Scrypt mining hashrate: 70Th/s</li>
            <li>Hashing algorithm: SHA256</li>
            <li>Power efficiency: 67 J/GHs</li>
          </ul>
          <ul>
            <li>Power consumption: 3360W</li>
            <li>Chip name: TSMC</li>
            <li>Noise level: 75db</li>
          </ul>
        </div>
        <div class="item">
          <img
            src="https://media.discordapp.net/attachments/775447356702851113/969254454471827497/eqp2.png?width=498&height=616"
            alt="Loading"
          />
          <h2>Miner ASIC Antminer S15</h2>
          <p>
            The antminer S9 with 16nm chips, which held the lead for almost two
            years, was replaced by a new model - the asic Bitmain Antminer S15.
            <br />
            <br />
            Power consumption is comparatively economical, and the case uses a
            lightweight but durable aluminum alloy to help speed up cooling.
          </p>
          <br />
          <ul>
            <li>Scrypt mining hashrate: 28 Th/s</li>
            <li>Hashing algorithm: SHA256</li>
            <li>Power efficiency: 57 J/GHs</li>
          </ul>
          <ul>
            <li>Power consumption: 1600W</li>
            <li>Chip name: BM1391</li>
            <li>Noise level: 80db</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="list">
        <div class="list-item">
          <h2>Consistency</h2>
          <p>
            The company has taken care of the systematization of the functions
            for activating packages and payments.
          </p>
        </div>
        <div class="list-item">
          <h2>Regularity</h2>
          <p>
            Regularity and automation of payments are provided for quick profit
            without problems.
          </p>
        </div>
        <div class="list-item">
          <h2>Reliability</h2>
          <p>
            The company is responsible for the security of this server and
            provides mining, which ensures a greater degree of confidentiality.
          </p>
        </div>
        <div class="list-item">
          <h2>Innovation</h2>
          <p>We have managed to open access to eco-mining for everyone.</p>
        </div>
        <div class="list-item">
          <h2>Functionality</h2>
          <p>
            Thanks to the functionality of the server, buying, withdrawing and
            tracking your balance are not difficult for our clients.
          </p>
        </div>
        <div class="list-item">
          <h2>Individuality</h2>
          <p>
            Our support team tries to individually approach each client, taking
            into account your wishes, we try to implement this as soon as
            possible for further use.
          </p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="fast-start">
        <div class="title">
          <h2>
            Try mining with AtomicHashes today and get your first profit within
            24 hours
          </h2>
        </div>
        <div class="form">
          <div class="main-info-form">
            <InputField placeholder="Enter e-mail"></InputField>
            <FormButton>Get Started</FormButton>
          </div>
        </div>
      </div>
    </div>
    <LastSection>
      <Footer />
    </LastSection>
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

.items {
  @media (min-width: 980px) {
    display: grid;
    grid-template-columns: auto auto;
    gap: 1rem;
    padding: 50px;
    text-align: center;
  }
}

.item {
  background-color: var(--background-secondary);
  border: 1px solid var(--border);
  text-align: center;
  margin-top: 20%;
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;

  ul {
    list-style-type: "🔥 ";

    @media (min-width: 980px) {
      padding: 10px;
      display: inline-block;
      zoom: 1;
    }
  }

  ul li {
    text-align: left;
    font-size: 12px;
  }

  img {
    height: 200px;
    width: 200px;
    text-align: center;
    margin-top: -10%;
  }

  h2 {
    color: var(--heading);
  }

  p {
    font-size: 0.9rem;
  }

  @media (max-width: 980px) {
    img {
      height: 150px;
      width: 150px;
      text-align: center;
      margin-top: -15%;
    }
  }
}

.list {
  background-image: url("");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

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

.list-item {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;

  border: 1px solid var(--border);
  border-radius: 8px;

  @media (min-width: 980px) {
    display: inline-block;
  }

  @media (max-width: 980px) {
    width: fit-content;
  }

  h2 {
    color: var(--heading);
  }
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 980px) {
    margin-top: 80px;
    padding-left: 10%;
  }
}

.main-info-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  gap: 0.5rem;

  @media (min-width: 980px) {
    margin: 0;
    flex-direction: row;
  }
}

.title {
  text-align: center;
  color: var(--heading);

  @media (min-width: 980px) {
    text-align: left;
    margin-right: 2rem;

    h2 {
      font-size: 2rem;
    }
  }
}

.fast-start {
  background-image: url("@/assets/bg-form.svg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 150px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 980px) {
    display: flex;
    padding: 40px 20px 20px 20px;
  }
}
</style>
