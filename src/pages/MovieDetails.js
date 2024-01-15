// src/pages/MovieDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY`);
      setMovie(response.data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <li key={movie.id}>
            {movie.title},
            {/* {movie.release_date},
            {movie.overview},
            {movie.vote_average},
            {movie.vote_count},
            {movie.popularity}, */}
            {/* {movie.poster_path}, */}
            {/* {movie.original_language},
            {movie.original_title},
            {movie.backdrop_path}, */}
            {/* {movie.adult},
            {movie.video},
            {movie.genre_ids},
            {movie.media_type}, */}
            {/* {movie.name}, */}
            {/* {movie.first_air_date},
            {movie.origin_country},
            {movie.original_name},
            {movie.profile_path},
            {movie.known_for},
            {movie.known_for_department}, */}
            {/* <button onClick={()=>handleClick(movie)}>Details</button> */}
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
            {/* <iframe src={`https://video.tmdb.org/t/p/w500${movie.video}`} alt={movie.title} > </iframe> */}
            {/* <YouTube videoId={movie.video}></YouTube> */}
          </li>
    </div>
  );
}

export default MovieDetails;
