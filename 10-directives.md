# Directives

Directives are these command like `v-bind` and `v-on`.

We'll look at some other built-in directives.

And we'll look at how to build your own directives to have a low-level access to DOM elements.

While you can build a component to make part of your app dynamic, you can place a tiny command (directive) in a HTML element to make it work.

All directives start with `v-`.

## 10.1 Built-in and custom directives

`v-text="msg"` is the same as {{ msg }}.

`v-html`. Be careful of cross site scripting attacks.

For custom directives:

Add `Vue.directive('highlight', {})` in `main.js`

There are 5 'lifecycle' hooks but you'll only use 'bind' and 'update' most often.

1. bind: once directive is attached
2. inserted: once inserted in parent node
3. update: once component is updated (without children)
4. componentUpdated: once component is updated (with children)
5. unbind: once directive is removed

Pass value to directive with `binding.value`.

Pass argument to directive with `binding.arg`.

## 10.2 Modifying custom directive with modifiers

Let say we want to delay the color change by 2 seconds.

`v-highlight:background.delayed`.

Create delayed modifier in `main.js` by using `binding.modifiers['delayed']`

## 10.3 Create a local directive that can be used in the component only

Create a `directives: {}` in script.

## 10.4 Using multiple modifiers

Let's create another 'blink' modifier.

## 10.5 Complex directive.

How do we allow user to change the interval of blinking too?

## 10.6 Assignment (15 minutes)

## Summary

Anyone still wonder why we need to learn directive?

Here are some cool directives that you can use in your project.
https://www.telerik.com/blogs/15-must-have-vue-directives-that-will-significantly-maximize-your-productivity
