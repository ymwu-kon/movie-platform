<template>
    <MovieListView :fetchMovies="getPopularMovies" />
</template>

<script setup lang="ts">
import MovieListView from "~/components/MovieListView.vue";
import { useTMDB } from "~/composables/useTMDB";

const { getPopularMovies } = useTMDB();
// getPopularMovies(page: number): Promise<Movie[]>
</script>
