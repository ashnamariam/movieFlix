import { call } from "../services"
const API_KEY = 'd432b933ecc6d5642d8d2befbc40c7ac';
const API_URL = 'https://api.themoviedb.org/3/';
export async function GetMovies(pageNumber) {
    return await call(`${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&page=${pageNumber}&include_adult=false`)
}

export async function GetMoviesGenres() {
    return await call(`${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US1`)
}

export async function movieSearch(searchTerm) {
    return await call(`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchTerm}`)
}
