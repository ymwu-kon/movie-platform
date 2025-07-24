import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movie', {
    state: () => ({
        movies: [],
        movieDetail: null,
        favorites: [],
    }),
    actions: {
        setMovies(movies) {
            this.movies = movies
        },
        setMovieDetail(detail) {
            this.movieDetail = detail
        },
        addFavorite(movie) {
            if (!this.favorites.find(m => m.id === movie.id)) {
                this.favorites.push(movie)
            }
        },
        removeFavorite(id) {
            this.favorites = this.favorites.filter(m => m.id !== id)
        },
    },
})