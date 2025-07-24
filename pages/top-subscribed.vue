<template>
    <MovieListView :fetchMovies="getTopRatedMovies" />
</template>

<script setup lang="ts">
import MovieListView from "~/components/MovieListView.vue";
import { useTMDB } from "~/composables/useTMDB";

const { getTopRatedMovies } = useTMDB();
// getNowPlayingMovies(page: number): Promise<Movie[]>
</script>
