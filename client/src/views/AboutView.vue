<script setup lang="ts">
import FormButton from "../components/FormButton.vue";
import InputField from "../components/InputField.vue";
import NavigationBar from "../components/NavigationBar.vue";
import PageFooter from "../components/PageFooter.vue";
</script>

<template>
    <main class="container">
        <div class="main-section">
            <NavigationBar />
            <div class="box">
                <div class="main-info">
                    <h1>ABOUT</h1>
                    <p>Oanda Hashes opens access to eco-mining for everyone</p>
                </div>
                <div class="main-info-form">
                    <InputField placeholder="Enter e-mail" />
                    <FormButton>
                        <span>Get Started</span>
                    </FormButton>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="content-box">
                <h2><span>Services</span>That We Continue To Improve</h2>
            </div>
            <div class="brochure-wrapper">
                <div class="brochure">
                    <img src="@/assets/icon01.svg" alt="" />
                    <h3>Security and Privacy</h3>
                    <p>
                        We present a mining service that provides a high degree of
                        confidentiality. In this regard, we keep the collection of user data
                        to a minimum and are responsible for the security of this server.
                    </p>
                </div>
                <div class="brochure">
                    <img src="@/assets/icon02.svg" alt="" />
                    <h3>Eco-friendly product</h3>
                    <p>
                        For the platform we offer, we have acquired high-quality and
                        environmentally friendly equipment for the efficiency of the mining
                        system.
                    </p>
                </div>
                <div class="brochure">
                    <img src="@/assets/icon03.svg" alt="" />
                    <h3>Instant payouts</h3>
                    <p>
                        The income from your mining is accrued daily using an automatic
                        payout system.
                    </p>
                </div>
                <div class="brochure">
                    <img src="@/assets/icon04.svg" alt="" />
                    <h3>Stable income</h3>
                    <p>
                        The presence of regular payments, a variety of mining packages and
                        an easy-to-use interface provide you with a stable and passive
                        income.
                    </p>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="about">
                <div class="image">
                    <img src="@/assets/about_image.svg" alt="" />
                </div>
                <div class="text">
                    <h2><span>Cloud</span>Mining</h2>
                    <p>
                        We provide mining services that use only renewable energy. The
                        platform is intended for both beginners and professionals in the
                        field of cryptocurrency.
                    </p>
                    <p>
                        When using our service, our users get the opportunity to control
                        their profits around the clock, and the company at that time takes
                        care of all the concerns to ensure safety and smooth operation.
                    </p>
                    <FormButton>
                        <span>Get Started</span>
                    </FormButton>
                </div>
            </div>
        </div>
    </main>
    <PageFooter />
</template>

<style scoped lang="less">
main {
    overflow: hidden;
}

.main-section {
    background-image: url("@/assets/atom_background.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0.5rem 1rem 2rem;
    background-attachment: fixed;
    min-height: 29.9rem;

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
    display: flex;
    flex-direction: column;
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

.main-info-form {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    gap: 0.5rem;

    @media (min-width: 980px) {
        margin: 0;
        flex-direction: row;
    }
}

.box {
    @media (min-width: 980px) {
        text-align: left;
    }
}

.content-box {
    text-align: center;

    span {
        color: var(--link-active);
        margin-right: 10px;
    }

    h2 {
        color: var(--heading);
        font-size: 32px;
        line-height: 40px;
        margin-bottom: 32px;
    }
}

.brochure-wrapper {
    @media (min-width: 980px) {
        display: grid;
        grid-template-columns: 1fr 1fr;

        div {

            &:last-child,
            &:nth-child(2) {
                border-left: 1px solid var(--border-full);
            }

            &:nth-child(1),
            &:nth-child(2) {
                border-top: 0;
            }
        }
    }
}

.brochure {
    padding: 15px;
    border-top: 1px solid var(--border-full);

    img {
        width: 56px;
    }

    h3 {
        color: var(--heading);
        padding-bottom: 0.25rem;
    }

    p {
        margin: 0;
        font-size: 0.9rem;
        font-weight: 400;
    }
}

.about {
    @media (min-width: 980px) {
        display: flex;
    }
}

.image {
    @media (min-width: 980px) {
        width: 50%;
    }
}

.text {
    display: flex;
    flex-direction: column;
    text-align: right;
    align-items: center;
    align-self: center;
    text-align: center;
    gap: 0.5rem;

    span {
        color: var(--link-active);
    }

    h2 {
        font-size: 2rem;
        color: var(--heading);
    }

    h4 {
        font-size: 1.25rem;
        color: var(--heading);
    }

    p {
        font-size: 1rem;
        font-weight: 400;
        max-width: 500px;
        margin: 0 auto;
    }

    @media (min-width: 980px) {
        align-items: flex-end;
        align-self: center;
        margin-top: 30px;
        text-align: righy;
        padding: 40px;
    }
}

.packages {
    h2 {
        font-size: 3rem;
        font-weight: 800;
        color: var(--heading);
    }
}

.duration {
    padding: 0;

    li {
        list-style-type: none;
        padding: 1rem;
        border-radius: 8px;
        text-align: center;
        margin: 8px;
        font-weight: 600;
        font-size: 1rem;
        background-color: var(--background-tertiary);
        border: 1px solid var(--border);

        &:hover {
            background-color: var(--background-secondary);
        }
    }
}

.content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;

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

.fast-start {
    background-image: url("@/assets/bg-form.svg");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 150px 20px 20px 20px;

    @media (min-width: 980px) {
        display: flex;
        padding: 40px 20px 20px 20px;
    }
}

.title {
    text-align: center;
    color: var(--heading);

    @media (min-width: 980px) {
        text-align: left;
        width: 600px;
        margin-bottom: 20px;

        h2 {
            font-size: 40px;
        }
    }
}

.form {
    @media (min-width: 980px) {
        margin-top: 80px;
        padding-left: 10%;
    }
}
</style>
