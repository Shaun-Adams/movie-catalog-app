import axios from 'axios';

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const baseUrl = 'https://api.themoviedb.org/3';

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${baseUrl}/discover/movie?api_key=${apiKey}`);
    // fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)

    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error; // You can handle this error in your component
  }
};
