const { defineConfig } = require("cypress");

const environments = {
  firstenv: {
    baseUrl: "https://qauto.forstudy.space/",
    email: "client_for_study@testinator.com",
    password: "Qwerty123!",
  },
  secondenv: {
    baseUrl: "https://qauto2.forstudy.space/",
    email: "client_for_study3@testinator.com",
    password: "Trewq1234",
  },
};

const envName = process.env.TEST_ENV || "firstenv";
const activeEnv = environments[envName];

module.exports = defineConfig({
  e2e: {
    baseUrl: activeEnv.baseUrl,

    env: {
      email: activeEnv.email,
      password: activeEnv.password,
    },

    // optional
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      reportPageTitle: "custom-title",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
  },
});
