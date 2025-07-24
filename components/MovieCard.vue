<template>
    <div
        class="card group bg-black text-white rounded-xl shadow-lg transition transform cursor-pointer overflow-hidden"
    >
        <NuxtLink :to="`/movie/${movie.id}`" class="block h-full">
            <!-- 图片封面 -->
            <img
                :src="imgUrl(movie.poster_path)"
                class="w-full h-64 md:h-72 lg:h-80 object-cover group-hover:opacity-90 transition duration-300"
            />

            <!-- 内容区域 -->
            <div class="p-4 space-y-4">
                <!-- 电影标题 & 评分 & 发布日期 -->
                <div class="space-y-1">
                    <h3
                        class="text-xl font-bold truncate hover:text-yellow-400 transition duration-300"
                    >
                        {{ movie.title }}
                    </h3>
                    <div class="flex items-center text-sm text-gray-400 space-x-4">
                        <span class="text-yellow-400 font-medium">
                            ⭐ {{ movie.vote_average.toFixed(1) }}
                        </span>
                        <span v-if="windowWidth >= 768" class="text-gray-500">
                            {{ movie.release_date }}
                        </span>
                    </div>
                </div>

                <!-- 电影简介（仅中大屏显示） -->
                <p v-if="windowWidth >= 768" class="text-sm text-gray-300 line-clamp-3">
                    {{ movie.overview.trim() }}
                </p>

                <!-- 原始信息（仅大屏显示） -->
                <div v-if="windowWidth >= 1024" class="text-xs text-gray-400 space-y-1">
                    <p>语言：{{ movie.original_language.toUpperCase() }}</p>
                    <p>原始标题：{{ movie.original_title }}</p>
                    <p>是否成人：{{ movie.adult ? "是" : "否" }}</p>
                    <p>流行度：{{ movie.popularity.toFixed(1) }}</p>
                    <p>评分人数：{{ movie.vote_count }}</p>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
defineProps({ movie: Object });

const imgUrl = (path: string) => `https://image.tmdb.org/t/p/w500${path}`;

import { ref, onMounted, onUnmounted } from "vue";

const windowWidth = ref(window.innerWidth);

const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener("resize", updateWindowWidth);
});
onUnmounted(() => {
    window.removeEventListener("resize", updateWindowWidth);
});
</script>

<style scoped>
.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.card {
    transition: box-shadow 0.3s ease-in-out;
}

.card:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

h3 {
    transition: color 0.3s ease;
}
</style>
