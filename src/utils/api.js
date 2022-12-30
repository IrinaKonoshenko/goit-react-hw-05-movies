import axios from 'axios';
import { API_KEY, API_URL } from './env';

export const API = {
  async fetchMovie(movieId) {
    const params = {
      url: `/movie/${movieId}`,
      baseURL: API_URL,
      params: {
        api_key: API_KEY,
      },
    };
    const response = await axios(params);
    return response.data;
  },

  async fetchCast(movieId) {
    const params = {
      url: `/movie/${movieId}/credits`,
      baseURL: API_URL,
      params: {
        api_key: API_KEY,
      },
    };
    const response = await axios(params);
    return response.data.cast;
  },

  async fetchReviews(movieId) {
    const params = {
      url: `/movie/${movieId}/reviews`,
      baseURL: API_URL,
      params: {
        api_key: API_KEY,
      },
    };
    const response = await axios(params);
    return response.data.results;
  },
  async fetchMovies(query) {
    const params = {
      url: `/search/movie`,
      baseURL: API_URL,
      params: {
        api_key: API_KEY,
        query,
      },
    };
    const response = await axios(params);
    return response.data.results;
  },

  async fetchTrends() {
    const params = {
      url: `/trending/movie/day`,
      baseURL: API_URL,
      params: {
        api_key: API_KEY,
      },
    };
    const response = await axios(params);
    return response.data.results;
  },
};
