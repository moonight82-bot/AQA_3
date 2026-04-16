const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    viewportHeight: 1366,
    viewportWidth: 768,
    defaultCommandTimeout: 6000,
    video: true,
    screenshotOnRunFailure: true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
