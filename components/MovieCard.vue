<template>
    <div class="card shadow-lg p-4 hover:scale-105 transition cursor-pointer">
        <NuxtLink :to="`/movie/${movie.id}`">
            <img :src="imgUrl(movie.poster_path)" class="w-full h-60 object-cover rounded" />
            <div class="mt-2">
                <h3 class="font-bold">{{ movie.title }}</h3>
                <p class="text-sm text-gray-500">{{ movie.release_date }}</p>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
defineProps({ movie: Object });
const imgUrl = path => `https://image.tmdb.org/t/p/w500${path}`;
</script>
