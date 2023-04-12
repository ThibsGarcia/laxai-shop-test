<script setup lang="ts">
import type { ProductInterface } from '../../../interfaces';


defineProps<{
    product: ProductInterface
}>()

const emit = defineEmits<{
    (e: 'addProductToCart', productId: number) : void
}>()

</script> 
<!--:style="{ backgroundImage: `url(${product.image.desktop})` }"-->
<template>

        <div class="product" d-flex flex-column space-between>
            <div
            class="product-image">
            <img v-bind:src="product.image.desktop" alt="">
</div>
                <div class="mt-5">
                    <h4 class="text-2xl pb-5">{{ product.name }}</h4>
                    <p class="text-base description pb-5">{{ product.description }}</p>
                    <div class="d-flex align-items-center space-between">
                        <h5 class="text-xl">Prix: ${{ product.price }}</h5>
                        <button class="btn-1" @click="emit('addProductToCart', product.id)">Ajout au panier</button>

                </div>
            </div>
        </div>

</template>

<style lang="scss" scoped>


.product {
    border: 1px solid var(--border);
    border-radius: var(--border-radius);


    &-image {
        border-top-left-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);
        background-size: cover;
        background-position: center;
        height: 400px;
    }
}


</style>
