<template>
    <MovieListView :fetchMovies="getNowPlayingMovies" />
</template>

<script setup lang="ts">
import MovieListView from "~/components/MovieListView.vue";
import { useTMDB } from "~/composables/useTMDB";

const { getNowPlayingMovies } = useTMDB();
// getNowPlayingMovies(page: number): Promise<Movie[]>
</script>
