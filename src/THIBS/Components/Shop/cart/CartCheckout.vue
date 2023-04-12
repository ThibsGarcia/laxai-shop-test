<script setup lang="ts">
import type { Page } from '@/THIBS/interfaces';
import { reactive } from 'vue';

defineProps<{
    page: Page
}>()

const emit = defineEmits<{
    (e: 'navigate', page: Page) : void
}>()

const open = reactive<{
    openMoney: boolean,
    openCash: boolean
}>({
    openMoney: true,
    openCash: false
})


</script>

<template>

    <div class="back-section">
        <button @click="emit('navigate', 'BigShop')" class="btn-7 mt-10">Go Back</button>
    </div>

    
    <div class="checkout mt-20 mb-20">
        <section class="checkout-content">
      <div class="title pt-10 pb-5">
        <h2 class="text-4xl">CHECKOUT</h2>
      </div>

      <form action="#">
        <div class="title pb-5">
            <h8 class="text-base">BILLING DETAILS</h8>
        </div>
        <div class="billing-details d-flex mb-5 space-between max-xs:flex-col">
            <div class="input-box d-flex flex-column">
                <span class="details">Name</span>
                <input class="input-1 p-5" type="name" placeholder="Alexei Ward" required>
            </div>
            <div class="input-box d-flex flex-column">
                <span class="details">Email Address</span>
                <input class="input-1 p-5" type="email" placeholder="alexei@mail.com" required>
            </div>
        </div>
        <div class="billing-details-2 mb-5">
            <div class="input-box d-flex flex-column">
                <span class="details">Phone Number</span>
                <input class="input-1 p-5" type="tel" placeholder="+1 202-555-0136" required>
            </div>
        </div>

        <div class="shipping-info">
            <div class="title pb-5">
            <h8 class="text-base">SHIPPING INFO</h8>
        </div>
            <div class="mb-5">
                <div class="input-box d-flex flex-column">
                    <span class="details">Address</span>
                    <input class="input-2 p-5" type="text" placeholder="Address" required>
                </div>
            </div>
            <div class="d-flex mb-5 space-between max-xs:flex-col">
                <div class="input-box d-flex flex-column">
                    <span class="details">ZIP Code</span>
                    <input class="input-1 p-5" type="number" placeholder="10001" required>
                </div>
                <div class="input-box d-flex flex-column">
                    <span class="details">City</span>
                    <input class="input-1 p-5" type="text" placeholder="New York" required>
                </div>
            </div>
               
                <div class="input-box d-flex flex-column mb-5">
                    <span class="details">Country</span>
                    <input class="input-1 p-5" type="text" placeholder="United States" required>
                </div>
        </div>

        <div class="payment-details">
            <div class="title pb-5">
            <h8 class="text-base">PAYMENT DETAILS</h8>
        </div>
            <div class="payment-input d-flex space-between mb-5 max-xs:flex-col">
                <div>
                    <span class="details">Payment Method</span>
                </div>

                <div>
                    <div class="input-payment mb-5">
                        <input @click="open.openMoney = !open.openMoney && !open.openCash " class="m-5" checked type="radio" id="e-Money" value="e-Money"  name="payment-method">
                        <label for="e-Money  ">e-Money</label>
                    </div>
                    <div class="input-payment">
                        <input @click="open.openCash = !open.openCash && !open.openMoney" class="m-5" type="radio" id="cash-on-Delivery" value="cash-on-Delivery" name="payment-method" >
                        <label for="cash-on-Delivery">Cash on Delivery (broken)</label>
                    </div>
                </div>

            </div>
                <div v-if="open.openMoney" class="d-flex pb-50 space-between max-xs:flex-col ">
                    <div class="input-box d-flex flex-column mr-15">
                    <span class="details">e-Money Number</span>
                    <input class="input-1 p-5" type="text" placeholder="238521993" required>
                </div>
                <div class="input-box d-flex flex-column">
                    <span class="details">e-Money PIN</span>
                    <input class="input-1 p-5" type="text" placeholder="e-Money PIN" required>
                </div>
            </div>
            <div>
                <div v-if="open.openCash"  class="text-cash d-flex align-items-center space-between max-xs:flex-col">
                    <div class="picture mr-10 max-xs:mr-0">
                        <img src="../../../starter-code/assets/checkout/icon-cash-on-delivery.svg" alt="icon-cash-on-delivery">
                    </div>
                    <div class="content max-xs:mt-5">
                        <p class="text-base">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery
                            courier arrives at your residence. Just make sure your address is correct
                            so that your order will not be cancelled.</p>
                    </div>
                </div>
            </div>
        </div>
      </form>
        
    </section>
    </div>


</template>

<style lang="scss" scoped>
@media screen and (max-width: 769px) {
    body .checkout {
        width: 100%;
    }
    body .checkout-content {
        width: 97%;
    }
    
}
@media screen and (max-width: 376px) {
    body .checkout-content {
        width: 90%;
    }
    body .input-2, body .input-1, body .input-payment {
            width: 280px;
        }
    body .content {
        width: 100%;
    }

    body .text-cash img {
        height: 80px;
        width: 80px;
    }
}

/**BACK SECTION */

.back-section {
    position: absolute;
    margin-bottom: 50px;
}


/**checkout */
.checkout {
    background-color: var(--gray-1);
    width: 60%;
    border-radius: 8px;
}

.checkout-content {
    width: 88%;
    margin: auto;
}

.input-payment {
    width: 249px ;
    height: 56px;
    background-color: var(--white-1);
    border: 1px solid #CFCFCF;
    display: flex;
    align-items: center;
    border-radius: 8px;
    color: gray;
}
input::placeholder {
    color: gray;
}

input:hover {
    border: 1px solid var(--orange-1);
}
input:valid {
    border: 1px solid green;
}

input {
    outline: none;
}
input[type='radio']:checked:before {
  background: green;
}

img {
    width: 150px;
    height: 60px;
}


</style>
