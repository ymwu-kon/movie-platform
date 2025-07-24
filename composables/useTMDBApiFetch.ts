// composables/useTMDBApiFetch.ts
import { buildUrl } from '~/utils/buildUrl'

export function useTMDBApiFetch<T = any>(
    path: string,
    options: {
        params?: Record<string, any>
        headers?: Record<string, any>
        [k: string]: any
    } = {}
) {
    const config = useRuntimeConfig()
    const BASE_URL = config.public.TMDB_BASE_URL || 'https://api.themoviedb.org/3'
    const url = buildUrl(BASE_URL, path, options.params)
    const headers = {
        Authorization: `Bearer ${config.public.TMDB_API_TOKEN}`,
        accept: 'application/json',
        ...options.headers || {},
    }
    return useFetch<T>(url, {
        headers,
        timeout: 10000,
        // server: false,
    })
}