<script setup lang="ts">
import type { ProductInterface } from '@/THIBS/interfaces';
import type { Page } from '@/THIBS/interfaces/type';
import BestAudioGear from '../../../Components/Boutique/BestAudioGear.vue'
import product from '@/THIBS/starter-code/data/product';

defineProps<{
    page: Page,
    product: ProductInterface
}>()

const emit = defineEmits<{
    (e: 'navigate', page: Page) : void;
    (e: 'addProductToCart', productId: number) : void
}>()

const premierProduct = product[1]

</script> 

<template>
   <div class="global-content">
        <div class="back">
            <button @click="emit('navigate', 'Headphones')"  class="btn-7 mb-10 mt-10">Go Back</button>
        </div>

        <div class="product-presentation d-flex mb-40 max-md:justify-between max-xs:flex-col">
            <div class="image-product">
            </div>
            <div class="product-texte align-items-center d-flex justify-content-center max-xs:pt-10">
                <div class="product-content max-md:flex max-md:flex-col max-md:justify-between	">
                    <H2 class="mt-5 mb-5 text-4xl max-md:mt-0 max-md:mb-0">XX59 Headphones</H2>
                    <p class="text-base mb-5 max-md:mb-0">Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
                    <h5 class="text-xl">$899</h5>
                    <div class="btn-product mt-30 d-flex max-md:mt-0">
                        <button @click="emit('addProductToCart', premierProduct.id)"
                        class="btn-1" data-id='1' data-name="ZX7" data-price="3,500">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="information-sup d-flex space-between mb-40 max-md:flex-col">
            <div class="features">
                <h3 class="mb-10 text-3xl">FEATURES</h3>
                <p class="text-base">These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.</p>
                <br>
                <p class="text-base">More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.</p>
            </div>
            <div class="in-the-box max-md:flex max-md:mt-24 max-xs:flex-col">
                <h3 class="mb-10 text-3xl">IN THE BOX</h3>
                <ul>
                    <li class="mt-5 text-base max-xs:mt-0"><span class="mr-10 text-base">1x</span> Headphone Unit</li>
                    <li class="mt-5 text-base"><span class="mr-10 text-base">2x</span> Replacement Earcups</li>
                    <li class="mt-5 text-base"><span class="mr-10 text-base">1x</span> User Manual</li>
                    <li class="mt-5 text-base"><span class="mr-10 text-base">1x</span> 3.5mm 5m Audio Cable</li>
                </ul>
            </div>
        </div>

        <div class="galery d-flex space-between mb-40 max-xs:flex-col max-xs:pt-10">
            <div class="left-galery d-flex flex-column space-between max-md:mr-5">
                <div class="top-left max-xs:mb-5">
                    <img class="top-picture" src="../../../../../starter-code/assets/product-xx59-headphones/desktop/image-gallery-1.jpg" alt="">
                </div>
                <div class="down-left max-xs:mb-5">
                    <img class="down-picture" src="../../../../../starter-code/assets/product-xx59-headphones/desktop/image-gallery-2.jpg" alt="">
                </div>
            </div>
            <div class="right-galery  max-xs:ml-0">
                <img class="right-picture" src="../../../../../starter-code/assets/product-xx59-headphones/desktop/image-gallery-3.jpg" alt="">
            </div>
        </div>

        <div class="also-like mb-40">
            <div class="text-also-like d-flex justify-content-center mb-50">
                <h3 class="text-3xl">YOU MAY ALSO LIKE</h3>
            </div>
            <div class="galery-also-like d-flex space-between max-xs:flex max-xs:flex-col">
                <div class="also-product d-flex flex-column align-items-center space-between">
                    <div class="also-picture-1"></div>
                    <h3 class="text-2xl">XX99 MARK II</h3>
                    <button @click="emit('navigate', 'ProductXX99Mark2')" class="btn-1">SEE PRODUCT</button>
                </div>

                <div class="also-product d-flex flex-column align-items-center space-between">
                    <div class="also-picture-2"></div>
                    <h3 class="text-2xl">XX99 MARK I</h3>
                    <button @click="emit('navigate', 'ProductXX99Mark1')" class="btn-1">SEE PRODUCT</button>
                </div>

                <div class="also-product d-flex flex-column align-items-center space-between">
                    <div class="also-picture-3"></div>
                    <h3 class="text-2xl">ZX9 SPEAKER</h3>
                    <button @click="emit('navigate', 'ProductZX9')" class="btn-1">SEE PRODUCT</button>
                </div>
            </div>
        </div>
        <div class="choice-article d-flex space-between mt-20 mb-30 max-xs:flex max-xs:flex-col">
                    <div @click="emit('navigate', 'Headphones')" class="headphones">
                        <div class="text-content d-flex flex-column align-items-center justify-content-flex-end ">
                            <img class="img-choice-article" src="../../../starter-code/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="headphone-picture">
                            <h6 class="text-lg mb-5 title-choice">HEADPHONES</h6>
                            <button class="btn-3 d-flex mb-30">SHOP <img class="ml-10" src="../../../starter-code/assets/shared/desktop/icon-arrow-right.svg" alt="arrow-shop"></button>
                        </div>
                    </div>
                    <div @click="emit('navigate', 'Speakers')" class="speakers">
                        <div class="text-content d-flex flex-column align-items-center justify-content-flex-end ">
                            <img class="img-choice-article" src="../../../starter-code/assets/shared/desktop/image-category-thumbnail-speakers.png" alt="headphone-picture">
                            <h6 class="text-lg mb-5 title-choice">SPEAKERS</h6>
                            <button class="btn-3 d-flex mb-30">SHOP <img class="ml-10" src="../../../starter-code/assets/shared/desktop/icon-arrow-right.svg" alt="arrow-shop"></button>
                        </div>
                    </div>
                    <div @click="emit('navigate', 'Earphones')" class="earphones">
                        <div class="text-content  d-flex flex-column align-items-center justify-content-flex-end ">
                            <img class="img-choice-article" src="../../../starter-code/assets/shared/desktop/image-category-thumbnail-earphones.png" alt="headphone-picture">
                            <h6 class="text-lg mb-5 title-choice">EARPHONES</h6>
                            <button class="btn-3 d-flex mb-30">SHOP <img class="ml-10" src="../../../starter-code/assets/shared/desktop/icon-arrow-right.svg" alt="arrow-shop"></button>
                        </div>
                    </div>
                </div>
        
        <BestAudioGear/>
    </div>
