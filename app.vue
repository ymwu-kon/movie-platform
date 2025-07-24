<template>
    <div class="h-screen flex flex-col">
        <NavBar class="fixed top-0 left-0 right-0 z-50" />
        <main class="flex-1 overflow-y-auto pt-16 px-4 py-6">
            <NuxtPage />
        </main>
    </div>
</template>

<script setup lang="ts">
import NavBar from "~/components/NavBar.vue";
</script>
