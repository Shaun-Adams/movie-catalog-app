import axios from 'axios';

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const baseUrl = 'https://api.themoviedb.org/3';

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error; // You can handle this error in your component
  }
};
