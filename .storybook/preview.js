import "../src/index.scss";
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
