<script>
import ProductCard from "./ProductCard.vue";
export default {
  components : {
    'product-card' : ProductCard
  },
  props: {
    msg: String
  },
  data(){
    return {
      
    }
  },
  computed:{
    availableProducts(){
      return this.$store.state.products
    }
  },
  mounted(){
    this.$store.dispatch('getAvailableProducts')
  },
  beforeMount() {
    if(localStorage._token === ""){
      this.$router.push('/login')
    }
  }
}
</script>
<template>
  <v-container fluid>
    <v-layout row wrap>
      <product-card v-for="product in availableProducts" v-bind:key="product.id" :product = "product"/>
    </v-layout>
  </v-container>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  
</style>
