<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <div v-currency="{ prefix: '$', round: true }">99.90</div>
        <div v-currency="{ prefix: 'GBP', round: false }">99.90</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    currency: {
      bind(el, binding) {
        let val = el.innerText;
        if (binding.value.round) {
          val = Math.round(val);
        }
        el.innerText = binding.value.prefix + " " + val;
      },
    },
  },
};
</script>

<style></style>
