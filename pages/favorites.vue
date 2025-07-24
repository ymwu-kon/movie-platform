<template>
    <div>
        <h1 class="font-bold text-xl mb-4">我的收藏</h1>
        <MovieList :movies="favorites" />
    </div>
</template>

<script setup lang="ts">
import { useMovieStore } from "~/stores/movie";
const movieStore = useMovieStore();
const favorites = computed(() => movieStore.favorites);
</script>
