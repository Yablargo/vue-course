<template>
  <div class="container">
    <!-- 1. Show the form if not submitted. If submitted, show 'Your Data' -->
    <form>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <!-- 2. Make this form work. Use v-model -->

          <!-- 3. AppFullName is a custom input for you to complete. It takes in a fullName data but you can edit it as first & last name. -->
          <app-full-name v-model="fullName"></app-full-name>

          <div class="form-group">
            <label>Mail</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" />
          </div>
          <div class="form-group">
            <label> <input type="radio" value="Yes" /> Yes </label>
            <label> <input type="radio" value="No" /> No </label>
          </div>

          <!-- 3. Submit the form to change the 'submitted' data -->
          <button type="submit" class="btn btn-primary">
            Submit the Form
          </button>
        </div>
      </div>
    </form>

    <hr />

    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name:</p>
            <p>Mail:</p>
            <p>Password:</p>
            <p>Store in Database?:</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullName from "./FullName.vue";

export default {
  data() {
    return {
      fullName: "",
      email: "",
      password: "",
      storeData: "Yes",
      submitted: false,
    };
  },
  components: {
    appFullName: FullName,
  },
};
</script>

<style></style>
