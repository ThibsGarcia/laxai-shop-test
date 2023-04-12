<script setup lang="ts">
import type { Category, FiltersInterface, FilterUpdate } from '@/THIBS/interfaces';


defineProps<{
    filters: FiltersInterface,
    nbrOfProduct: number
}>()

const emit = defineEmits<{
    (e: 'updateFilter', filterUpdate: FilterUpdate) : void
}>()



</script> 

<template>

    <div class="global-filter d-flex flex-column ">

        <section class="pt-5 pb-5">
         <div>
             <h5 class="text-2xl">Rechercher</h5>
             <input 
              class="input-3" 
              type="text" 
              placeholder="Rechercher"
              :value="filters.search"
              @input="emit('updateFilter', {search: ($event.target as HTMLInputElement).value})">
         </div>
        </section>
     
     
        <section class="pb-5">
         <div>
             <h5 class="text-2xl">Trier par prix</h5>
         </div>
         <div class="d-flex flex-column">
            <div>
                <input 
                class="mb-5" 
                type="radio"
                name="priceRange" 
                id="all" 
                value="all"
                checked
                @input="emit('updateFilter', {priceRange: [0, 10000]})">
                <label for="all">All</label>
            </div>
             
            <div>
                <input 
                class="mb-5"
                type="radio"
                name="priceRange"
                id="500-1000"
                value="500/1000"
                @input="emit('updateFilter', {priceRange: [500, 1000]})">
                <label for="500-1000">$500  -  $1000</label>
            </div>
            
            <div>
                <input 
                class="mb-5"
                type="radio"
                name="priceRange"
                id="1000-2000"
                value="1000/2000"
                @input="emit('updateFilter', {priceRange: [1000, 2000]})">
                <label for="1000-2000">$1000  -  $2000</label>
            </div>
             
            <div>
                <input 
                class="mb-5" 
                type="radio" 
                name="priceRange" 
                id="2000/4000" 
                value="2000/4000"
                @input="emit('updateFilter', {priceRange: [2000, 4000]})">    
                <label for="2000/4000">$2000  -  $4000</label>
            </div>

            <div>
                <input 
                class="mb-5" 
                type="radio" 
                name="priceRange" 
                id="more-4000" 
                value="more-4000"
                @input="emit('updateFilter', {priceRange: [4000, 10000]})">
                <label for="more-4000">Over $4000</label>
            </div>
             
         </div>
        </section>
     
        <section class="pb-5">
         <div>
             <h5 class="text-2xl">Trier par categorie</h5>
         </div>
         <div>
            <h6 class="text-lg mb-5"
            :class="{selected: filters.category === categori}"
            v-for="categori in (['All', 'Headphones', 'Earphones','Speakers'] as Category[])"
            @click="emit('updateFilter', { category: categori })">
            {{ categori }}</h6>
         </div>
        </section>
     
     
        <section>
         <div>
         <h6 
         class="mb-5 text-lg">Nombre de resultats: {{ nbrOfProduct }}</h6>
         <button @click="emit('updateFilter', {})" class="btn-1 mb-5">Supprimer les filtres</button>
         </div>
        </section>
    </div>

</template>

<style lang="scss" scoped>

.global-filter {
    background-color: var(--gray-1);
    padding-left: 1%;
}

input, label {
    font-size: 18px;
}
button {
    width: 90%;
    border-radius: 8px;
}
h6 {
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
}
.selected {
    font-weight: bold;
    text-decoration: underline;
}
</style>
