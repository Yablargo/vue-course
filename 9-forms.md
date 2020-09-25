# 9. Forms

## 9.1 Input

Look at the starting code.

We need to start hooking up so that the input changes the data below.

- Email. Create data, use v-model and display Mail

## 9.2 Using object in v-model

`userData.email`

## 9.3 Modifying user input

Use the `v-model.lazy` modifier to trigger it only after we click outside of the input.

Use `v-model.trim`.

You can also chain it `v-model.lazy.trim`

## 9.4 Text area and saving line breaks

- create a new 'message' data
- Always use v-model to set default value
- To preserve line breaks, use style="white-space: pre;"

## 9.5 Checkbox and array of data

- We need an array to store the type of mail to send.
- Create a 'sendMail' array in data
- Display the array

## 9.6 Radio buttons

- Create a 'gender' data

Vue knows that they are bound to the same data, so only one radio can be selected.

Vue automatically store the value of radio in data.

## 9.7 Dropdowns

`:selected="priority == 'Medium'"` to select Medium by default.

## 9.8 Custom input

We want to build a custom on & off switch.

Understand that `v-model` is essentially:

`:value="something" @input="something = $event.target.value"`

So our custom input must have:

- a prop named `value`
- emit an event called `input`

## 9.9 Form submission

A button in a form element will submit the form to the server by default.

We don't want this default behavior. We want Vue to handle this.

Use `@click.prevent` to prevent the default behavior.
