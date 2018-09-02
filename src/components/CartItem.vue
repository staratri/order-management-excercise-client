<script>
    export default {
      props: ['item'],
      data(){
        return{
          itemQuantity : 1
        }
      },
      computed:{
        rateOfInterest(){
          return this.$store.state.interest / 100 * this.item.price * this.itemQuantity
        },
        totalAmountOfItem(){
          return this.rateOfInterest + this.item.price * this.itemQuantity
        }
      },
      mounted(){
          this.$store.dispatch('addPriceToOrder', this.totalAmountOfItem)        
      },
      updated(){
          this.$store.dispatch('addPriceToOrder', this.totalAmountOfItem)        
      }
    }
</script>


<template>
<div class="item">
    <div class="buttons">
        <span class="delete-btn"></span>
        <span class="like-btn"></span>
    </div>

    <div class="image">
        <img src="item-1.png" alt="" />
    </div>
    <div class="description">
        <span>Name</span>
        <span>{{item.name}}</span>
        <span></span>
    </div>

    <div class="quantity">
        <button class="plus-btn" type="button" name="button" @click="itemQuantity +=1">
            <img src="../../public/icons/plus.svg" alt="" />
        </button>
        <input type="text" name="name" v-model="itemQuantity">
        <button class="minus-btn" type="button" name="button" @click="itemQuantity === 1 ? itemQuantity = 1 : itemQuantity -= 1">
            <img src="../../public/icons/minus.svg" alt="" />
        </button>
    </div>
    <div class="interest">
        
    </div>
    <div class="total-price"><span>Interest</span>${{ rateOfInterest}}</div>
    
    <div class="total-price"><span>Amount</span>${{totalAmountOfItem}}</div>
    
</div>
</template>

<style scoped>
.item {
  padding: 20px 30px;
  height: 120px;
  display: flex;
}
 
.item{
  border-top:  1px solid #E1E8EE;
  border-bottom:  1px solid #E1E8EE;
}
.buttons {
  position: relative;
  padding-top: 30px;
  margin-right: 60px;
}
.delete-btn,
.like-btn {
  display: inline-block;
  Cursor: pointer;
}
.delete-btn {
  width: 18px;
  height: 17px;
  background: url(&quot;delete-icn.svg&quot;) no-repeat center;
}
 
.like-btn {
  position: absolute;
  top: 9px;
  left: 15px;
  background: url('../../public/icons/twitter-heart.png');
  width: 60px;
  height: 60px;
  background-size: 2900%;
  background-repeat: no-repeat;
}

.image {
  margin-right: 50px;
}
.description {
  padding-top: 10px;
  margin-right: 60px;
  width: 115px;
}
 
.description span {
  display: block;
  font-size: 14px;
  color: #43484D;
  font-weight: 400;
}
 
.description span:first-child {
  margin-bottom: 5px;
}
.description span:last-child {
  font-weight: 300;
  color: #86939E;
}
.quantity {
  padding-top: 20px;
  margin-right: 60px;
}
.quantity input {
  -webkit-appearance: none;
  border: none;
  text-align: center;
  width: 32px;
  font-size: 16px;
  color: #43484D;
  font-weight: 300;
}
 
button[class*=btn] {
  width: 30px;
  height: 30px;
  background-color: #E1E8EE;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}
.minus-btn img {
  margin-bottom: 3px;
}
.plus-btn img {
  margin-top: 2px;
}
 
button:focus,
input:focus {
  outline:0;
}
.total-price {
  display: flex;
  flex-direction: column;
  width: 83px;
  padding-top: 10px;
  text-align: center;
  font-size: 16px;
  color: #000000;
  font-weight: 300;
}
@media (max-width: 800px) {
  .item {
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
  }
  .image img {
    width: 50%;
  }
  .image,
  .quantity,
  .description {
    width: 100%;
    text-align: center;
    margin: 6px 0;
  }
  .buttons {
    margin-right: 20px;
  }
}

</style>