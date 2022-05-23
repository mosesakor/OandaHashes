<script setup lang="ts"></script>

<template>
  <footer>
    <div class="socials">
      <div class="links">
        <div>
          <img src="@/assets/ig.svg" alt="instagram" />
        </div>
        <div>
          <img src="@/assets/tel.svg" alt="telegram" />
        </div>
        <div>
          <img src="@/assets/fb.svg" alt="facebook" />
        </div>
        <div>
          <img src="@/assets/twt.svg" alt="twitter" />
        </div>
      </div>
      <div class="copyright">
        <span>Copyright © 2021</span>
        <span>Privacy policy</span>
      </div>
    </div>
    <div class="mail">
      <div>
        <a href="mailto:support@AtomicHashes.io">support@AtomicHashes.io</a>
      </div>
      <div>
        <span>Ask questions or send suggestions to us</span>
      </div>
    </div>
    <div class="mail">
      <div>
        <a href="tg.io">AtomicHashes Telegram</a>
      </div>
      <div>
        <span>Join our telegram for useful information on investments</span>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="less">
footer {
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  align-items: center;
  justify-self: center;
  gap: 1rem;

  @media (min-width: 980px) {
    flex-direction: row;
  }

  border-top: 1px solid var(--border-full);
  border-radius: 8px 8px 0 0;
  padding: 2rem 1rem 2rem;
}

.socials {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    color: #fff;
    background-repeat: no-repeat;
    width: 35%;
    position: relative;
  }
}

.links {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 10px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.5rem;
    height: 2.5rem;
    background-color: var(--background-secondary);
    border: 1px solid var(--border);
    border-radius: 50%;
    cursor: pointer;

    &:nth-child(3) {
      img {
        width: 22%;
      }
    }
  }
}

.copyright {
  display: flex;
  font-size: 0.8rem;
  gap: 1rem;
}

.mail {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  a {
    font-size: 1.5rem;
    font-weight: 600;
  }

  span {
    font-size: 0.9rem;
    max-width: 260px;
    display: block;
    padding: 5px;
  }
}
</style>
