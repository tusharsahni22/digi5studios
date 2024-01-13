import axios from "axios";

// const API_URL = "http://localhost:8080/api/";
const apikey = "754fa72688889d6b27eadd2bc28fe914";

export const getTrendingMovies = () => {
    return axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apikey}`+"&include_adult=false");
};

export const getPopularMovie = () => {
    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`+"&include_adult=false");
};

export const getTopRatedMovie = () => {
    return axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}`+"&include_adult=false");
};

export const getUpcomingMovie = () => {
    return axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`+"&include_adult=false");
};
export const getMovieDetails = (id) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=en-US`);
}
export const getMovieCast = (id) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}&language=en-US`);
}
export const getMostPopular = () => {
    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`);
}
export const getTopRated = () => {
    return axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`);
}
export const getMostRecent = () => {
    return axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1`);
}
export const getRomanceMovies = () => {
    return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749`);
}
export const getSearch = (searchInput) => {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=${searchInput}&page=1&include_adult=false`);
}
export const getActionMovies = () => {
    return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`);
}
export const getAdventureMovies = () => {
    return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12`);
}

