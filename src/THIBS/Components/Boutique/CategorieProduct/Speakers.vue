<script setup lang="ts">
import TheHeader2 from '../CategorieProduct/HeaderSpeakers.vue'
import TheBestAudioGear from '../BestAudioGear.vue'
import type { Page } from '../../../interfaces/index';

defineProps<{
  page: Page
}>()

const emit = defineEmits<{
  (e: 'navigate', page: Page) :void
}>()
</script>

<template>
   <TheHeader2/>
   <div class="global-content">

      <div class="product d-flex max-md:flex-col">
      <div class="image-speaker-1 rounded-lg">
      </div>
      <div class="description">
        <div class="text-description d-flex flex-column space-between max-md:mt-5 max-md:items-center">
          <h7 class="text-lg">NEW PRODUCT</h7>
          <h2 class="text-4xl max-md:text-center">ZX9 <br>SPEAKER</h2>
          <P class="text-base max-xs:text-center">Upgrade your sound system with the all new ZX9 active speaker. 
            It’s a bookshelf speaker system that offers truly wireless 
            connectivity -- creating new possibilities for more pleasing
             and practical audio setups.</P>
          <button @click="emit('navigate', 'ProductZX9')" class="btn-1">SEE PRODUCT</button>
        </div>
      </div>
    </div>  

    
    <div class="product d-flex max-md:flex-col-reverse">
      <div class="description">
        <div class="text-description-1 d-flex flex-column space-between max-md:mt-5 max-md:items-center">
          <h2 class="text-4xl max-md:text-center">ZX7 <br>SPEAKER</h2>
          <P class="text-base max-xs:text-center">Stream high quality sound wirelessly with minimal loss.
            The ZX7 bookshelf speaker uses high-end audiophile components
            that represents the top of the line powered speakers for home or studio use.</P>
          <button @click="emit('navigate','ProductZX7')" class="btn-1">SEE PRODUCT</button>
        </div>
      </div>
      <div class="image-speaker-2 rounded-lg">
      </div>
    </div>
    <div class="choice-article d-flex space-between mt-20 mb-30 max-xs:flex max-xs:flex-col">
                    <div @click="emit('navigate', 'Headphones')" class="headphones">
                        <div class="text-content d-flex flex-column align-items-center justify-content-flex-end ">
                            <img class="img-choice-article" src="../../../starter-code/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="headphone-picture">
                            <h6  class="mb-5 text-lg title-choice">HEADPHONES</h6>
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
  body .image-speaker-1, body .image-speaker-2 {
    background-image: url(../../../starter-code/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg);
    background-size: cover;
    height: 352px;
    width: 100%;
  }
  body .image-speaker-2 {
    background-image: url(../../../starter-code/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg);
    
  }
  body .text-description {
    width:572px;
    height: 302px;
  } 
  body .text-description-1 {
    width:572px;
    height: 267px;
  } 
}
@media screen and (max-width: 376px) {
  body .image-speaker-1, body .image-speaker-2 {
    background-image: url(../../../starter-code/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg);
    background-size: cover;
    height: 352px;
    width: 100%;
  }
  body .image-speaker-2 {
    background-image: url(../../../starter-code/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg);
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

.image-speaker-1, .image-speaker-2  {
  background-image: url(../../../starter-code/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg);
  background-size: cover;
  width: 540px;
}
.image-speaker-2 {
  background-image: url(../../../starter-code/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg);
}
.description {
  margin: auto;
}
.text-description {
  width: 445px;
  height: 343px;
}
.text-description-1 {
  height: 308px;
  width: 445px;
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
