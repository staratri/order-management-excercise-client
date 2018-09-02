<script>
    export default {
       props : ['order'],
       computed : {
           time(){
               let t = new Date(this.order.createdAt)
               return t.toDateString()
           }
       }
    }
</script>

<template>
<div>
    <div class="purchase shadow ">
        <div class="purchase_id">
            <span>
                 
            </span>
            <p>
                {{order._id}}
            </p>
        </div>
        <div class="purchase_image">
            <img src="../../public/img/item-1.png" alt="">
        </div>
        <div class="purchase_description">
            <span>
               Order Description  
            </span>
            <p>
                Total products : {{order.products.length}}
            </p>
            <!-- <small>Quantity : 2</small>
            <small>Size : S</small> -->
            
        </div>
        
        <div class="purchase_amount">
            <span>
               Amount 
            </span>
            <p>
               {{order.amount}}
            </p>
        </div>
        <div class="purchase_date">
            <span>
               Date 
            </span>
            <p>
                {{time}}
            </p>
        </div>
    </div>
</div>
</template>



<style lang="scss" scoped>
.purchase{
    background: #f5f5f5;
    min-height: 100px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 15px;
    &_id, &_description, &_image, &_date, &_amount{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        span{
            align-self: center;
            padding: 5px;
            background: blanchedalmond;
        }
        p{
            align-self: center;
            margin: 0;
        }
        small{
            align-self: center;
        }
        
    }

    @media (max-width: 800px) {
        &_id, &_description, &_image, &_date, &_amount{
            flex-basis: 200px;
        }
    }
   
}

.purchase  h2{
    flex-grow: 11;
    padding: 10px;
    align-self: center;
}

</style>