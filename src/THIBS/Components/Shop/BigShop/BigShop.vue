<script setup lang="ts">

import BigShopProductList from './BigShopProductList.vue';
import BigShopFilter from './BigShopFilter.vue';
import type { FiltersInterface, FilterUpdate, ProductInterface } from '@/THIBS/interfaces';


defineProps<{
  products: ProductInterface[];
  filters: FiltersInterface;
}>();

const emit = defineEmits<{
  (e: 'addProductToCart', productId: number): void;
  (e: 'updateFilter', updateFilter: FilterUpdate) : void
}>();

</script> 

<template>
    <div class="d-flex">
        <BigShopFilter 
        :filters="filters"
        @update-filter="emit('updateFilter', $event)"
        class="big-shop-filter"
        :nbr-of-product="products.length"/>
    
        <BigShopProductList 
        class="scrollable"
        @add-product-to-cart="emit('addProductToCart', $event)"
        :products="products"/>
    </div>
</template>

<style lang="scss" scoped>

.big-shop-filter {
    flex: 0 0 300px;
}

.scrollable {
  overflow-y: auto;
  height: calc(100vh - 20vh);
  
  &::-webkit-scrollbar {
    display: none;
  }
}

</style>
