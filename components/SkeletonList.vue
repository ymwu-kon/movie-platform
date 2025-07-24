<template>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <SkeletonCard v-for="i in count" :key="i" />
    </div>
</template>

<script setup lang="ts">
import SkeletonCard from "./SkeletonCard.vue";
defineProps<{ count?: number }>();
</script>
