# 4. Understanding Vue instance

## 4.1 Multiple Vue instances?

Is it possible?

Yes. You'll see it in some real application where you don't need an entire SPA built on Vue.

If you need certain part of an app to use Vue, like a widget, you can use this way.

https://jsfiddle.net/lss/jsov9knp/

But I recommend just keeping to one Vue instance.

## 4.2 refs

Not used that often.

https://jsfiddle.net/lss/urahs0xL/

## 4.3 Lifecycle

https://vuejs.org/v2/guide/instance.html

Created lifecycle is used for fetching data from backend API and setting it to data properties.

The difference between created and mounted is that mounted has access to DOM, so you can't change HTML element in created.

https://jsfiddle.net/lss/6oj1ntfg/
