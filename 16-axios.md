# 16. Axios

Starting code.

- In authentication module, we'll learn how to add authentication and form validation.

- We'll only focus on the axios part in this module.

- In `/components/auth/signup.vue` we'll POST the formData onSubmit to store in our database.

### Firebase as backend.

Create a new Firebase project.

Under realtime database, set up as test mode to allow read and write access to true.

In production, we only want to grant this to authenticated users.

https://vue-course-demo.firebaseio.com/

### Axios

`npm install --save axios`

Some packages can allow you to use axios via `this.axios` but we'll stick to the raw axios library.

## 16.1 POST and GET

In `signup.vue`, POST.

In `dashboard.vue`, GET to load data when we enter the page.

## 16.2 Global request configurations

Let's refactor the API URL.

In main.js.

### Interceptors

Functions executed for each axios requests.

### Multiple axios instances

In signup.vue, we use the other axios instance.
If your app is targeting multiple URLs, you'll want to use this pattern.
