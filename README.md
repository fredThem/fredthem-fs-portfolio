# Welcome to my react learning experiment's log 📓

 🌎 View live app 👉 [fredthem-fs-portfolio.herokuapp.com](https://fredthem-fs-portfolio.herokuapp.com/)

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://master--60a5dae198415900393e5c23.chromatic.com/)

---

## 🔭 View all isolated UI components on [storybook.js](https://master--60a5dae198415900393e5c23.chromatic.com/) 👈 👀

*Runs alongside this app in development mode. Helps building UI components isolated from the business logic and context of the app.

> ☝️ I'm using [chromatic](https://www.chromatic.com/library?appId=60a5dae198415900393e5c23&branch=master)'s CI to catch unwanted regressions & work with others for 📥 PR's UI rewviewing and testing 🚧.

![](2021-05-21-20-04-06.png =400x)

```zsh
# Developing with storybook's scripts group for 
    
    # 1. Run the test runner (Jest) in a terminal:
    $ yarn test --watchAll
    # 2. Start component explorer on port 6006:
    $ yarn storybook
    # 3. Run the frontend app proper on port 3000:
    $  yarn start

## Deploy the storybook with Chromatic's script
    $ yarn chromatic
```

### Addons

> Storybook [Controls](https://storybook.js.org/docs/react/essentials/controls)  gives you a graphical UI to interact with a component's arguments dynamically, without needing to code. It creates an addon panel next to your component examples ("stories"), so you can edit them live.

---
