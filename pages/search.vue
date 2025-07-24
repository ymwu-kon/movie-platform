<template>
    <div>
        <input
            v-model="query"
            placeholder="搜索电影或演员"
            class="input input-bordered mb-4"
            @keyup.enter="doSearch"
        />
        <MovieList :movies="results" />
        <Pagination v-if="totalPages > 1" :total="totalPages" :page="page" @change="goPage" />
    </div>
</template>

<script setup lang="ts">
import { useTMDB } from "~/composables/useTMDB";
import { ref } from "vue";
const { searchMovies } = useTMDB();
const query = ref("");
const page = ref(1);
const results = ref([]);
const totalPages = ref(0);

const doSearch = async () => {
    const data = await searchMovies(query.value, page.value);
    results.value = data?.results || [];
    totalPages.value = data?.total_pages || 1;
};

const goPage = p => {
    page.value = p;
    doSearch();
};
</script>
