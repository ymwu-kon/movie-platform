<template>
    <MovieListView :fetchMovies="getUpcomingMovies" />
</template>

<script setup lang="ts">
import MovieListView from "~/components/MovieListView.vue";
import { useTMDB } from "~/composables/useTMDB";

const { getUpcomingMovies } = useTMDB();
// getNowPlayingMovies(page: number): Promise<Movie[]>
</script>