</template>
<style lang="scss" scoped>
@media screen and (max-width: 769px) {
    body .global-content {
        width: 90%;
    }
    body .image-product {
        background-image: url(../../../starter-code/assets/product-xx59-headphones/tablet/image-product.jpg);
        background-size: cover;
        width: 281px;
        height: 480px;
    }
    body .product-presentation {
        height: 480px;
    }
    body .product-content {
        width: 340px;
        height: 357px;
    }
    body .in-the-box {
        width: 555px; 
        height: 157px;
        display: flex;
        justify-content: space-between;
    }
    body .galery {
        height: 368px;
    }
    body .top-picture, body .down-picture {
        height: 174px;
        width: 277px;
    }
    body .right-picture {
        height: 368px;
        width: 395px;
    }
    .also-product {
        width: 30%;
    }
   body .also-picture-1, body .also-picture-2, body .also-picture-3 {
    width: 223px;
    height: 318px;
    transition: transform 0.5s;
    border-radius: 8px;
}
    body .text-content {
        height: 65%;
    }
    body .img-choice-article {
        height: 120px;
    }
    body .headphones, .speakers, .earphones {
        height: 250px;
    }
   
}
@media screen and (max-width: 376px) {
    body .product-presentation {
        height: auto;
    }
    body .image-product {
        background-image: url(../../../starter-code/assets/product-xx59-headphones/mobile/image-product.jpg);
        background-size: cover;
        width: 100%;
        height: 327px;
    }
    body .product-texte {
        width: 100%;
    }
    body .product-content {
        height: 327px;
    }
    body .features {
        width: 100%;
    }
    body .in-the-box {
        width: 100%;
    }
    body .galery {
        height: auto;
    }
    body .top-picture, body .down-picture {
        height: 174px;
        width: 100%;
    }
    body .right-picture {
        height: 368px;
        width: 635px;
    }
    body .also-product {
        width: 100%;
        height: 265px;
    }
    body .galery-also-like{
        height: 923px;
    }
    body .also-picture {
        height: 120px;
        width: 100%;
    }
    body .also-picture-1, body .also-picture-2,body .also-picture-3 {
    width: 100%;
    height: 120px;
    transition: transform 0.5s;
    border-radius: 8px;
    }
    body .also-picture-1 {
        background-image: url(../../../starter-code/assets/shared/mobile/image-xx99-mark-two-headphones.jpg);
        background-size: cover;
        background-position: center;
    }
    body .also-picture-2 {
        background-image: url(../../../starter-code/assets/shared/mobile/image-xx99-mark-one-headphones.jpg);
        background-size: cover;
        background-position: center;
    }
    body .also-picture-3 {
        background-image: url(../../../starter-code/assets/shared/mobile/image-zx9-speaker.jpg);
        background-size: cover;
        background-position: center;
    }
    body .headphones, body .speakers, body .earphones  {
    width: 100%;
}
}
.global-content {
    width: 69%;
    margin: auto;
}

