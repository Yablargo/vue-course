<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <p>{{ firstText  | reverse }}</p>

        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <p>{{ secondText | wordcount }}</p>

        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 with Computed Property -->
      <p>{{reversed}}</p>
        <!-- Exercise 4 -->
        <!-- Do the same as in Exercises 2 with computed property stored in Mixin -->
        <p>{{counted}}</p>
      </div>
    </div>
  </div>
</template>

<script>
var myMixin = {
  computed: {
   counted: function()
    {
      return `${this.secondText} (${this.secondText.length})`;
    }
  }
}
export default {
  mixins: [myMixin],
  computed:
  {
    reversed: function(){
      return this.firstText.split("").reverse().join("");
    },   
  },

  filters: 
  {
    reverse: function(value)
    {
      return value.split("").reverse().join("");
    },
    wordcount: function(value)
    {
      return `${value} (${value.length})`;
    }    
  },
  data() {
    return {
      firstText: "Some Text",
      secondText: "Vue",
    };
  },
};
</script>

<style></style>
