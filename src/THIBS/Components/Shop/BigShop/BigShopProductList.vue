<script setup lang="ts">

import type { ProductInterface } from '@/THIBS/interfaces';
import BigShopProduct from './BigShopProduct.vue';


defineProps<{
    products: ProductInterface[],
}>()

const emit = defineEmits<{
    (e: 'addProductToCart', productId: number) : void
}>()

</script> 

<template>
    <div class="d-felx flex-column p-10" >
        <div class="grid">
            <BigShopProduct 
            @add-product-to-cart="emit('addProductToCart', $event)"
            v-for="product of products"
            :product="product"
            :key="product.id"/>
        </div>

    </div>


</template>

<style lang="scss" scoped>

.grid {
    display: grid;
    grid-template-columns:  1fr 1fr 1fr;
    grid-auto-rows: 760px;
    gap: 30px;    
}

</style>
