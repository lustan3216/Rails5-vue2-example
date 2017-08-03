<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>
      
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <router-link to="/portfolios" activeClass="active" tag="li"><a>Profolio</a></router-link>
          <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
        </ul>
        <strong class="navbar-text navbar-right">Funds: {{funds | currency }}</strong>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" @click="endDay">End Day</a></li>
          <li class="dropdown" :class="{open: isDropDownOpen}">
            <a href="#"
               class="dropdown-toggle"
               data-toggle="dropdown"
               role="button"
               @click="isDropDownOpen = !isDropDownOpen"
               aria-haspopup="true"
               aria-expanded="false">Save & Load<span class="caret"></span></a>
            
            <ul class="dropdown-menu">
              <li><a href="#" @click="saveData">Save Data</a></li>
              <li><a href="#" @click="loadData">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import {mapActions} from 'vuex';
  import {loadData} from '../store/actions';

  export default{
    data(){
      return {
        isDropDownOpen: false
      }
    },
    computed: {
      funds(){
        return this.$store.getters.funds
      }
    },
    methods: {
      ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData: 'loadData'
      }),
      endDay(){
        this.randomizeStocks()
      },
      saveData(){
        const data = {
          funds: this.$store.getters.funds,
          stockPortfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks
        };
        this.$http.put('data.json',data)
      },
      loadData(){
        this.fetchData()
      }
    }
  }
</script>

<style scoped>
</style>