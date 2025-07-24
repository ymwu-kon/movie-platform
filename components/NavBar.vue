<template>
    <nav
        class="h-14 w-full flex items-center justify-between px-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm z-50"
    >
        <!-- 左：站名 -->
        <div class="font-bold text-xl text-blue-600">电影信息平台</div>
        <!-- 右：链接 -->
        <div class="flex space-x-4">
            <NuxtLink to="/" class="nav-link">最受欢迎</NuxtLink>
            <NuxtLink to="/now-playing" class="nav-link">现在上映</NuxtLink>
            <NuxtLink to="/top-subscribed" class="nav-link">评级排序</NuxtLink>
            <NuxtLink to="/upcoming" class="nav-link">即将上映</NuxtLink>
        </div>
    </nav>
</template>

<style scoped>
.nav-link {
    @apply px-2 py-1 rounded text-gray-700 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-gray-800 transition;
}
</style>
