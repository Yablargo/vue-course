# 12. Animations

## 12.1 Transitions

Let's add an element to the DOM.

Wrap transitions with `<transition>`.

You can only animate one element with transition. You can have multiple elements, but must alternate between them. Check console to see error.

### Transition CSS classes.

`<transition name="fade">`

By naming the transition, Vue will add these to the element:

-enter

Vue will add a 'fade' CSS class only for 1 frame at the beginning of this animation.

-enter-active

Vue will attach this \* class until the end of the animation. Vue will cleverly look at how long the animation require and determine the lenght.

-leave

-leave-active

'v-enter' if no name is provided.

Let's create a fade transition.

In `.fade-enter-active`, you don't need `opacity: 1` because opacity = 1 is the default and `fade-enter` is removed after one frame.

In fact, you'll not see any animation because it'll override the transition.

## 12.2 CSS animation

The difference between CSS transition and animation is that CSS transition can only change between 2 states.

CSS animation can change over many states.

Animation requires `@keyframes`.

What happens if we put the animatio in '-enter' instead of '-enter-active'?

## 12.3 Mixing animation and transition

We want the slide-in to fade in also.

What happens if we set the transition in `slide-leave-active` to 3s? It'll jumps.

We can tell Vue to use the shorter duration with `type="animation"` or `type="transition"`.

## 12.4 Initial load animation

Let's learn some ways to fine tune the animation.

How can we animate some element when we land on the page?

Add `appear` to transition.

## 12.5 Animate.css

https://animate.style/

The problem here is that when we use the `name="someClass"`, Vue will always create those '-enter' and '-leave' classes.

How can we tell Vue to use different classes than the default?

We can use these:

- enter-class
- enter-active-class
- leave-class
- leave-active-class

## 12.6 How to continue transition into another element?

If we use `v-if v-else` we don't see the fade transition.

Vue can't differentiate them. Vue only replaces the element and not attaching the fade class transition correctly.

We need to key them - any name will do.

Add `mode` to fix ugly jumping animation.

mode="out-in" or "in-out".

"out-in" let the old element animate out first then animate the new one.

## 12.7 Animating with JS

@before-enter, @enter, @enter-after, @enter-cancelled...

We always need to call 'done()' in enter and leave when we animate with JS.

We can tell Vue not to look for css class to add those '-enter' classes. To do that, we add `:css="false"`.

Now let's grow the width of the div.

## 12.8 Animating dynamic components

Wrap `<component>` within transition.

## 12.9 Animating list with `<transition-group>`

One important difference between transition and transition-group.

<transition> is not rendered to DOM.

<transition-group> renders a new HTML tag. It's <span> by default. You can overwrite it by using <transition-group tag="div">

Try to remove 'key'. The list will not work because we need to let Vue to know which element is which.

<transition-group> gives us a new class: `.slide-move`. This is attached to element that needs to change its place because a new element in added/deleted.
