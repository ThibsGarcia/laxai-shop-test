<script setup lang="ts">
import TheHeader2 from '../CategorieProduct/HeaderHeadphone.vue'
import TheBestAudioGear from '../BestAudioGear.vue'
import type { Page } from '../../../interfaces/index';

defineProps<{
    page: Page
}>()


const emit = defineEmits<{
    (e: 'navigate', page: Page) : void
}>()


</script>

<template>
  <TheHeader2/>
  <div class="global-content">

    <div class="product d-flex max-md:flex-col">
      <div class="image-headphone-1 rounded-lg">
      </div>
      <div class="description">
        <div class="text-description d-flex flex-column space-between max-md:items-center max-md:mt-5">
          <h7 class="text-lg">NEW PRODUCT</h7>
          <h2 class="text-4xl max-md:text-center">WWPP MARK II<br> HEADPHONES</h2>
          <P class="text-base max-xs:text-center">The new XX99 Mark II headphones is the pinnacle of pristine audio.
          It redefines your premium headphone experience by reproducing the balanced
          depth and precision of studio-quality sound.</P>
          <button @click="emit('navigate', 'ProductXX99Mark2')" class="btn-1">SEE PRODUCT</button>
        </div>
      </div>
    </div>

    <div class="product-1 d-flex max-md:flex-col-reverse ">
      <div class="description">
        <div class="text-description-1 d-flex flex-column space-between max-md:items-center max-md:mt-10">
          <h2 class="text-4xl max-md:text-center">XX99 MARK I <br>HEADPHONES</h2>
          <P class="text-base max-xs:text-center">As the gold standard for headphones, the classic XX99 
            Mark I offers detailed and accurate audio reproduction for 
            audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</P>
          <button @click="emit('navigate', 'ProductXX99Mark1')" class="btn-1">SEE PRODUCT</button>
        </div>
      </div>
      <div class="image-headphone-2 rounded-lg">
      </div>
    </div>

    <div class="product-1 d-flex max-md:flex-col">
      <div class="image-headphone-3 rounded-lg">
      </div>
      <div class="description ">
        <div class="text-description-1 d-flex flex-column space-between max-md:items-center max-md:mt-10">
          <h2 class="text-4xl max-md:text-center">XX59 <br> HEADPHONES</h2>
          <P class="text-base max-xs:text-center">Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.</P>
          <button @click="emit('navigate', 'ProductXX59')" class="btn-1">SEE PRODUCT</button>
        </div>
      </div>
    </div>  

    <div class="choice-article d-flex space-between mt-20 mb-30 max-xs:flex max-xs:flex-col">
                    <div @click="emit('navigate', 'Headphones')" class="headphones">
                        <div class="text-content d-flex flex-column align-items-center justify-content-flex-end ">
                            <img class="img-choice-article" src="../../../starter-code/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="headphone-picture">
                            <h6 class=" text-lg mb-5 title-choice">HEADPHONES</h6>
                            <button class="btn-3 d-flex mb-30">SHOP <img class="ml-10" src="../../../starter-code/assets/shared/desktop/icon-arrow-right.svg" alt="arrow-shop"></button>
                        </div>
                    </div>
                    <div @click="emit('navigate', 'Speakers')" class="speakers max-xs:mt-20">
                        <div class="text-content d-flex flex-column align-items-center justify-content-flex-end ">
                            <img class="img-choice-article" src="../../../starter-code/assets/shared/desktop/image-category-thumbnail-speakers.png" alt="headphone-picture">
                            <h6 class=" text-lg mb-5 title-choice">SPEAKERS</h6>
                            <button class="btn-3 d-flex mb-30">SHOP <img class="ml-10" src="../../../starter-code/assets/shared/desktop/icon-arrow-right.svg" alt="arrow-shop"></button>
                        </div>
                    </div>
                    <div @click="emit('navigate', 'Earphones')" class="earphones max-xs:mt-20">
                        <div class="text-content d-flex flex-column align-items-center justify-content-flex-end ">
                            <img class="img-choice-article" src="../../../starter-code/assets/shared/desktop/image-category-thumbnail-earphones.png" alt="headphone-picture">
                            <h6 class="text-lg mb-5 title-choice">EARPHONES</h6>
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
  body .product-1 {
    height: 671px;
  }
  body .image-headphone-1, body .image-headphone-2, body .image-headphone-3 {
    background-image: url(../../../starter-code/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg);
    background-size: cover;
    height: 352px;
    width: 100%;
  }
  body .image-headphone-2 {
    background-image: url(../../../starter-code/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg);
    
  }
  body .image-headphone-3 {
    background-image: url(../../../starter-code/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg);
   
  }
  body .text-description  {
    width:572px;
    height: 302px;
  } 

  body .text-description-1 {
    width: 572px;
    height: 267px;
  }
  
}
@media screen and (max-width: 376px) {
  body .image-headphone-1, body .image-headphone-2, body .image-headphone-3 {
    background-image: url(../../../starter-code/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg);
    background-size: cover;
    height: 352px;
    width: 100%;
  }
  body .image-headphone-2 {
    background-image: url(../../../starter-code/assets/product-xx99-mark-one-headphones//mobile/image-category-page-preview.jpg);
    
  }
  body .image-headphone-3 {
    background-image: url(../../../starter-code/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg);
   
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

.product, .product-1 {
  height: 560px;
  margin-top: 15%;
}
.image-headphone-1, .image-headphone-2, .image-headphone-3  {
  background-image: url(../../../starter-code/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg);
  background-size: cover;
  width: 540px;
}
.image-headphone-2 {
  background-image: url(../../../starter-code/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg);
  
}
.image-headphone-3 {
  background-image: url(../../../starter-code/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg);
}

.description {
  margin: auto;
}
.text-description, .text-description-1 {
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
