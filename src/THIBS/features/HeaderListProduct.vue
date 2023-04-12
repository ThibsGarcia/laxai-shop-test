<script setup lang="ts">
import type { Page, ProductCartInterface } from '../interfaces';


defineProps<{
    product: ProductCartInterface;
}>()

const emit = defineEmits<{
    (e: 'removeProductFromCart', productId: number) : void,
}>()

</script>
<!--:style="{ backgroundImage: `url(${product.image.desktop})` }"-->
<template>
  <div class="product-presentation d-flex space-between align-items-center mb-10 mt-10">
                <div class="image-product" >
                    <img v-bind:src="product.image.desktop" alt="">
                </div>
                <div class="description-product">
                        <p class="text-base">{{ product.name }}</p>
                        <p class="text-base">${{product.price}}</p>
                </div>
                <div class="quantite-product d-flex align-items-flex-end">
                    <p class="text-base">x{{ product.quantity }}</p>
                </div>
                <div class="supp-summary p-5">
                <button @click="emit('removeProductFromCart', product.id)" >                    
                    <img src="../starter-code/assets/shared/desktop/delete.png" alt="delete-button">
                </button>
            </div>
            </div>
 
  
</template>

<style lang="scss" scoped>
@use '@/assets/base.scss';
@media screen and (max-width: 769px) {
    p{
        font-size: 1rem;
    }
}
@media screen and (max-width: 376px) {
    p {
        font-size: 1rem;
    }
}
.product-presentation {

    .image-product {
    height: 64px;
    width: 64px;
    background-size: cover;
    background-position: right;
    border-radius: 8px;
    }

    .description-product{
    width: 75%;
    padding-left: 5%;
    }
    .quantite-product{
        width: 20px;
        height: 48px;
    }
    p{
    margin: 0;
}
.supp-summary {
    display: flex;
    align-items: flex-start;
    height: 80px;

    img {
    width:20px;
    height: 20px;
    cursor: pointer;
}
button {
    border: none;
    background-color: transparent;
}
}
}


</style>
