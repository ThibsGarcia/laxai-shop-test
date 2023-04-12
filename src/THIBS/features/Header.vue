<script setup lang="ts">
import type { Page } from '@/THIBS/interfaces';
import { computed, reactive, Transition } from 'vue';
import type { FiltersInterface, FilterUpdate, ProductCartInterface, ProductInterface } from '../interfaces';
import HeaderListCart from './HeaderListCart.vue';

const props =  defineProps<{
    page: Page,
    cart: ProductCartInterface[],
    products: ProductInterface[],
}>()

const nbrProductInCart = computed(() => props.cart.reduce((acc, product) => {
    return acc + product.quantity
}, 0))

const cartEmpty = computed (() => props.cart.length === 0)

const emit = defineEmits<{
    (e: 'navigate', page: Page) : void,
    (e: 'addProductToCart', productId: number): void;
    (e: 'removeProductFromCart', productId: number) : void;

}>()



/**crée un boolean pour le menu  */

const state =reactive<{
    open: boolean
}>({
    open: false
})

const panier = reactive<{
    open: boolean
}>({
    open: false
})



</script>

<template>
    <!--<i class="fa-solid fa-bars"></i>-->
    <header>
        <div class="d-flex space-between align-items-center global ">
            <div class="d-flex align-items-center action-container ">

                <div class=" md:hidden" @click="state.open = true">
                    <img  class="show-s m-20" src="../starter-code/assets/shared/desktop/menu.png" alt="menu-icons">
                    
                    <Transition>
                    <div v-if="state.open" class="menu">
                        <Teleport to="body">
                        <div @click="state.open = false" class="calc"></div>
                        </Teleport>
                            <div class="choice-article d-flex space-between max-md:pt-24 max-xs:pt-20 max-xs:flex-col ">
                                <div @click="emit('navigate', 'Headphones')" class="headphones">
                                    <div class="text-content d-flex flex-column align-items-center justify-content-flex-end ">
                                        <img class="img-choice-article" src="../starter-code/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="headphone-picture">
                                        <h2 class="title-choice">HEADPHONES</h2>
                                        <button class="btn-3 d-flex m-10">SHOP <img class="row ml-3" src="../starter-code/assets/shared/desktop/icon-arrow-right.svg" alt="arrow-shop"></button>
                                    </div>
                                </div>
                                <div @click="emit('navigate', 'Speakers')" class="speakers">
                                    <div class="text-content d-flex flex-column align-items-center justify-content-flex-end ">
                                        <img class="img-choice-article" src="../starter-code/assets/shared/desktop/image-category-thumbnail-speakers.png" alt="headphone-picture">
                                        <h2 class="title-choice">SPEAKERS</h2>
                                        <button class="btn-3 d-flex m-10">SHOP <img class="row ml-3" src="../starter-code/assets/shared/desktop/icon-arrow-right.svg" alt="arrow-shop"></button>
                                    </div>
                                </div>
                                <div @click="emit('navigate', 'Earphones')" class="earphones">
                                    <div class="text-content  d-flex flex-column align-items-center justify-content-flex-end ">
                                        <img class="img-choice-article" src="../starter-code/assets/shared/desktop/image-category-thumbnail-earphones.png" alt="headphone-picture">
                                        <h2 class="title-choice">EARPHONES</h2>
                                        <button class="btn-3 d-flex m-10 ">SHOP <img class="row ml-3" src="../starter-code/assets/shared/desktop/icon-arrow-right.svg" alt="arrow-shop"></button>
                                    </div>
                                </div>
                                
                        </div>
                    </div>
                    </Transition>
                  
                </div>
                <img @click="emit('navigate', 'Boutique')" class="logo" src="../starter-code/assets/logo/LOGO-LAXAA.png" alt="logo-Laxaa">
                

            </div>
            <div class="menu-list max-md:hidden">
                    <ul class="d-flex">
                        <li><a @click="emit('navigate', 'Boutique')"><h6 class="mr-40">HOME</h6></a></li>
                        <li><a @click="emit('navigate', 'Headphones')"><h6 class="mr-40">HEADPHONES</h6></a></li>
                        <li><a @click="emit ('navigate', 'Speakers')" ><h6 class="mr-40">SPEAKERS</h6></a></li>
                        <li><a @click="emit('navigate', 'Earphones')" ><h6 class="mr-40">EARPHONES</h6></a></li>
                        <li><a @click="emit('navigate', 'BigShop')"><h6 class="mr-40">SHOP</h6></a></li>
                     </ul>
            </div>
            <div @click="panier.open = true" class="icone">
                <div class="cart-content">
                    <div  v-if="!cartEmpty" class="nbr-cart d-flex justify-content-center align-items-cente5 mb-10">
                        <span >{{ nbrProductInCart }}</span>
                    </div>
                    <div class="image-cart">
                        <img src="../starter-code/assets/shared/desktop/icon-cart.svg" alt="cart">
                    </div>
                </div>
                <div v-if="panier.open">
                    <Teleport to="body">
                        <div @click="panier.open = false" class="calc"></div>
                    </Teleport>
                    <div class="cart-product-list" >
                    <HeaderListCart
                    :cart="props.cart"
                    @remove-product-from-cart="emit('removeProductFromCart', $event)"
                    @navigate="emit('navigate', $event)"
                    :page="props.page"
                    :panier="panier.open"
                    :product="props.products"
                    />

                    </div>
                </div>
               
                </div>
            </div>
        <div class="ligne">
        </div>
      
    </header>
  
  
