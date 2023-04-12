<script setup lang="ts">

</script>

<template>
  <div class="container-best-audio max-xs:pb-20">
    <div class="best-audio-gear d-flex">
                <div class="best-audio-text d-flex align-items-center">
                    <div class="promotion-text ">
                        <h2 class="mb-30 text-4xl max-md:text-center max-md:font-bold">BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h2>
                        <p class="text-base max-xs:text-center">Located at the heart of New York City, Audiophile is the premier store for high
                            end headphones, earphones, speakers, and audio accessories. We have a large
                            showroom and luxury demonstration rooms available for you to browse and 
                            experience a wide range of our products. Stop by our store to meet some
                            of the fantastic people who make Audiophile the best place to buy your 
                            portable audio equipment.</p>
                     </div>
                </div>
            <div class="picture-man">
            </div>
        </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 769px) {
    body .best-audio-gear {
        height: 633px;
        flex-direction: column-reverse;
        margin-bottom: 30%;
        margin-top: 0px;
    }
    body .picture-man {
        background-image: url(../../starter-code/assets/shared/tablet/image-best-gear.jpg);
        background-size: cover;
        height: 300px;
        width: 100%;
        display: flex;
        justify-content: flex-start;
    }
    body .best-audio-text {
        width: 100%;
    }
    body .promotion-text {
        width: 573px;
        margin: auto;
    }
}
@media screen and (max-width: 376px) {
    body .picture-man {
        background-image: url(../../starter-code/assets/shared/mobile/image-best-gear.jpg);
        background-size: cover;
    }
   
}
.best-audio-gear {
    margin-bottom: 12%;
    margin-top: 100px;
    height: 588px;
}
.best-audio-text, .picture-man {
    width: 50%;
}
.picture-man {
    background-image: url('../../starter-code/assets/shared/desktop/image-best-gear.jpg');
    background-size: cover;
    height: 588px;
    border-radius: 8px;
}
.promotion-text {
    width: 80%;
    height: 55%;
}
.promotion-text span {
    color: var(--orange-1);
}
</style>
