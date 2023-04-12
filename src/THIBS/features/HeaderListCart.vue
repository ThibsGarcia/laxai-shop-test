<script setup lang="ts">
import { computed, reactive } from 'vue';
import CartCheckout from '../Components/Shop/cart/CartCheckout.vue';
import type { Page, ProductCartInterface, ProductInterface } from '../interfaces';
import HeaderListProduct from './HeaderListProduct.vue';

const props = defineProps<{
    cart: ProductCartInterface[],
    page: Page,
    product: ProductInterface[]
}>()

const totalPrice = computed (() => props.cart.reduce((acc, product) => {
    return acc + product.price * product.quantity
}, 0))

const emit = defineEmits<{
    (e: 'removeProductFromCart', productId: number) : void;
    (e: 'navigate', page: Page) : void;
}>()

const panier = reactive<{
    open: boolean
}>({
    open: false
})

const nbrProductInCart = computed(() => props.cart.reduce((acc, product) => {
    return acc + product.quantity
}, 0))


</script>

<template>
   
  <div class="list-cart">
    <div class="title d-flex space-between">
        <h6 class="text-lg">CART ({{ nbrProductInCart }})</h6>
        <button class="btn-9">Remove all</button>
    </div>
    <div  class="list-product">
        <HeaderListProduct 
        v-for="product of cart"
        :product="product"
        @remove-product-from-cart="emit('removeProductFromCart', $event)"
        :page="props.page"
        />
    </div>
    <div class="total d-flex space-between mb-20">
        <h6 class="text-lg">TOTAL</h6>
        <h6 class="text-lg">$ {{ totalPrice }}</h6>
    </div>
    <button  class="btn-10" @click="emit('navigate', 'CartPage')">CHECKOUT</button>
  </div>
  
</template>

<style lang="scss" scoped>
@use '@/assets/base.scss';
.list-cart {
    width: 85%;
    margin: auto;
    padding-top: 10%;
    padding-bottom: 10%;
}
h6 {
    font-size: 1.125rem;
}

</style>
