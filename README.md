# View live app on [react-experimenting.herokuapp.com](https://react-experimenting.herokuapp.com/)
## View all comps with [chromatic](https://www.chromatic.com/build?appId=60a5dae198415900393e5c23&number=4)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


---

### [StorybookJS](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/)

Storybook runs alongside this app in development mode. to help building UI components isolated from the business logic and context of your app.

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
