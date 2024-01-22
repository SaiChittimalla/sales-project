import { createRouter, createWebHistory } from "vue-router";
import LoginPage from './components/LoginPage.vue';
import HomePage from './components/HomePage.vue';
import QuotationsList from './components/Pages/pipeline/Quotations/QuotationsList.vue';
import NewQuate from './components/Pages/pipeline/Quotations/NewQuate.vue';
import AddItems from './components/Pages/pipeline/Quotations/AddItems.vue';
import FinalItems from './components/Pages/pipeline/Quotations/FinalItems.vue';

const routes = [
    {
        path: '/',
        component: LoginPage
    },
    {
        path: '/HomePage',
        component: HomePage
    },
    {
        path: '/QuotationsList',
        component: QuotationsList
    },
    {
        path: '/NewQuate',
        component: NewQuate
    },
    {
        path: '/AddItems',
        component: AddItems
    },
    {
        path: '/FinalItems',
        component: FinalItems
    },

]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;