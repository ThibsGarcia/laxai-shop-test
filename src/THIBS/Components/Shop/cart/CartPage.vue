<script setup lang="ts">
import type { Page, ProductCartInterface } from '@/THIBS/interfaces';
import CartCheckout from './CartCheckout.vue';
import CartSummary from './CartSummary.vue';

defineProps<{
    cart: ProductCartInterface[],
    page: Page
}>()

const emit = defineEmits<{
    (e: 'removeProductFromCart', productId: number) : void;
    (e: 'navigate', page: Page) : void
}>()


</script>

<template>
 
    <div>
        <div class="global-content d-flex space-between max-md:flex-col ">
        <CartCheckout
        @navigate="emit('navigate', $event)"
        :page="page" 
        :nbr-cart-in-product=" cart.length"/>
        
        <CartSummary :cart="cart" :page="page"
        @remove-product-from-cart="emit('removeProductFromCart', $event)"
        @navigate="emit('navigate', $event)"
       />
        </div>
       
    </div>

</template>

<style lang="scss" scoped>
@media screen and (max-width: 769px) {
    body .global-content {
    width: 90%;
    margin: auto;
    }
}
.global-content {
    width: 69%;
    margin: auto;
}
</style>
