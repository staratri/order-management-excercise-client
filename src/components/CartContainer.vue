<script>
import CartItems from "./CartItem.vue"
    export default {
        components : {
            'cart-item' : CartItems
        },
        computed:{
            getCartProducts(){
                return this.$store.state.cart
            },
            getOrderAmount(){
                return this.$store.state.orderAmount
            }
        },
        methods:{
            createOrder(){
                this.$store.dispatch('createNewOrder')
                this.$router.push('/orders')
            }
        },
        beforeMount() {
            if(localStorage._token === ""){
            this.$router.push('/login')
        }
  }
    }
</script>

<template>
    <div class="shopping-cart">
        <!-- Title -->
        <div class="title">
        Shopping Bag
        </div>
        <!-- Products -->
        <cart-item v-for="item in getCartProducts" v-bind:key="item._id" :item="item"/>
        <div class="charge_button" @click="createOrder()">
            Charge = $ {{ getOrderAmount }}
        </div>
    </div>
</template>

<style lang = "scss" scoped>
.shopping-cart {
    width: 750px;
    
    margin: 25px auto;
    background: #FFFFFF;
    box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.10);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    .title {
        height: 60px;
        border-bottom: 1px solid #E1E8EE;
        padding: 20px 30px;
        color: #5E6977;
        font-size: 18px;
        font-weight: 400;
    }
}
@media (max-width: 800px) {
  .shopping-cart {
    width: 80%;
    height: auto;
    overflow: hidden;
  }
}

.charge_button {
    font-weight: 600;
    text-align: center;
    font-size: 19px;
    color: #FFF;
    background-color: #4bc970;
    width: 100%;
    border: none;
    border-radius: 4px;
    padding: 0.8em;
    margin-top: 1em;
    margin-bottom: 1em;
    cursor: pointer;
    overflow: hidden;
    transition: all 200ms ease-in-out;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
}

</style>