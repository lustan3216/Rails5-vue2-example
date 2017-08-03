import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Stocks from './components/stocks/Stocks.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/portfolios', component: Portfolio },
    { path: '/stocks', component: Stocks }
];