<script setup lang="ts">
import Boutique from './THIBS/Components/Boutique/Boutique.vue';
import Earphones from './THIBS/Components/Boutique/CategorieProduct/Earphones.vue';
import Headphones from './THIBS/Components/Boutique/CategorieProduct/Headphones.vue';
import Speakers from './THIBS/Components/Boutique/CategorieProduct/Speakers.vue';
import ProductYX1 from './THIBS/Components/Boutique/Product/ProductYX1.vue';
import ProductXX59 from './THIBS/Components/Boutique/Product/ProductXX59.vue';
import ProductXX99Mark1 from './THIBS/Components/Boutique/Product/ProductXX99Mark1.vue';
import ProductXX99Mark2 from './THIBS/Components/Boutique/Product/ProductXX99Mark2.vue';
import ProductZX7 from './THIBS/Components/Boutique/Product/Product.ZX7.vue';
import ProductZX9 from './THIBS/Components/Boutique/Product/ProductZX9.vue';
import TheFooter from './THIBS/features/Footer.vue'
import { computed, reactive, type Component as C } from 'vue';
import TheHeader from './THIBS/features/Header.vue'
import BigShop from './THIBS/Components/Shop/BigShop/BigShop.vue'
import type { Page, ProductInterface, ProductCartInterface, FiltersInterface, FilterUpdate  } from './THIBS/interfaces';
import data from '@/THIBS/starter-code/data/product';
import CartPage from './THIBS/Components/Shop/cart/CartPage.vue';
import { DEFAULT_FILTERS } from './THIBS/starter-code/data/filters';





const state = reactive<{
    page: Page,
    products: ProductInterface[],
    cart: ProductCartInterface[],
    filters: FiltersInterface
}>({
    page: 'Boutique',
    products: data,
    cart: [],
    filters: {... DEFAULT_FILTERS }
})

const pages: { [s:string]: C } = {
  Boutique, 
  Earphones,
  Speakers,
  Headphones,
  ProductYX1,
  ProductXX59,
  ProductXX99Mark1,
  ProductXX99Mark2,
  ProductZX7,
  ProductZX9,
  BigShop,
  CartPage,  
}

function navigate (page: Page) : void {
    state.page = page;
    
    window.scrollTo({
      top: 0,
      left: 0
    })
}

function addProductToCart (productId: number) : void {
const product = state.products.find (product => product.id === productId)
if(product) {
  const productInCart = state.cart.find(product => product.id === productId)
  if(productInCart) {
    productInCart.quantity++
  } else {
    state.cart.push ({ ...product, quantity: 1})
  }
}
}

function removeProductFromCart(productId: number) :void{
const productFromCart = state.cart.find (product => product.id === productId)
if(productFromCart) {
  if(productFromCart.quantity === 1) {
    state.cart = state.cart.filter (product => product.id !== productId)
  } else {
    productFromCart.quantity--
  }}
  }

 

  function updateFilter(filterUpdate: FilterUpdate) {
  if (filterUpdate.search !== undefined) {
    state.filters.search = filterUpdate.search;
  } else if (filterUpdate.priceRange) {
    state.filters.priceRange = filterUpdate.priceRange;
  } else if (filterUpdate.category) {
    state.filters.category = filterUpdate.category;
  } else {
    state.filters = { ...DEFAULT_FILTERS };
  }
}


const filteredProducts = computed(() => {
  return state.products.filter((product) => {
    if (
      product.name
        .toLocaleLowerCase()
        .startsWith(state.filters.search.toLocaleLowerCase()) &&
        product.price >= state.filters.priceRange[0] &&
      product.price <= state.filters.priceRange[1] &&
      (product.category === state.filters.category ||
        state.filters.category === 'All')
    ) {
      return true;
    } else {
      return false;
    }
  });
});

</script> 

<template>
 <TheHeader @navigate="navigate" 
 :page="state.page"

 @add-product-to-cart="addProductToCart"
 :products="filteredProducts"
 
 :cart="state.cart"
 @remove-product-from-cart="removeProductFromCart"

/>

  <Component :is="pages[state.page]"
  @navigate="navigate" 
  :page="state.page"

  :products="filteredProducts"
  @add-product-to-cart="addProductToCart"
  @update-filter="updateFilter"
  :filters="state.filters"

  :cart="state.cart"
  @remove-product-from-cart="removeProductFromCart"/>

  <TheFooter @navigate="navigate" :page="state.page"/>
</template>

<style lang="scss" scoped>


</style>
