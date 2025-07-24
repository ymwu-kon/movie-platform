<template>
    <div class="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 mt-8">
        <!-- 背景 -->
        <div
            v-if="movie.backdrop_path"
            class="rounded-lg overflow-hidden mb-4 relative h-40 md:h-64 bg-gradient-to-r from-gray-800 via-gray-900 to-black"
        >
            <img
                :src="getImgUrl(movie.backdrop_path, 'w780')"
                class="w-full h-full object-cover opacity-60"
                :alt="movie.title"
            />
            <img
                v-if="movie.poster_path"
                :src="getImgUrl(movie.poster_path)"
                class="absolute left-4 bottom-2 w-24 md:w-40 h-auto rounded-lg shadow-lg border-4 border-white dark:border-gray-900"
                :alt="movie.title"
            />
        </div>

        <!-- 主要信息 -->
        <h1 class="text-3xl font-extrabold text-white mb-2 flex items-center">
            {{ movie.title }}
            <span v-if="movie.release_date" class="ml-2 text-base text-gray-400">
                ({{ movie.release_date.slice(0, 4) }})
            </span>
        </h1>
        <div class="text-gray-500 text-sm mb-3">
            <span class="font-mono">{{ movie.original_title }}</span>
            <span v-if="movie.tagline" class="ml-2 italic text-blue-500">
                "{{ movie.tagline }}"
            </span>
        </div>

        <!-- 类型/时长/分级 -->
        <div class="flex flex-wrap text-gray-500 items-center mb-2">
            <span
                v-for="g in movie.genres"
                :key="g.id"
                class="inline-block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-xl text-sm mr-2 mb-1"
            >
                {{ g.name }}
            </span>
            <span class="ml-2 text-xs" v-if="movie.runtime">
                | {{ Math.floor(movie.runtime / 60) }}小时{{ movie.runtime % 60 }}分
            </span>
            <span class="ml-2 text-xs" v-if="movie.adult">| 18+</span>
            <span class="ml-2 text-xs" v-else>| 家庭/全年龄</span>
        </div>

        <!-- 评分等 -->
        <div class="mb-3 text-sm text-gray-700 dark:text-gray-200">
            <span class="text-yellow-500 font-bold">★ {{ movie.vote_average }}</span>
            <span class="ml-1">({{ movie.vote_count }} 评分)</span>
            <span class="ml-4" v-if="movie.popularity">人气指数: {{ movie.popularity }}</span>
            <span class="ml-4" v-if="movie.status">上映状态: {{ movie.status }}</span>
        </div>

        <!-- 简介 -->
        <p class="text-base text-gray-800 dark:text-gray-300 mb-4" v-if="movie.overview">
            {{ movie.overview.trim() }}
        </p>

        <!-- 官网/IMDb 链接 -->
        <div class="mb-3 flex gap-4">
            <a
                v-if="movie.homepage"
                :href="movie.homepage"
                target="_blank"
                class="text-blue-600 underline hover:text-blue-500 transition duration-300"
            >
                官方网站
            </a>
            <a
                v-if="movie.imdb_id"
                :href="`https://www.imdb.com/title/${movie.imdb_id}/`"
                target="_blank"
                class="text-yellow-600 underline hover:text-yellow-500 transition duration-300"
            >
                IMDb
            </a>
        </div>

        <!-- 详细信息表格 -->
        <div class="overflow-x-auto text-gray-500">
            <table class="min-w-full text-xs md:text-sm mb-4">
                <tbody>
                    <tr v-if="movie.release_date">
                        <td class="font-semibold pr-2 py-1 text-gray-500">上映日期</td>
                        <td>{{ movie.release_date }}</td>
                    </tr>
                    <tr v-if="movie.production_countries?.length">
                        <td class="font-semibold pr-2 py-1 text-gray-500">出品国家</td>
                        <td>
                            <span
                                v-for="c in movie.production_countries"
                                :key="c.iso_3166_1"
                                class="mr-2"
                            >
                                {{ c.name }}
                            </span>
                        </td>
                    </tr>
                    <tr v-if="movie.spoken_languages?.length">
                        <td class="font-semibold pr-2 py-1 text-gray-500">语言</td>
                        <td>
                            <span
                                v-for="l in movie.spoken_languages"
                                :key="l.iso_639_1"
                                class="mr-2"
                            >
                                {{ l.english_name }} ({{ l.name }})
                            </span>
                        </td>
                    </tr>
                    <tr v-if="movie.budget">
                        <td class="font-semibold pr-2 py-1 text-gray-500">制作预算</td>
                        <td>${{ movie.budget.toLocaleString() }}</td>
                    </tr>
                    <tr v-if="movie.revenue">
                        <td class="font-semibold pr-2 py-1 text-gray-500">全球票房</td>
                        <td>${{ movie.revenue.toLocaleString() }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- 制作公司 -->
        <div v-if="movie.production_companies?.length" class="mb-2">
            <div class="font-semibold text-gray-600 mb-1">制作公司：</div>
            <div class="flex flex-wrap items-center gap-4">
                <span
                    v-for="c in movie.production_companies"
                    :key="c.id"
                    class="flex items-center space-x-2 mb-1"
                >
                    <img
                        v-if="c.logo_path"
                        :src="getImgUrl(c.logo_path, 'w92')"
                        :alt="c.name"
                        class="h-5 w-auto bg-gray-100 dark:bg-gray-800 rounded px-1"
                    />
                    <span class="text-xs text-gray-800 dark:text-gray-200">{{ c.name }}</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useTMDB } from "@/composables/useTMDB";

const route = useRoute();
const { getMovieDetail } = useTMDB();

const movie = ref<any>({});

const getImgUrl = (path: string, size = "w500") =>
    path ? `https://image.tmdb.org/t/p/${size}${path}` : "/placeholder.png";

onMounted(async () => {
    movie.value = await getMovieDetail(Number(route.params.id));
});
</script>
