<script setup lang="ts">
import type { ProductCartInterface } from '@/THIBS/interfaces';


defineProps<{
    product: ProductCartInterface;
}>()

const emit = defineEmits<{
    (e: 'removeProductFromCart', productId: number) : void
}>()


</script>

<template>
 
            <div class="product-presentation d-flex space-between align-items-center mb-30">
                <div class="image-product" :style="{ backgroundImage: `url(${product.image.desktop})` }">
                </div>
                <div class="description-product">
                        <p class="text-lg">{{ product.name }}</p>
                        <p class="text-lg">${{product.price}}</p>
                </div>
                <div class="quantite-product d-flex align-items-flex-end">
                    <p class="text-lg">x{{ product.quantity }}</p>
                </div>
                <div class="supp-summary p-5">
                <button @click="emit('removeProductFromCart', product.id)" >                    
                    <img src="../../../starter-code/assets/shared/desktop/delete.png" alt="delete-button">
                </button>
            </div>
            </div>

</template>

<style lang="scss" scoped>
.product-presentation {
    border: 1px solid var(--black-1);
    border-radius: 8px;

    .image-product {
    height: 64px;
    width: 64px;
    background-size: cover;
    background-position: right;
    }

    .description-product{
    width: 70%;
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
}
}
}





</style>
