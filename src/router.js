import { createRouter, createWebHistory } from "vue-router";
import LoginPage from './components/LoginPage.vue';
import HomePage from './components/HomePage.vue';
import QuotationsList from './components/Pages/pipeline/Quotations/QuotationsList.vue';
import NewQuate from './components/Pages/pipeline/Quotations/NewQuate.vue';
import AddItems from './components/Pages/pipeline/Quotations/AddItems.vue';
import ItemEdit from './components/Pages/pipeline/Quotations/ItemEdit.vue';
import FinalItems from './components/Pages/pipeline/Quotations/FinalItems.vue';
import LeadNewQuate from './components/Pages/pipeline/Quotations/LeadNewQuate.vue';
import SalesOrder from './components/Pages/pipeline/SalesOrder/SalesOrder.vue';
import NewSales from './components/Pages/pipeline/SalesOrder/NewSales.vue';
import AddLeads from './components/Pages/clientsBuyers/Leads/AddLeads.vue';
import LeadForm from './components/Pages/clientsBuyers/Leads/LeadForm.vue';

const routes = [
    {
        path: '/',
        component: LoginPage
    },
    {
        name: 'HomePage',
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
        path: '/ItemEdit',
        component: ItemEdit
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
        path: '/SalesOrders',
        component: SalesOrder
    },
    {
        path: '/NewSales',
        component: NewSales
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