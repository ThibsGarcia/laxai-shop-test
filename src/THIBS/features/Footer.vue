<script setup lang="ts">import type { Page } from '../interfaces';


defineProps<{
    page: Page
}>()


const emit = defineEmits<{
    (e: 'navigate', page: Page) : void
}>()
</script>s

<template>
 <footer class="d-flex flex-column">
    <div class="menu d-flex space-between align-items-center pt-5 max-md:flex-col max-md:items-start max-xs:items-center max-xs:p-0">
        <div class="logo">
            <img @click="emit('navigate', 'Boutique')" class="logo" src="../../../starter-code/assets/logo/logo-laxaa.png" alt="logo-Laxaa">
        </div>
        <div class="d-flex menu-footer space-between max-xs:flex-col max-xs:items-center max-xs:pt-5">
                <a @click="emit('navigate', 'Boutique')"><h6 class="text-base">HOME</h6></a>
                <a @click="emit('navigate', 'Headphones')"><h6 class="text-base max-xs:pt-2.5">HEADPHONES</h6></a>
                <a @click="emit('navigate','Speakers')"><h6 class="text-base max-xs:pt-2.5">SPEAKERS</h6></a>
                <a @click="emit('navigate', 'Earphones')"><h6 class="ttext-base max-xs:pt-2.5">EARPHONES</h6></a>
                <a @click="emit('navigate', 'BigShop')"><h6 class=":text-base max-xs:pt-2.5" >SHOP</h6></a>
        </div>
    </div>
    <div class="middle-footer d-flex pt-5 pb-5 max-xs:pt-20 max-xs:pb-0">
        <div class="text">
            <p class="text-base max-xs:text-center">Audiophile is an all in one stop to fulfill your audio
                needs. We're a small team of music lovers and 
                sound specialists who are devoted to helping you 
                get the most out of personal audio. Come and visit 
                our demo facility - we’re open 7 days a week.</p>
        </div>
        <div class="icone max-md:hidden">
            <div class="picture-icone d-flex justify-content-flex-end align-items-flex-end">
                <div class="d-flex space-between liste-icone">
                    <a href="#"><img src="../../../starter-code/assets/shared/desktop/icon-facebook.svg" alt="facebook"></a>
                    <a href="#"><img src="../../../starter-code/assets/shared/desktop/icon-twitter.svg" alt="twitter"></a> 
                    <a href="#"><img src="../../../starter-code/assets/shared/desktop/icon-instagram.svg" alt="instagram"></a> 
                </div>
            </div>  
        </div>
    </div>
    <div class="donw-footer pb-5 max-xs:flex-col max-xs:justify-between">
        <div>
            <p class="text-base max-xs:text-center">Copyright 2021. All Rights Reserved - THIBS</p>
        </div>
        <div class="icone md:hidden">
            <div class="picture-icone d-flex justify-content-flex-end align-items-flex-end max-xs:justify-center">
                <div class="d-flex space-between liste-icone">
                    <a href="#"><img src="../../../starter-code/assets/shared/desktop/icon-facebook.svg" alt="facebook"></a>
                    <a href="#"><img src="../../../starter-code/assets/shared/desktop/icon-twitter.svg" alt="twitter"></a> 
                    <a href="#"><img src="../../../starter-code/assets/shared/desktop/icon-instagram.svg" alt="instagram"></a> 
                </div>
            </div>  
        </div>
    </div>

 </footer>

  
</template>

<style lang="scss" scoped>
@media screen and (max-width: 769px) {
    body .menu, body .middle-footer, body .donw-footer {
        width: 90%;
    }
    html footer {
        height: 45vh;
    }
    body .menu {
        height: 150px;
    }
    .donw-footer {
        display: flex;
    }
  
}
@media screen and (max-width: 376px) {
    html footer {
        height: 80vh;
    }
    body .text p, body .menu-footer {
        width: 100%;
    }
    body .icone, body .text {
        width: 100%;
    }
    body .donw-footer {
        height: 110px;
    }

}

footer {
    background-color: var(--black-1);
    height: 35vh;
    color: var(--white-1);

}
.menu, .middle-footer, .donw-footer {
    width: 69%;
    margin: auto;
}
.menu {
    padding-bottom: 0.5%;
}
.menu-footer {
    width: 500px;
}
.liste-icone {
    width: 150px;
}
.logo {
    height: 80px;
}
h6 {
    color: var(--white-1);
    
}
.text, .icone {
    width: 50%;
}
.text p {
    width: 540px;
}
.picture-icone {
    height: 100%;
}
.icone img {
    width: 24px;
    height: 24px;
}

h6:hover {
    color: var(--orange-1);
}
</style>