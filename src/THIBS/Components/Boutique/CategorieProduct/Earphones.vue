<script setup lang="ts">
import TheHeader2 from '../CategorieProduct/HeaderEarphones.vue'
import TheBestAudioGear from '../BestAudioGear.vue'
import type { Page } from '../../../interfaces/index';


defineProps<{
    page: Page
}>()

const emit = defineEmits<{
    (e: 'navigate', page: Page) : void;
}>()

</script>

<template>
  <TheHeader2/>
  <div class="global-content">

    <div class="product d-flex max-md:flex-col">
      <div class="image-earphones-1 rounded-lg">
      </div>
      <div class="description">
        <div class="text-description d-flex flex-column space-between max-md:mt-5 max-md:items-center">
          <h7 class="text-lg">NEW PRODUCT</h7>
          <h2 class="text-4xl max-md:text-center">YX1 WIRELESS EARPHONES</h2>
          <p class="text-base max-xs:text-center">Tailor your listening experience with bespoke dynamic drivers
            from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
            sound even in noisy environments with its active noise cancellation feature.</p>
          <button @click="emit('navigate', 'ProductYX1')" class="btn-1">SEE PRODUCT</button>
        </div>
      </div>
    </div>
    <div class="choice-article d-flex space-between mt-20 mb-30 max-xs:flex max-xs:flex-col">
                    <div @click="emit('navigate', 'Headphones')" class="headphones">
                        <div class="text-content d-flex flex-column align-items-center justify-content-flex-end ">
                            <img class="img-choice-article" src="../../../starter-code/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="headphone-picture">
                            <h6 class="mb-5 text-lg title-choice">HEADPHONES</h6>
                            <button class="btn-3 d-flex mb-30">SHOP <img class="ml-10" src="../../../starter-code/assets/shared/desktop/icon-arrow-right.svg" alt="arrow-shop"></button>
                        </div>
                    </div>
                    <div @click="emit('navigate', 'Speakers')" class="speakers max-xs:mt-20">
                        <div class="text-content d-flex flex-column align-items-center justify-content-flex-end ">
                            <img class="img-choice-article" src="../../../starter-code/assets/shared/desktop/image-category-thumbnail-speakers.png" alt="headphone-picture">
                            <h6 class="mb-5 text-lg title-choice">SPEAKERS</h6>
                            <button class="btn-3 d-flex mb-30">SHOP <img class="ml-10" src="../../../starter-code/assets/shared/desktop/icon-arrow-right.svg" alt="arrow-shop"></button>
                        </div>
                    </div>
                    <div @click="emit('navigate', 'Earphones')" class="earphones max-xs:mt-20">
                        <div class="text-content d-flex flex-column align-items-center justify-content-flex-end ">
                            <img class="img-choice-article" src="../../../starter-code/assets/shared/desktop/image-category-thumbnail-earphones.png" alt="headphone-picture">
                            <h6 class="mb-5 text-lg title-choice">EARPHONES</h6>
                            <button class="btn-3 d-flex mb-30">SHOP <img class="ml-10" src="../../../starter-code/assets/shared/desktop/icon-arrow-right.svg" alt="arrow-shop"></button>
                        </div>
                    </div>
                </div>
    <TheBestAudioGear/>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 769px) {
  body .global-content {
    width: 90%;
  }
  body .product {
    height: 706px;
  }
  body .image-earphones-1 {
    background-image: url(../../../starter-code/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg);
    background-size: cover;
    height: 352px;
    width: 100%;
  }
  body .text-description {
    width:572px;
  } 
}
@media screen and (max-width: 376px) {
  body .image-earphones-1 {
    background-image: url(../../../starter-code/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg);
    background-size: cover;
    height: 352px;
    width: 100%;
  }
 
  body .text-description  {
    width:100%;
    height: 340px;
  } 

  body .text-description-1 {
    width: 100%;
    height: 340px;
  }
  body .headphones, body .speakers, body .earphones {
    width: 100%;
  }

  body .text-content {
    height: 165px;
  }
  body .img-choice-article {
    height: 125px;
  }

}
.global-content {
    width: 69%;
    margin: auto;
}

.product {
  height: 560px;
  margin-top: 15%;
}

.image-earphones-1  {
  background-image: url(../../../starter-code/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg);
  background-size: cover;
  width: 540px;
}
.description {
  margin: auto;
}
.text-description {
  width: 445px;
  height: 343px;
}

/**CHOICE ARTICLE */
.choice-article {
    width: 100%;
    padding-top: 14%;
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

.headphones, .speakers, .earphones {
    transition: transform 0.5s;
    width: 30%;

}
.headphones:hover, .speakers:hover , .earphones:hover {
transform: scale(1.1);
}


</style>
