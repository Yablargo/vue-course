# 2. Template syntax and Vue directives

## 2.1 Template syntax

In our [Hello World code](https://jsfiddle.net/lss/z5vq7nLd/8), we saw the first introduction of Vue string interpolation `{{ }}`.

Vue is the layer in the middle that reads our HTML code, creates a template and outputs the final HTML code.

You don't need use `this` in the HTML template code.

We can also use value returned by methods by `{{ myMethod() }}`.

## 2.2 Binding attributes with `v-bind` directive

String interpolation only works in text.

What if you want to bind a value to HTML element, e.g. `href`?

`<a href="{{ link }}">` will not work.

Use `v-bind` directive, an instruction to tell Vue to bind a value.

https://jsfiddle.net/lss/kuhnt40f/3/

## 2.3 Disable re-rendering with `v-once` directive

https://jsfiddle.net/lss/05g1z72a/

## 2.4 Output raw HTML with `v-html`

https://jsfiddle.net/lss/dc0nj65v/

Be cautious of using `v-html` because it allows cross site scripting attacks.

Only use this if you have control of what's placed inside `v-html`.

Allowing user to control what goes into `v-html` is dangerous.

## 2.5 Assignment on template syntax (15 minutes)

Assignment: https://jsfiddle.net/lss/kanyjt5v/

Solution: https://jsfiddle.net/lss/jse2kzau/

One common gotcha is the `v-bind:src="''"` for images.

Also in the solution you'll see that `:` is the shorthand for `v-bind`.

You can also use `@` as as shorthand for `v-on`.

## 2.6 Listening to events

https://jsfiddle.net/lss/wmd25qoh/

Let's create a simple counter where on each mouse click, we'll increase the counter.

We can ask Vue to listen to mouse click events on a button.

1. `$event` is the object output by vanilla Javascript. It contains values such as coordinates.
2. Passing argument to method.
3. Example of other events Vue can hear.
4. Event modifiers: stop
5. Listening to keyboard event

List of key modifiers: https://vuejs.org/v2/guide/events.html

## 2.7 Assignment on event modifiers (15 minutes)

Assignment: https://jsfiddle.net/lss/r7hzcfg1/

Solution: https://jsfiddle.net/lss/cafqty3x/

## 2.8 Two way bindings using v-model

`v-model` is basically:
`:value="something" @:input="something = $event.target.value"`

## 2.9 Computed property

Look at this code: https://jsfiddle.net/lss/95yt6usk/ . How can we improve this?

Use computed property: https://jsfiddle.net/lss/q9jLsah5/

Every computed property can be used just like data.

Think of computed property like another view of your data. You can add custom logic or clean the data before displaying it.

## 2.10 Watchers

https://jsfiddle.net/lss/d4vh6xeg/

Watchers are useful if you want to create functions like auto-saving in your app.

## 2.11 Assignment on reactive properties (15 minutes)

Assignment: https://jsfiddle.net/lss/frbxw6hv/

Solution: https://jsfiddle.net/lss/pdbh3Lu4/

## 2.12 Dynamic styling with CSS classes

https://jsfiddle.net/lss/a0qves7k/

Can you imagine how to create a progress bar? We can dynamically adjust the width with this.

## 2.13 Styling with `:style`

https://jsfiddle.net/lss/8vmyfegu/

## 2.14 Assignment styling (30 minutes)

Assignment: https://jsfiddle.net/lss/gd309r4c/

Solution: https://jsfiddle.net/lss/6rmh9qvk/
