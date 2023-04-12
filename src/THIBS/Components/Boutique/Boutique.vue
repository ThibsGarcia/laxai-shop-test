<script setup lang="ts">
import type { Page } from '@/THIBS/interfaces';
import TheBestAudioGear from '../Boutique/BestAudioGear.vue'



defineProps<{
    page:Page,

}>()

const emit = defineEmits<{
    (e: 'navigate', page: Page) : void ; 
}>()

</script>

<template>

<div class="hero">
        <div class="text d-flex align-items-center max-md:justify-center">
            <div class="description d-flex flex-column  max-md:w-80">
                <h6 class="text-lg mt-30">NEW PRODUCT</h6>
                <h1 class="text-6xl mt-30 max-xs:text-4xl max-xs:text-center">XX99 Mark II Headphones</h1>
                <p class="text-base mt-30 max-xs:text-center">Experience natural, lifelike audio and exceptional build
                quality made for the passionate music enthusiast.</p>
                <button @click="emit('navigate', 'ProductXX99Mark2')" class="btn-1 mt-30"> SEE PRODUCT</button>
            </div>
        </div>
    </div>

    

<div class="global-content">
  

    <div class="choice-article d-flex space-between mt-20 mb-30 max-xs:flex-col">
                    <div @click="emit('navigate', 'Headphones')" class="headphones">
                        <div class="text-content d-flex flex-column align-items-center justify-content-flex-end ">
                            <img class="img-choice-article" src="../../../../starter-code/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="headphone-picture">
                            <h6 class="text-lg mb-5 title-choice">HEADPHONES</h6>
                            <button class="btn-3 d-flex mb-30">SHOP <img class="ml-10" src="../../../../starter-code/assets/shared/desktop/icon-arrow-right.svg" alt="arrow-shop"></button>
                        </div>
                    </div>
                    <div @click="emit('navigate', 'Speakers')" class="speakers">
                        <div class="text-content d-flex flex-column align-items-center justify-content-flex-end ">
                            <img class="img-choice-article" src="../../../../starter-code/assets/shared/desktop/image-category-thumbnail-speakers.png" alt="headphone-picture">
                            <h6 class="text-lg mb-5 title-choice">SPEAKERS</h6>
                            <button class="btn-3 d-flex mb-30">SHOP <img class="ml-10" src="../../../../starter-code/assets/shared/desktop/icon-arrow-right.svg" alt="arrow-shop"></button>
                        </div>
                    </div>
                    <div @click="emit('navigate', 'Earphones')" class="earphones">
                        <div class="text-content  d-flex flex-column align-items-center justify-content-flex-end ">
                            <img class="img-choice-article" src="../../../../starter-code/assets/shared/desktop/image-category-thumbnail-earphones.png" alt="headphone-picture">
                            <h6 class="text-lg mb-5 title-choice">EARPHONES</h6>
                            <button class="btn-3 d-flex mb-30">SHOP <img class="ml-10" src="../../../../starter-code/assets/shared/desktop/icon-arrow-right.svg" alt="arrow-shop"></button>
                        </div>
                    </div>
                </div>
            <div class="zx9-speaker d-flex max-md:flex-col max-md:items-center max-md:justify-around">
                <div class="zx9-picture d-flex justify-content-center">
                    <img class="circle" src="../../../../starter-code/assets/home/desktop/pattern-circles.svg" alt="circle">
                    <img class="speaker-first" src="../../../../starter-code/assets/home/desktop/image-speaker-zx9.png" alt="zx9-speaker">
                </div>
                <div class="zx9-description justify-content-center d-flex align-items-center">
                    <div class="zx9-text max-md:flex max-md:flex-col max-md:items-center">
                        <h2 class="text-4xl max-md:text-center">ZX9 <br> SPEAKER</h2>
                        <p class="text-base mt-30 mb-30 max-xs:text-center">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                        <button @click="emit('navigate', 'ProductZX9')" class="btn-4">SEE PRODUCT</button>
                    </div>
                </div>
            </div>

            <div class="zx7-speaker align-items-center d-flex">
                <div class="zx7-text d-flex flex-column  space-between  ">
                    <h4 class="text-2xl">ZX7 SPEAKER</h4>
                    <button @click="emit('navigate', 'ProductZX7')" class="btn-5">SEE PRODUCT</button>
                </div>
            </div>

            <div class="yx1-earphones d-flex space-between max-xs:flex-col">
                <div class="yx1-picture mr-50 max-md:mr-2.5 max-xs:mb-5"></div>
                <div class="yx1-description d-flex flex-column justify-content-center">
                    <div class="description-text d-flex flex-column space-between">
                        <h4 class="text-2xl">YX1 EARPHONES</h4>
                        <button @click="emit('navigate','ProductYX1')" class="btn-5">SEE PRODUCT</button>
                    </div>
                </div>
            </div>
            <TheBestAudioGear/>

          
   </div>


