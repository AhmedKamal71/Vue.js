import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { createRouter, createWebHistory } from 'vue-router'
import ProductsPage from './Component/Pages/ProductsPage.vue'
import ProductDetails from './Component/Pages/ProductDetails.vue'
import AddProduct from './Component/Pages/AddProduct.vue'
import HomePage from './Component/HomePage.vue'
import ErrorPage from './Component/Pages/ErrorPage.vue'
import UpdateProduct from './Component/Pages/UpdateProduct.vue'

const routes = [
    { path: '/home', component: HomePage },
    { path: '/products', component: ProductsPage },
    { path: '/product/:id', component: ProductDetails },
    { path: '/add', component: AddProduct },
    { path: '/', redirect: '/home' },
    {path: '/edit/:id', component: UpdateProduct},
    {
        path: '/:NotFound(.*)*', component: ErrorPage,
        meta: {
            hideNavbar: true
        }
     }


]

const router = createRouter({
    history: createWebHistory(),
    routes
}) 


createApp(App).use(router).mount('#app')
