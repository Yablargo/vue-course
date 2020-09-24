# 7. Communicating between components

## 7.1 Props for parent to child component

Refer to starting code in git.

How do we pass data from parent (User.vue) to child component (UserDetails.vue)?

- create a `name` data and button to change name in User.vue.
- Create a `myName` prop in UserDetail.vue
- Pass the `name` data via `:myName`
- Create a `changeName()` method to change name to Anna

## 7.2 Using props in child component

- We can also use props data in children. Create `reverseName` method in `UserDetail.vue` to reverse `name` prop

Be careful not to mutate props directly.

Remember these 2 rules:

- Only the component can change it's own state
- Only the parent of the component can change the props

You can't use props with v-model because it'll change the props too.

## 7.3 Validating props

```
type: String
required: True
default: ''
```

For object & array:

```
type: Object,
default: function () {
  return { name: 'Shawn' }
}
```

## 7.4 Event for child to parent

- In UserDetail.vue, create `resetName()` method
- In User.vue, add `@nameWasReset` in `app-user-detail`

## 7.5 Using callback function

Another way for child to communicate with parent

- In parent `User.vue`, create `resetName()` method.
- Add `:resetFn="resetName"` to `app-user-detail`
- In `UserDetail.vue`, create a `resetFn` prop.
- Add a new button to call `resetFn()`

## 7.6 Communication between sibling components

2 methods:

1. Child -> Parent -> Child

- In `UserEdit.vue` create a `editAge() { this.$emit('ageWasEdited', newAge) }`
- In `User.vue` add `@ageWasEdited="age = $event"` in `app-user-edit`

This can become complicated quickly. Imagine if we have nested child components. Then we have to go from child to child to parent first.

2. Event Bus

A centralized part to hold some task/methods to use in your whole app.

- Create `const eventBus = new Vue({})` in `main.js`. Must put before `new Vue({})`
- import `main.js` in `UserEdit.vue`
- In `UserDetail.vue` add a created lifecycle hook to listen to this event.
- You can add a custom method in `eventBus` and call the function in `UserEdit.vue`

Now imagine we have multiple components that uses this age variable. To manage the state of this age, we need to always create a listener.

It can get very complicated.

A better solution? Vuex.

In summary:

- Parent to child, we use props.
- Child to parent, we use event.

## 7.7 Assignment Component communication

Refer git.

Did any of you felt that separating this Server functionality into different components is giving more headache?

This is a real dilemma we have in development too.

It's nice to see each function in its own component, but managing the state can be troublesome.

Vuex which you'll learn later will lessen the pain.

Also, if the component will only be used in one place, consider embedding it instead of creating a new component. Then you don't need to worry about managing and passing states.
