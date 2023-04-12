<script setup lang="ts">
import type { Page, ProductCartInterface } from '@/THIBS/interfaces';
import { computed, reactive } from 'vue';
import CartProduct from './CartProduct.vue';
import CartOrderList from './CartOrderList.vue'


const props = defineProps<{
    cart: ProductCartInterface[],
    page: Page
}>()



const emit = defineEmits<{
    (e: 'removeProductFromCart', productId: number) : void;
    (e: 'navigate', page: Page) : void;

}>()

const totalPrice = computed (() => props.cart.reduce((acc, product) => {
    return acc + product.price * product.quantity
}, 0))

const vatInclude = computed(() =>  Math.round(totalPrice.value / 100 * 20))

const bigTotal = computed(() => totalPrice.value + vatInclude.value + 50)

const nbrProductInCart = computed(() => props.cart.reduce((acc, product) => {
    return acc + product.quantity
}, 0))

const order = reactive<{
    open: boolean
}>({
    open: false
})

</script>

<template>

    <div class="summary mt-20 max-md:mb-20 max-md:mt-0">
        <section class="summary-content">
            <div class="title-summary mt-10 mb-5">
                <h5 class="text-2xl">SUMMARY</h5>
            </div>
          
            <CartProduct v-for="product of cart"
             :product="product"
             @remove-product-from-cart="emit('removeProductFromCart', $event)"/>

            <div class="recap-shop">
                <div class="total d-flex space-between  mb-5">
                    <h6 class="text-lg">TOTAL</h6>
                    <h6 class="text-lg">$ {{ totalPrice }}</h6>
                </div>
                <div class="shipping d-flex space-between mb-5">
                    <h6 class="text-lg">SHIPPING</h6>
                    <h6 class="text-lg">$ 50</h6>
                </div>
                <div class="vat d-flex space-between mb-5">
                    <h6 class="text-lg">VAT (INCLUDED)</h6>
                    <h6 class="text-lg">$ {{vatInclude}}</h6>
                </div>
                <div class="big-total d-flex space-between mb-5">
                    <h6 class="text-lg">GRAND TOTAL</h6>
                    <h6 class="text-lg">$ {{bigTotal}}</h6>
                </div>

            </div>
            <div class="btn-pay d-flex justify-content-center pb-10">
                <button @click="order.open = true" class="btn-1">CONTINUE & PAY</button>
            </div>

            <div v-if="order.open">
                <Teleport to="body">
                    <div @click="order.open = false" class="calc"></div>
                </Teleport>
                <div class="big-order">
                    <div class="content-order">
                        <div class="logo-check pt-5">
                        <img src="../../../starter-code/assets/checkout/icon-order-confirmation.svg" alt="">
                        </div>
                        <div class="title-order pt-5">
                            <h3 class="text-2xl">THANK YOU <br> FOR YOUR ORDER</h3>
                            <p class="text-base">You will receive an email confirmation shortly.</p>
                        </div>
                        <div class="product-list">
                            <CartOrderList 
                            :cart="props.cart"
                            :nbrProductInCart="nbrProductInCart"
                            class="scrollable"/>
                        </div>
                        <div class="total d-flex justify-content-center mt-2.5">
                            <div class="right-side d-flex justify-content-center align-items-center">
                                <div class="right-content p-5">
                                    <div class="d-flex space-between">
                                        <div>
                                            <h8 class="text-base">TOTAL  : </h8>
                                        </div>
                                        <div>
                                            <h8 class="text-base">$ {{ bigTotal }}</h8>
                                        </div>
                                    </div>
                                    <div class="ligne  mt-2.5 mb-2.5"></div>
                                    <div class="nbr-product">
                                        <h8> Numbers products: {{ nbrProductInCart }}</h8>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="button-back-home">
                            <button @click="emit('navigate', 'Boutique')" class="btn-10 mt-5">BACK TO HOME</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>


</template>

<style lang="scss" scoped>
@media screen and (max-width: 376px) {
    html body .big-order {
        width: 90%;
        left: 5%;
    }
    body .right-side {
        width: 80%;
        height: 90px;
    }
    body .summary-content {
        width: 90%;
    }
}
@media screen and (max-width: 769px) {
    body .summary {
        width: 100%;
    }
    body .big-order {
        width: 70%;
        top: 15%;
        left: 15%;
    }

   
}

/**summary */
.summary {
    width: 35%;
    background-color: var(--gray-1) ;
    border-radius: 8px;
    height: 20%;
}
.summary-content {
    width: 75%;
    margin: auto;
}

.big-order {
    width: 32%;
    height: 75%;
    position: fixed;
    top: 15%;
    left: 35%;
    border-radius: 8px;
    background-color: var(--white-1);
    z-index: 1;

    .content-order {
        width: 90%;
        margin: auto;
    }
    
}
.logo-check img {
    width: 40px;
}
.scrollable {
  overflow-y: auto;
  height: calc(30vh - 5vh);
  /* width */
&::-webkit-scrollbar {
  width: 20px;
}

/* Track */
&::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
&::-webkit-scrollbar-thumb {
  background: var(--orange-1);
  border-radius: 10px;
}
 
} 
.right-side {
    width: 55%;
    background-color: var(--black-1);
    color: var(--white-1);
    border-radius: 8px;
    h8 {
        font-size: 15px;
        color: var(--white-1);
        margin: 0;
    }
    
    .ligne {
        height: 1px;
        background-color: var(--gray-3);
    }
}
</style>
