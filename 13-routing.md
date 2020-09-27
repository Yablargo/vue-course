# 13. Routing

Now we can start building a SPA with router.

Technically a SPA is a single index.html page. We then use this router to simulate navigation over several pages.

## 13.1 Setting up vue-router

`npm install --save vue-router`

- Import vue-router in main.js
- Create routes in routes.js
- Insert <router-view> in App.vue to tell Vue to load component at the place.

## 13.2 Routing mode: hash vs history

The '#' is commonly found in SPA.

A normal URL without the '#' will get sent to the server.

In SPA, we don't want to send to server. We want to handle it in our local server.

But we can have the normal URL and still have the SPA.

We need to tell the server to always return the index.html.

## 13.3 Navigating with Router Links

We don't want to use `<a href="#">` because it'll send to server.

To have the SPA handle it we need `<router-link>`.

## 13.4 Active link

We can't use Bootstrap `class=active` because we're using router-link.

To do this, we can use `tag="li" active-class="active"` and `<a>Home</a>`.

## 13.5 Navigating from code

In User.vue, `this.$router.push('/')`.

## 13.6 Route parameter

/user/:id

Access params by `this.$route.params.id`.

One problem is if we have 2 routes: /user/1 and /user/2. The loaded ID doesn't change because we're already on the component. Vue will not recreate the component.

So we need to watch for route params changes.

Solution: create a watcher for `$route`.

We can also use 'props: true' in vue-router. https://github.com/vuejs/vue-router/tree/dev/examples/route-props

## 13.7 Nested routes

- In User.vue, create router-view for children.
- Add children in routes.js
- To make `UserStart.vue` clickable, change it to router-link
- Show User data in `UserDetail.vue`. You don't need a watcher here because there's no way to change to another user in UserDetail page.

## 13.8 Named routes

We can replace:

```
:to="`/user/${$route.params.id}/edit`"

:to="{ name: 'userEdit', params: { id: $route.params.id } }"
```

This is easier to edit and manage.

You can also use it in `this.$router.push({ name: 'home' })`

Use this named routes more because it'll save you the trouble of changing in path in multiple files.

## 13.9 Query params

In UserDetail.vue,

```
      :to="{
        name: 'userEdit',
        params: { id: $route.params.id },
        query: { locale: 'en', q: 100 },
      }"
```

In UserEdit.vue,

`$route.query.`

## 13.10 Named router views

You can name your router views.

Let's say you want the header to be at the bottom in User page.

In App.vue,

Replace `<app-header>` with `<router-view name="header-top"></router-view>`.

```
    components: {
      default: Home,
      "header-top": Header,
    },
```

This can be useful when you want to switch the layout depending on the route you're at.

## 13.11 Redirecting

```
  {
    path: '/redirect-me', redirect: '/user'
  }
```

Catch all route:

```
  {
    path: "*",
    redirect: "/",
  },
```

## 13.12 Animating route transition

```
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
```

## 13.13 Hash fragment and scrolling

Adding `:to={ hash: "#data" }` doesn't scroll to ID, but going to the URL directly works.

To scroll, add `scrollBehavior(to, from, savedPosition)` in main.js.

`savedPosition` is for when user scrolls down bit and clicks back, Vue remembers the position if user returns to the page.

## 13.14 Route guard

1. beforeEnter: Check if user is allowed to edit user.

- 2 ways: in `routes.js` or in `UserDetail.vue` component

2. beforeLeave: Confirm with user if they want to leave.

- In `UserEdit.vue`

3. beforeEach: global checks in `main.js`

## 13.15 Lazy loading

In a bigger app, we don't want all the components to load at the start.. We only want to load it when we enter the route.

The documentation in vue-router page requires webpack ^2.4.

Hence I started a new `vue create` app for the latest example.
