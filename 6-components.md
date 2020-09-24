# 6. Components basic

Each Vue component has its own data.

That's why we need it to be a function and not object.

Only Vue instance can use data as an object.

## 6.1 Importing components

- Study the vue-cli files.
- Look at how components are used.

## 6.2 Assignment - refactoring with components

Refer to git.

## 6.3 Naming component tagss

When including components, you can name it using camel case or dash.

My preferred way is to always use dash in template because it's how HTML is rendered.

And I prefer to name the `.vue` file of the component with prefix so that I can import it ES6 style.

## 6.4 Scoping styles

Always use scoped when adding CSS for a component.

Maintain a separate 'main.css' for app-level CSS.
