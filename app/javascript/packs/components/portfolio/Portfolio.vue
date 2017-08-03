<template>
    <div>
        <app-stock v-for="stock in stocks" :stock="stock" :key="stock.id"></app-stock>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import Stock from './Stock.vue';

  export default{
    components:{
      appStock: Stock
    },
    computed:{
      ...mapGetters({
        stocks: 'stockPortfolio'
      })
    }
  }
</script>

<style scoped>
</style>