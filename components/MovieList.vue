<template>
    <div class="px-2 sm:px-6 md:px-10 max-w-screen-xl mx-auto">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div
                v-for="movie in movies"
                :key="movie.id"
                class="bg-white dark:bg-gray-800 shadow rounded-xl p-2 md:p-3 flex flex-col transition hover:scale-105 hover:shadow-2xl border dark:border-gray-700"
            >
                <NuxtLink
                    :to="`/movie/${movie.id}`"
                    class="block cursor-pointer hover:shadow-lg transition"
                >
                    <img
                        :src="getImgUrl(movie.poster_path)"
                        :alt="movie.title"
                        class="w-full h-48 sm:h-60 object-cover rounded-lg mb-2 bg-gray-100 dark:bg-gray-700"
                        loading="lazy"
                    />
                    <div class="flex-1 flex flex-col">
                        <h3
                            class="font-bold text-base md:text-lg truncate text-gray-800 dark:text-gray-100"
                        >
                            {{ movie.title }}
                        </h3>
                        <p class="text-gray-400 text-xs mb-1">{{ movie.release_date }}</p>
                        <p
                            class="hidden md:block text-sm md:text-base text-gray-700 dark:text-gray-300 line-clamp-2 mb-2"
                        >
                            {{ movie.overview }}
                        </p>
                        <div class="mt-auto flex items-center justify-between">
                            <span class="text-yellow-500 font-bold text-base md:text-lg">
                                ★ {{ Number(movie.vote_average).toFixed(1) }}
                            </span>
                            <span class="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                {{ movie.original_language.toUpperCase() }}
                            </span>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{ movies: any[] }>();
const getImgUrl = (path: string) => (path ? `https://image.tmdb.org/t/p/w500${path}` : "");
</script>

<style scoped>
/* 如果没用 Tailwind 插件 line-clamp，可以用 ellipsis 替代 */
.line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>
