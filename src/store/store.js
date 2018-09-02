import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state : {
        products : {},
        cart : [],
        interest : 7.8,
        orderAmount : 0,
        user : {},
        orders : []
    },
    getters : {

    },
    mutations : {
        updateProducts(state, payload){
            state.products = payload
        },
        updateCart(state, payload){
            state.cart.push( state.products[state.products.map(function (item) { return item._id; }).indexOf(payload)])
        },
        updateOrderAmount(state, payload){
            state.orderAmount += payload
        },
        updateUser(state, payload){
            state.user = payload
        },
        emptyCart(state){
            state.cart = []
            state.orderAmount = 0
        },
        updateOrders(state, payload){
            state.orders = payload
        }
    },
    actions :{
        getAvailableProducts({commit}){
            Vue.http.get('http://18.217.149.238:3000/products').then(response=>{
                commit('updateProducts', response.body.response)
            }).catch(err=>{
                console.log(err)
            })
        },
        pushProductToCart({commit}, payload){
            commit('updateCart',payload)
        },
        addPriceToOrder({commit}, payload){
            commit('updateOrderAmount',payload)
        },
        mutateUser({commit}, payload){
            commit('updateUser',payload)
        },
        createNewOrder({commit}){
            if(this.state.orderAmount === 0){
                return
            }
            let order = {
                user_id : this.state.user._id,
                amount : this.state.orderAmount,
                products : this.state.cart
            }
            Vue.http.post('http://18.217.149.238:3000/orders/create', order).then((response=>{
                commit('emptyCart')
            })).catch(err=>{
                console.log(err)
            })
        },
        mutateOrders({commit}, payload){
            commit('updateOrders', payload)
        }
    }
    
})