</template>

<style lang="scss" scoped>
@use '@/assets/base.scss';

@media screen and (max-width: 769px) {
    html body .global {
        width: 90%;
    }
    html body .ligne {
        width: 90%;
    }
    html body .action-container {
        width: 150px;
        display: flex;
        justify-content: space-around;
    }
}

@media screen and (max-width: 376px) {
 
    html body .action-container {
        width: 58%;
        display: flex;
        justify-content: space-between;
    }
    html body .cart-product-list {
        width: 327px;
        right: 5%;
    }
    .text-content {
        h2 {
            font-size: 1.25rem;
        }
    }
}

header {
    background-color: var(--black-2);
    height: 15vh;

    h6 {
    color: var(--white-1);
}
.menu-list {
    width: 50%;
}

.global{
    width: 69%;
    margin: auto;
    height: 80%;
}
img {
    height: 30px;
}
.logo {
    height: 50px;
}
.ligne {
    height: 1%;
    background-color: #979797;
    width: 69%;
    margin: auto;
    
}
h6:hover {
    color: var(--orange-1);
}

.nbr-cart {
    background-color: var(--red-1);
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: relative;
}
 span{
     color: var(--white-1);
     margin: 0;
    }

    .cart-content {
        position: relative;
    }
    .cart-product-list {
        position: fixed;
        top: 14%;
        right: 15%;
        width: 377px;
        background-color: var(--white-1);
        z-index: 2;
    }
}
@media screen and (max-width: 376px) {
    body .menu {
        height: auto;
    }
    body .headphones, body .earphones, body .speakers{
        width: 100%;
        height: 217px;
    }
    body .img-choice-article {
        height: 124px;
    }
}


.v-leave-to,
.v-enter-from {
    transform: translatey(-10px);
    opacity: 0;
}

.v-leave-active,
.v-enter-active {
    transition: all 0.2s;
}

/**Choix menu */
.menu {
    position: absolute;
    top: 80px;
    left: 0px;
    background-color: var(--white-1);
    width: 100%;
    height: 340px;
    z-index: 2;
}
.choice-article {
    width: 90%;
    margin: auto;
}
.title-choice {
    color: var(--black-1);
}
.img-choice-article {
    height: 150px;
}
.text-content {
    background-color: var(--gray-1);
    height: 150px;
    border-radius: 8px;
}
.headphones, .speakers, .earphones  {
    width: 32%;
}

.row {
    margin-top: 1px;
    height: 20px;
}
</style>
