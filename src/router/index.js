import Vue from 'vue';
import VueRouter from 'vue-router';
import Certificates from '@/components/Certificates'
import HelloWorld from '@/components/HelloWorld'


Vue.use(VueRouter);

const routes =[
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },

    {
        path: '/certificates',
        name: 'Certificates',
        component: Certificates
    },

    {
        path: '*',
        name: 'HelloWorld',
        component: HelloWorld
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


export default router;