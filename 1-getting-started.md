# 1. Getting started

## 1.1 Creating your first application

Use [https://unpkg.com/vue@2.6.12/dist/vue.js](https://unpkg.com/vue@2) to use Vue 2.

- Create a Vue instance with `new Vue({})`.
- `el` is a reserved property to tell Vue which part of HTML code to control
- Your first introduction on `data` property

https://jsfiddle.net/lss/z5vq7nLd

## 1.2 Extending with `methods` property

Let's update the title based on what user enters.

- `v-on` is a directive. This is a special command that Vue recognize. This `v-on` tells Vue "Please listen to some event."
- Add argument e.g. `v-on:input=""`, which fires on each keystroke.
- `this.title` is a magic done by Vue. You can access all data and method by using `this`.
- Vanilla JS creates a event object automatically, so it's automatically passed to our method.

https://jsfiddle.net/lss/v54m0tzo

## 1.3 Using Vue locally

Download `vue.js` script from `https://vuejs.org/v2/guide/installation.html`.

Then you can include it in your HTML locally.

```
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>VueJS</title>
	<link rel="stylesheet" href="">
	<script src="vue.js"></script>
</head>
<body>
<div id="app">
  <input type="text" v-on:input="changeTitle">
  <p>{{ title }}</p>
</div>
<script>
  new Vue({
  el: '#app',
    data: {
      title: 'Hello World!'
    },
    methods: {
      changeTitle: function(event) {
          this.title = event.target.value;
      }
    }
  });
</script>
</body>
</html>
```
