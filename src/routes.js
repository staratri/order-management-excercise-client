import productsContainer from "./components/ProductsContainer.vue"
import CartContainer from "./components/CartContainer.vue"
import OrdersContainer from './components/OrdersContainer.vue'
import LoginPage from './components/LoginPage.vue'

export default [
    {
        path: '/',
        redirect: localStorage._token ? '/products' : 'login'
    },
    {
        path : '/products',
        component : productsContainer
    },
    {
        path : '/cart',
        component : CartContainer
    },
    {
        path : '/orders',
        component : OrdersContainer
    },
    {
        path : '/login',
        component : LoginPage
    }
]