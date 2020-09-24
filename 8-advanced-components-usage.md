# 8. Advanced component usage

## 8.1 Slot Intro

What if you want to pass a block of HTML code to your child component?

Slot is used for contents passed from outside the component.

Create

```
<div>
  <slot></slot>
</div>
```

Scoped styles affect slots.

## 8.2 Named slots

You can name slots to pass it where you want in the component.

```
<slot name="title"></slot>

<h2 name="title">Title</h2>
```

## 8.3 Default slot

If a slot is not named, it'll catch all and show it there.

You can also have HTML code inside a slot. This will display a default HTML if there's no slot passed inside.

## 8.4 Dynamic components

- Display component based on which button was pressed.
- Create Author and New components

```
<component :is="selectedComponent">
</component>
```

Use this instead of `v-if` whenever you can. This is cleaner and doesn't require you to chain multiple v-ifs.

Is the component recreated or we use an existing instance?

- Create a counter in New.vue
- The counter resets to 0 after we switch component.

Components are destroyed and recreated when we use dynamic components.

Use `keep-alive` to never destroy the component.

If you want to use keep-alive and still do some logic after you navigate away, you can use these 2 lifecycle hooks:

- deactivated
- activated

## 8.5 Assignment (15 minutes)

Click on button to switch component.
