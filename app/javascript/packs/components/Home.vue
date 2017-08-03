<template>
  <div>
    <h1>Trade or View your Portfolio</h1>
    <h5>You may Save & Load your Data</h5>
    <h6>Click on 'End Day' to debgin a New Day!</h6>
    <hr>
    <p>Your Funds: {{funds | currency}}</p>
  </div>
</template>

<script>
  export default{
    computed: {
      funds() {
       return this.$store.getters.funds
      }
    }
  }
</script>

<style scoped>
</style>