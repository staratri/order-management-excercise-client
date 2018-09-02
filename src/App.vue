<script>
import ProductsContainer from "./components/ProductsContainer.vue";
  export default {
    components : {
      'products-container' : ProductsContainer
    },
    data: () => ({
      drawer: null,
      isUser : false
    }),
    props: {
      source: String
    },
    methods : {
      pushToProductsPage(){
        this.$router.push('/products')
      },
      pushToOrdersPage(){
        this.$router.push('/orders')
      },
      pushToCartPage(){
        this.$router.push('/cart')
      },logOut(){
        localStorage._token = ""
        location.reload()
      }
    },
    computed : {
      cart_counter(){
        return this.$store.state.cart.length
      }
    },
    beforeMount() {
      if(localStorage._token){
        this.isUser = true
        this.$http.get('http://18.217.149.238:3000/user').then(response=>{
          this.$store.dispatch('mutateUser',response.body)
        })
      }else{
        this.$router.push('/login')
      }
    },
  }
</script>


<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="pushToProductsPage()">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Browse Products</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="pushToOrdersPage()">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>My Orders</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Dummy</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="pushToCartPage()">
         
            <span class="cart_counter">{{cart_counter}}</span>
            <v-icon
              large
              color="grey lighten-1"
            >
              shopping_cart
            </v-icon>
        </v-btn>
        
        <v-btn flat @click="logOut()" v-if="this.$store.state.user._id">Log Out</v-btn>
        <v-btn flat @click="logIn()" v-else>Log In</v-btn>
        
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<style lang="scss" scoped>

  .cart_counter{
    position: relative;
    bottom: 5px;
  }
</style>
