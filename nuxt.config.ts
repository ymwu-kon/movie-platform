// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    ssr: false,
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
    runtimeConfig: {
        public: {
            TMDB_API_KEY: process.env.TMDB_API_KEY,
            TMDB_BASE_URL: process.env.TMDB_BASE_URL,
            TMDB_API_TOKEN: process.env.TMDB_API_TOKEN,
            SUPABASE_URL: process.env.SUPABASE_URL,
            SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
        }
    }
})
