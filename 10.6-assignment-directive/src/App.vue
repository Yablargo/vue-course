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
      bind(el, b)
      {
        let currencyVal = el.innerText;
        if(b.value.round){
            currencyVal = Math.round(currencyVal);
        }
        
        
        el.innerText = `${b.value.prefix} ${currencyVal}`;


        console.log(b);
        
        
      }
    }

  }
  // create a custom directive for v-currency
};
</script>

<style></style>