/**product-presentation */
.product-presentation {
    height: 560px;
}
.product-texte, .image-product {
    width: 50%;
}
.image-product {
    background-image: url(../../../starter-code/assets/product-xx59-headphones/desktop/image-product.jpg);
    background-size: cover;
    background-position: center;
    border-radius: 8px;
}
.product-content {
    width:445px ;
}
.picture {
        width: 540px;
        height: 560px;
}


/**INFORMATION SUP */
.features {
    width: 635px;
}
.in-the-box {
    width: 350px;
}
span {
    color: var(--orange-1);
}

/**GALERY */
.galery {
    height: 592px;
}
.left-galery, .right-galery {
    width: 100%;
}
.top-picture, .down-picture, .right-picture {
    border-radius: 8px;
}
.top-picture, .down-picture {
    height: 280px;
}
.right-picture {
    height: 592px;
}

/**Also Prodcut */
.galery-also-like {
    width: 100%;
}
.also-product {
    height: 471px;
    width: 30%;
}
.also-picture-1, .also-picture-2, .also-picture-3 {
    width: 100%;
    height: 318px;
    transition: transform 0.5s;
    border-radius: 8px;
}
.also-picture-1 {
    background-image: url(../../../starter-code/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg);
    background-size: cover;
    background-position: center;
}
.also-picture-2 {
    background-image: url(../../../starter-code/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg);
    background-size: cover;
    background-position: center;
}
.also-picture-3 {
    background-image: url(../../../starter-code/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg);
    background-size: cover;
    background-position: center;
}
.also-product {
    height: 471px;
    width: 30%;
}
.also-product:hover{
transform: scale(1.05);
}
.also-picture {
    height: 318px;
    border-radius: 8px;
}
/**CHOICE ARTICLE */
.choice-article {
    width: 100%;
    padding-top: 7%;
    padding-bottom: 7%;
}
.title-choice {
    color: var(--black-1);
}
.img-choice-article {
    height: 160px;
}
.text-content {
    background-color: var(--gray-1);
    height: 80%;
    border-radius: 8px;
}
.headphones, .speakers, .earphones  {
    width: 30%;
}
.headphones, .speakers, .earphones {
    transition: transform 0.5s;
}
.headphones:hover, .speakers:hover , .earphones:hover {
transform: scale(1.1);
}
</style>