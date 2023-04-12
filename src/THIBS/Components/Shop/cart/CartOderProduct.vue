<script setup lang="ts">
import type { ProductCartInterface } from '@/THIBS/interfaces';


defineProps<{
    product: ProductCartInterface;
    nbrProductInCart: number
}>()


</script>

<template>

    <div class="list-product d-flex space-between align-items-center">
        <div class="content-list d-flex space-between ">
            <div class="left-side ">
                <div class="content-left-side ">
                    <div class="product d-flex space-between">
                        <div class="image-product">
                            <div class="image-product" :style="{ backgroundImage: `url(${product.image.desktop})` }"></div>
                        </div>
                        <div class="content-product   d-flex flex-column justify-content-center align-items-flex-start">
                            <h6 class="text-base">{{product.name}}</h6>
                            <h6 class="text-base">$ {{ product.price }}</h6>
                        </div>
                        <div class="quantite-product d-flex align-items-center">
                            <h6 class="text-base">x{{ product.quantity }}</h6>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    </div>

</template>

<style lang="scss" scoped>

.list-product {
    border-radius: 8px;
    background-color: var(--gray-1);
    height: 40%;
    margin-right: 10px;

    .content-list {
        width: 100%;
    }
    .left-side {
    width: 100%;

    .content-left-side {
    width: 90%;
    margin: auto;
   
    img {
        width: 80px;
        height: 80px;
        border-radius: 8px;
    }
    .content-product {
        width: 70%;
    }
   
    .ligne {
        height: 1px;
        background-color: var(--gray-3);
    }
    .another-items {
        text-align: center;
    }

    .image-product {
    height: 50px;
    width: 50px;
    background-size: cover;
    background-position: right;
    }
}}}





</style>
