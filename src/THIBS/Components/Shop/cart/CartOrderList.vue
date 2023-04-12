<script setup lang="ts">
import type { ProductCartInterface } from '@/THIBS/interfaces';
import CartOderProduct from './CartOderProduct.vue';

defineProps<{
    cart:ProductCartInterface[],
    nbrProductInCart: number
}>()


</script>

<template>
    <div>

        <CartOderProduct  
        v-for="product of cart"
        :product="product"
        :nbrProductInCart="nbrProductInCart"
        class="mt-5 mb-5"
        />
    </div>


</template>

<style lang="scss" scoped>

.right-side {
    width: 198px;
    background-color: var(--black-1);
    color: var(--white-1);
    border-radius: 8px;
    
}


</style>
