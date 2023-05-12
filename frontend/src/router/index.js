import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import QuoteDetails from '../views/QuoteDetails.vue';
import EditQuote from '../views/EditQuote.vue';
import NewQuote from '../views/NewQuote.vue';



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/quote/:id',
    name: 'QuoteDetails',
    component: QuoteDetails,
    props: true,
  },
  {
    path: '/edit/:id',
    name: 'EditQuote',
    component: EditQuote,
    props: true,
  },

  {
    path: '/add',
    name: 'NewQuote',
    component: NewQuote,
    props: true,
  },

  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
