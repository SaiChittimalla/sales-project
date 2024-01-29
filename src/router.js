import { createRouter, createWebHistory } from "vue-router";
import LoginPage from './components/LoginPage.vue';
import HomePage from './components/HomePage.vue';
import QuotationsList from './components/Pages/pipeline/Quotations/QuotationsList.vue';
import NewQuate from './components/Pages/pipeline/Quotations/NewQuate.vue';
import AddItems from './components/Pages/pipeline/Quotations/AddItems.vue';
import FinalItems from './components/Pages/pipeline/Quotations/FinalItems.vue';
import LeadNewQuate from './components/Pages/pipeline/Quotations/LeadNewQuate.vue';
import SalesOder from './components/Pages/SalesOder/SalesOder.vue';
import NewSales from './components/Pages/SalesOder/NewSales.vue';
import AddLeads from './components/Pages/clientsBuyers/Leads/AddLeads.vue';
import LeadForm from './components/Pages/clientsBuyers/Leads/LeadForm.vue';

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
        name: "AddItems",
        path: '/AddItems',
        component: AddItems
    },
    {
        path: '/FinalItems',
        component: FinalItems
    },
    {
        path: '/LeadNewQuate',
        component: LeadNewQuate
    },
    {
        path:'/SalesOders',
        component:SalesOder
    },
    {
        path:'/NewSales',
        component:NewSales
    },
    {
        path: '/addleads',
        component: AddLeads,

    },
    {
        path: '/leadform',
        component: LeadForm
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;