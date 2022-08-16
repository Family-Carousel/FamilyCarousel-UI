<template>
  <div class="unsupported-browser">
    <div class="v-container">
      <h1 class="title">You're Using An Unsupported Browser</h1>
      <p class="subtitle">
        Older browsers can't provide a reliable experience, and many features of
        this site may not work properly.
      </p>
      <p class="text">Please Install A Supported Browser</p>

      <ul class="grid">
        <li>
          <a
            class="browser browser--chrome"
            href="https://www.google.com/chrome/"
            target="_blank"
            rel="noopener"
          >
            <span class="sprk-b-Link">Chrome</span></a
          >
        </li>
        <li>
          <a
            class="browser browser--firefox"
            href="https://www.mozilla.org/en-US/firefox/new/"
            target="_blank"
            rel="noopener"
          >
            <span class="sprk-b-Link">Firefox</span></a
          >
        </li>
        <li>
          <a
            class="browser browser--edge"
            href="https://www.microsoft.com/en-us/edge"
            target="_blank"
            rel="noopener"
          >
            <span class="sprk-b-Link">Edge</span></a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import setPageData from "@/mixins/setPageData";

export default {
  mixins: [setPageData],
  head() {
    return {
      title: "Unsupported Browser | Rocket Auto",
      meta: [
        // This page is only for IE users so we don't want to index it:
        {
          hid: "robots",
          name: "robots",
          content: "noindex, nofollow",
        },
      ],
    };
  },
};
</script>

<style scoped>
.unsupported-browser {
  padding: 32px 0 24px;
  background: #ffffff;
  text-align: center;

  @media (--medium) {
    padding-top: 48px;
  }
}

.title {
  margin-bottom: 24px;
  font-size: 32px;
  font-weight: bold;
  line-height: 1.06;
  letter-spacing: -0.8px;

  @media (--medium) {
    font-size: 40px;
    line-height: 1.35;
    letter-spacing: -1px;
  }
}

.subtitle {
  margin: 0 auto 32px;
  font-size: 26px;
  font-weight: bold;
  line-height: 1.23;
  text-align: center;
  max-width: 680px;
}

.text {
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
}

.grid {
  font-size: 15px;
  display: flex;
  margin: 32px auto;
  max-width: 602px;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (--medium) {
    justify-content: space-between;
  }
}

.browser {
  display: block;
  margin: 0 33px 33px;
  padding-top: 115px;
  min-width: 100px;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 100px;
}

.browser--chrome {
  background-image: url("/chrome-logo.png");
}

.browser--firefox {
  background-image: url("/firefox-logo.png");
}

.browser--edge {
  background-image: url("/edge-logo.png");
}
</style>
