
import { useTMDBApiFetch } from './useTMDBApiFetch'

export const useTMDB = () => {
    // 获取热门电影
    const getPopularMovies = async (page = 1) => {
        const { data, error } = await useTMDBApiFetch('/movie/popular', {
            params: { page, language: 'zh-CN' }
        })
        if (error?.value) {
            console.error('TMDB API getPopularMovies错误:', error.value)
        }
        return data?.value || []
    }

    // 搜索电影
    const searchMovies = async (query: string, page = 1) => {
        const { data, error } = await useTMDBApiFetch('/search/movie', {
            params: { page, language: 'zh-CN', query }
        })
        if (error?.value) {
            console.error('TMDB API searchMovies错误:', error.value)
        }

        return data?.value || []
    }

    // 电影详情
    const getMovieDetail = async (id: number) => {
        const { data, error } = await useTMDBApiFetch(`/movie/${id}`, {
            params: { append_to_response: 'videos,credits', language: 'zh-CN' }
        })
        if (error?.value) {
            console.error('TMDB API getMovieDetail错误:', error.value)
        }

        return data?.value || []
    }


    const getNowPlayingMovies = async ({ language = 'zh-CN', page = 1 }) => {
        const { data, error } = await useTMDBApiFetch('/movie/now_playing', {
            params: { page, language }
        })
        if (error?.value) {
            console.error('TMDB API getNowPlaying错误:', error.value)
        }

        return data?.value || []
    }


    const getTopRatedMovies = async ({ language = 'zh-CN', page = 1 }) => {
        const { data, error } = await useTMDBApiFetch('/movie/top_rated', {
            params: { page, language }
        })
        if (error?.value) {
            console.error('TMDB API getTopRated错误:', error.value)
        }

        return data?.value || []
    }


    const getUpcomingMovies = async ({ language = 'zh-CN', page = 1 }) => {
        const { data, error } = await useTMDBApiFetch('/movie/upcoming', {
            params: { page, language }
        })
        if (error?.value) {
            console.error('TMDB API getUpcoming错误:', error.value)
        }

        return data?.value || []
    }

    return { getPopularMovies, searchMovies, getMovieDetail, getNowPlayingMovies, getTopRatedMovies, getUpcomingMovies }
}