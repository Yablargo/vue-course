# 5. Development workflow

## 5.1 Vue-cli

Vue-cli allow us to quickly start a fresh Vue project by using project template.

It allows you to start coding Vue, instead of tinkering with other configurations such as webpack.

To install:

```
sudo npm install -g @vue/cli
vue create vue-cli

cd vue-cli
npm run serve
```

## 5.2 Understanding the folder structure

- `babel.config.js` is a transpiler to allow us to write ES6 code and transpile it to ES5 to run in all browsers.
- `public/index.html` is the file that will be served. You don't need to edit this. Vue will handle this.
- `main.js` is the Vue instance.
- `App.vue` is the entry point.

All `.vue` files have this structure:

- template
- script for Vue code.
- style

Each `.vue` file is a single Vue template. Webpack compile this to Javascript code and inject it into index.html.

`npm run build` will do some optimization before producing the dist folder.
