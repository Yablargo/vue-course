# 14. VUEX - better state management

## 14.1 Intro

Let's review our state management:

1. Parent-child communication via prop and callback/event.

This becomes harder when we have multiple layers or nested components.

2. Event bus

Bus can get crowded and hard to maintain. It's hard to track changes.

Vuex will be our centralized state where we have 1 file to store our application state.

`npm install --save vuex`

Create a store.js and counter state.

## 14.2 Getters

What if you want to get a formatted state or counter \* 2 in multiple components?

Using computed property isn't DRY.

Solution: Getters

Is there a shorter way to write getters without having to repeat the computed properties? Use `mapGetters`.

Notes on spread operator: https://jsfiddle.net/lss/us4zpvLd/

## 14.3 Mutations

Changing state outside of Vuex store is not recommended. This can cause the code hard to maintain.

Use mutations to change Vuex states.

Use `mapMutations`.

Mutations only run synchronous.

To run async stuff, use Actions.

Let's say we run the counter with a delay of 1 second.

Best practice: use mutation to mutate state. Actions to run async functions and commit mutations.

## 14.4 Actions

Use mapActions.

Pass payload to actions.

If want to pass more than 1 payload, use an object.

## 14.5 Use v-model with Vuex

v-model alone won't work.

You can use :value & @input, but it's tedious.

You can create a getter and setter for computed properties.

This is rarely used in computed because we usually only get in computed properties.

Some people will find it safer to use the :value and @input.

## 14.6 Better folder structure

- Use modules
- Use namespace to avoid duplicate name