</template>

<style lang="scss" scoped>
/**HERO */
.hero {
    background-image: url('../../starter-code/assets/home/desktop/image-hero.jpg');
    background-size: cover;
    background-position: center;
    height: 85vh;
}
@media screen and (max-width: 769px) {

    .hero {
        background-image: url('../../starter-code/assets/home/tablet/image-header.jpg');
    }
    body .global-content {
       width: 90%;
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
    body .zx9-speaker {
        height: 720px;
    }
    body .speaker-first {
        height: 237px;
    }
    body .circle {
        height: 420px;
    }
    body .zx7-speaker {
        background-image: url(../../starter-code/assets/home/tablet/image-speaker-zx7.jpg);
        background-size: cover;
    }
    body .yx1-picture {
        background-image: url('../../starter-code/assets/home/tablet/image-earphones-yx1.jpg');
        background-size: cover;
    }
}
@media screen and (max-width: 376px) {
    .hero {
        background-image: url(../../starter-code/assets/home/mobile/image-header.jpg);
    }
    body .text {
        width: 328px;
    }

    body .description {
        align-items: center;
    }
    body .headphones, body .speakers, body .earphones {
        width: 100%;
    }
    body .zx9-picture, body .zx9-description {
        width: 100%;
    }
    body .zx9-speaker {
        height: 600px;
    }
    body .speaker-first {
        height: 207px;
    }
    body .description-text {
        width: 247px;
        height: 118px;
    }
    body .zx9-text {
        width: 280px;
    }
    body .zx7-speaker {
        background-image: url(../../starter-code/assets/home/mobile/image-speaker-zx7.jpg);
        background-size: cover;
    }
    body .yx1-picture, body .yx1-description {
        width: 100%;
    }
    body .yx1-picture {
        background-image: url('../../starter-code/assets/home/mobile/image-earphones-yx1.jpg');
        background-size: cover;
    }
    
}
.hero-1, .hero-2 {
    height: 85vh;
}
.headphones, .speakers, .earphones  {
    width: 30%;
}
.text {
    width: 69%;
    margin: auto;
    height: 100%;
}
.description {
    width: 400px;
}

h6,h1,p {
        color: var(--white-1);   
    }
.global-content {
    width: 69%;
    margin: auto;
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
}
.headphones:hover, .speakers:hover , .earphones:hover {
transform: scale(1.1);
}

/*ZXE SPEAKER*/
.zx9-speaker {
   height: 560px;
   border-radius: 8px;
   background-color: var(--orange-1);
   overflow: hidden;
   margin-bottom: 4%;
}
.zx9-picture, .zx9-description {
    width: 50%;
    z-index: 1;
}
.zx9-text {
    width: 349px;
    color: var(--white-1);
}

.circle {
    position: absolute;z-index: 0;
}
.speaker-first {
    position: relative;
    z-index: 1;
    height: 493px;
    top: 15%;
}
/*ZX7 SPEAKER*/
.zx7-speaker {
    height: 320px;
    background-image: url(../../starter-code/assets/home/desktop/image-speaker-zx7.jpg);
    background-size: cover;
    margin-bottom: 4%;
    z-index: 1;
    position: relative;
    border-radius: 8px;
}
.zx7-text {
    position: relative;
    width: 204px;
    height: 118px;
    left: 10%;
}

/**YX1 EARPHONES */
.yx1-earphones {
    margin-bottom: 12%;
}
.yx1-picture, .yx1-description {
    width: 50%;
    height: 320px;
    border-radius: 8px;
}
.yx1-picture {
    background-image: url(../../starter-code/assets/home/desktop/image-earphones-yx1.jpg);
    background-size: cover;
}
.yx1-description {
    background-color: var(--gray-1);
    position: relative;
}
.description-text {
    position: relative;
    left: 15%;
    height: 118px;
}


</style>
