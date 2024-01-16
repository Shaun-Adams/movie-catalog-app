import axios from 'axios';

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const baseUrl = 'https://api.themoviedb.org/3';

export const fetchMovies = async (query) => {
  const url = query
    ? `${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`
    : `${baseUrl}/discover/movie?api_key=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const fetchMovieById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie by ID:', error);
    throw error;
  }
};

export const fetchMovieTrailerById = async (id) => {
  try {
    // Fetch videos
    const videosResponse = await axios.get(`${baseUrl}/movie/${id}/videos?api_key=${apiKey}`);
    const videosData = videosResponse.data.results;

    // Find a trailer video (assuming we are looking for YouTube trailers)
    const trailer = videosData.find(video => video.site === "YouTube" && video.type === "Trailer");

    return trailer ? trailer.key : null;
 
  } catch (error) {
    console.error('Error fetching movie by ID:', error);
    throw error;
  }
};