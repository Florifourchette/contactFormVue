<script setup>
import { ref } from 'vue'

let gitData = ref([])

function gitFetch() {
    fetch(
        `https://api.github.com/search/repositories?q=react&per_page=5`,
        {
            method: 'GET',
        }
    )
        .then((response) => {
            return response.json();
        })
        .then((data) => gitData.value = data.items)
        .catch((error) => console.log(error));

}

gitFetch()

</script>


<template>
    <h2>REPO API CALL</h2>
    <p v-for="item in gitData">{{
        item.owner.login }}</p>
</template>