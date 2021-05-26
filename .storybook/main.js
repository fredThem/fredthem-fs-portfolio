module.exports = {
  stories: [
    "../src/components/**/*.stories.js",
    "../src/stories/**/*.stories.js",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y",
    "storybook-addon-pseudo-states",
    require.resolve("storybook-addon-grid/preset"),
    require.resolve("storybook-addon-grid/chromatic"),
    "storybook-addon-outline",
  ],
};