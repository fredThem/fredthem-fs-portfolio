# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

``` zsh
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

``` zsh
yarn test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

``` zsh
yarn build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

``` zsh
yarn eject
```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

---

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

### Getting Started with Styleguidist [#](https://create-react-app.dev/docs/developing-components-in-isolation#getting-started-with-styleguidist)

Styleguidist combines a style guide, where all your components are presented on a single page with their props documentation and usage examples, with an environment for developing components in isolation, similar to Storybook. In Styleguidist you write examples in Markdown, where each code snippet is rendered as a live editable playground.

Run the following command inside your app’s directory

``` zsh
npm run styleguide
```

After that, follow the instructions on the screen.

---

### Analyze the Bundle Size

[Source map explorer](https://www.npmjs.com/package/source-map-explorer) analyzes JavaScript bundles using the source maps. This helps you understand where code bloat is coming from.

To analyze the bundle run the production build then run the analyze script

``` zsh
npm run build
npm run analyze
```

---

### [Using HTTPS in Development](https://create-react-app.dev/docs/using-https-in-development)

> Note: this feature is available with react-scripts@0.4.0 and higher.

You may require the dev server to serve pages over HTTPS. One particular case where this could be useful is when using the "proxy" feature to proxy requests to an API server when that API server is itself serving HTTPS.

To do this, set the HTTPS environment variable to true, then start the dev server as usual with npm start:

Windows (cmd.exe)#

```zsh
set HTTPS=true&&npm start
```

> Note that the server will use a self-signed certificate, so your web browser will almost definitely display a warning upon accessing the page.

To avoid having to set the environment variable each time, you can either include in the npm start script like so:

```json
{
  "start": "HTTPS=true react-scripts start"
}
```

---

### [StorybookJS](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/)

Storybook runs alongside your app in development mode. It helps you build UI components isolated from the business logic and context of your app.

1. Run the test runner (Jest) in a terminal:

    ```zsh
    yarn test --watchAll
    ```

2. Start component explorer on port 6006:

    ```zsh
    yarn storybook
    ```

3. Run the frontend app proper on port 3000:

    ``` zsh
    yarn start
    ```

> [Known Issue Fix](https://github.com/storybookjs/storybook/issues/4764#issuecomment-737390932) Package Needs dependencie resolution to run correctly

```json
"resolutions": {
  "@storybook/react/babel-loader": "8.1.0"
}
```

---

Deploy the storybook with Chromatic's script

``` zsh
yarn chromatic
```
