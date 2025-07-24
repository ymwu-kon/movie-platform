<template>
    <div ref="scrollRef" class="h-full overflow-y-auto" @scroll="onScroll">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
        </div>
        <div v-if="loading" class="text-center py-4 text-gray-400">加载中...</div>
        <div v-if="noMore" class="text-center py-4 text-gray-300">没有更多了</div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import MovieCard from "./MovieCard.vue";
import throttle from "lodash/throttle";

interface Props {
    fetchMovies: (page: number) => Promise<any[]>; // 父组件传入的请求方法
}

const props = defineProps<Props>();

const movies = ref<any[]>([]);
const page = ref(1);
const loading = ref(false);
const noMore = ref(false);
const scrollRef = ref<HTMLElement | null>(null);

const loadMovies = async () => {
    if (loading.value || noMore.value) return;
    loading.value = true;
    const result = await props.fetchMovies(page.value);
    if (result.length === 0) {
        noMore.value = true;
    } else {
        movies.value.push(...result.results);
        page.value++;
    }
    loading.value = false;
};

const onScroll = throttle(() => {
    const el = scrollRef.value;
    if (!el) return;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 120) {
        loadMovies();
    }
}, 300);

onMounted(() => {
    loadMovies();
    // 可以用 @scroll="onScroll"，不一定需要 addEventListener
});

onBeforeUnmount(() => {
    // 如 addEventListener 则需解绑，否则无需处理
});
</script>
