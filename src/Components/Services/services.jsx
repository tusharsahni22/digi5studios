import axios from "axios";

const apikey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_BASE_URL;

export const getTrendingMovies = () => {
    return axios.get(`${apiUrl}trending/movie/day?api_key=${apikey}`+"&include_adult=false");
};

export const getPopularMovie = () => {
    return axios.get(`${apiUrl}movie/popular?api_key=${apikey}`+"&include_adult=false");
};

export const getTopRatedMovie = () => {
    return axios.get(`${apiUrl}movie/top_rated?api_key=${apikey}`+"&include_adult=false");
};

export const getUpcomingMovie = () => {
    return axios.get(`${apiUrl}movie/upcoming?api_key=${apikey}`+"&include_adult=false");
};
export const getMovieDetails = (id) => {
    return axios.get(`${apiUrl}movie/${id}?api_key=${apikey}&language=en-US`);
}
export const getMovieCast = (id) => {
    return axios.get(`${apiUrl}movie/${id}/credits?api_key=${apikey}&language=en-US`);
}
export const getMostPopular = () => {
    return axios.get(`${apiUrl}movie/popular?api_key=${apikey}&language=en-US&page=1`);
}
export const getTopRated = () => {
    return axios.get(`${apiUrl}movie/top_rated?api_key=${apikey}&language=en-US&page=1`);
}
export const getMostRecent = () => {
    return axios.get(`${apiUrl}movie/upcoming?api_key=${apikey}&language=en-US&page=1`);
}
export const getRomanceMovies = () => {
    return axios.get(`${apiUrl}discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749`);
}
export const getSearch = (searchInput) => {
    return axios.get(`${apiUrl}search/movie?api_key=${apikey}&language=en-US&query=${searchInput}&page=1&include_adult=false`);
}
export const getActionMovies = () => {
    return axios.get(`${apiUrl}discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`);
}
export const getAdventureMovies = () => {
    return axios.get(`${apiUrl}discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12`);
}
export const getMovieTrailer = (id) => {
    return axios.get(`${apiUrl}movie/${id}/videos?api_key=${apikey}&language=en-US`);
}
export const getMovieReviews = (id) => {
    return axios.get(`${apiUrl}movie/${id}/reviews?api_key=${apikey}&language=en-US&page=1`);
}
