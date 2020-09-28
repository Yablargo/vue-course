# 17. Authentication

## 17.1 How authentication works in SPA

Server ---- SPA

In a SPA, we work with RESTful API which are stateless and don't have a session.

So we work with Token that's stored in server.

We store the token in the front-end in localStorage.

Setup firebase.

- Create new authentication
- In database > rules, make `read: auth != null`

https://firebase.google.com/docs/reference/rest/auth#section-create-email-password

## 17.2 User signup

signup.vue

Remove headers to make it work

## 17.3 User signin

signin.vue

But dashboard won't work yet because we're still not storing any token.

## 17.4 Use Vuex to send auth requests

Create action & mutation for signup and login.

After signup, use devtools to see state change.

## 17.5 Token

Update store, dashboard.

Route guard in router.js

## 17.6 Logout

Create new mutation and action in store.

## 17.7 Auto-login

When user refreshes the page, they'll be logged out.
