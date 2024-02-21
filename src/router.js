import { createRouter, createWebHistory } from "vue-router";
import LoginPage from './components/LoginPage.vue';
import HomePage from './components/HomePage.vue';
import QuotationsList from './components/Pages/pipeline/Quotations/QuotationsList.vue';


import ItemEdit from './components/Pages/pipeline/Quotations/ItemEdit.vue';

import LeadNewQuate from './components/Pages/pipeline/Quotations/LeadNewQuate.vue';
import SalesOrder from './components/Pages/pipeline/SalesOrder/SalesOrder.vue';
// import NewSales from './components/Pages/pipeline/SalesOrder/NewSales.vue';
import AddLeads from './components/Pages/clientsBuyers/Leads/AddLeads.vue';
import LeadForm from './components/Pages/clientsBuyers/Leads/LeadForm.vue';
import CompleteData from "./components/Pages/pipeline/Quotations/CompleteData.vue";
import AddCustomers from './components/Pages/clientsBuyers/Customer/AddCustomers.vue'
import CustomerForm from './components/Pages/clientsBuyers/Customer/CustomerForm.vue'
import NewSalesOrder from './components/Pages/pipeline/SalesOrder/NewSalesOrder.vue';
import PracticePage from "./components/PracticePage.vue";
import DeliveryNotes from "./components/Pages/pipeline/SalesOrder/DeliveryNotes.vue";

const routes = [
    {
        name: 'LoginPage',
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
        path: '/ItemEdit',
        component: ItemEdit
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
        path: '/p',
        component: PracticePage
    },
    // {
    //     path: '/NewSales',
    //     component: NewSales
    // },
    {
        name: 'AddLeads',
        path: '/addleads',
        component: AddLeads,

    },
    {
        path: '/leadform',
        component: LeadForm
    },
    {
        name: 'completedata',
        path: '/completedata',
        component: CompleteData,
        props: true

    }, {
        name: 'LeadForm',
        path: '/leadform/:id',
        component: LeadForm,
        props: true
    },
    {
        name: 'AddCustomers',
        path: '/AddCustomers',
        component: AddCustomers
    },
    {
        name: 'CustomerForm',
        path: '/CustomerForm/:id',
        component: CustomerForm,
        props: true
    },
    {
        name: 'NewSalesOrder',
        path: '/NewSalesOrder',
        component: NewSalesOrder
    },
    {
        name: 'DeliveryNotes',
        path: '/DeliveryNotes',
        component: DeliveryNotes
    },



]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;