const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://app.pricelabs.co",
    chromeWebSecurity: false,
    watchForFileChanges: true,
    viewportWidth: 1890,
    viewportHeight: 1000,
    defaultCommandTimeout: 150000,
    retries: 0,
    experimentalMemoryManagement: true,
    allowCypressEnv: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    apiBaseURL: "https://app.pricelabs.co/api",
  },
  env: {
    apiBaseURL: "https://app.pricelabs.co/api",
    apiLoginURL: "",
  },
});
