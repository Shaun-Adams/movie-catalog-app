import React from 'react';
import YouTubePlayer from '../YoutubePlayer';
import { Grid, Paper, Typography } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Star, Visibility } from '@mui/icons-material';

const DetailsGrid = ({ videoId, movieDetails }) => {
  return (
    <Grid container spacing={2} style={{ height: '100%', overflow: 'hidden' }}>
      {/* Left side with YouTube player */}
      <Grid spacing={2} item xs={12} sm={8} >
        <YouTubePlayer videoId={videoId} />
        <div
          style={{
            overflowY: 'auto',
            maxHeight: '100%',
            backgroundColor: '#333333',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <Typography
              variant="h6"
              style={{
                marginBottom: '16px',
                color: '#FFFFFF',
                fontFamily: 'Arial',
                fontWeight: 'bold',
              }}
            >
              {movieDetails.title}
            </Typography>

            <Typography
              variant="body1"
              style={{
                marginTop: '16px',
                color: '#FFFFFF',
                fontFamily: 'Arial',
                fontWeight: 'bold',
              }}
            >
              Overview: {movieDetails.overview}
            </Typography>
            <Typography
              variant="body1"
              style={{
                marginTop: '16px',
                color: '#FFFFFF',
                fontFamily: 'Arial',
                fontWeight: 'bold',
              }}
            >
              Release Date: {movieDetails.release_date}
            </Typography>
            <Typography
              variant="body1"
              style={{
                marginTop: '16px',
                color: '#FFFFFF',
                fontFamily: 'Arial',
                fontWeight: 'bold',
              }}
            >
              Genre:{' '}
              {movieDetails.genres.map((genre) => (
                <span style={{ margin: '0 5px' }} key={movieDetails.id}>
                  {genre.name}
                </span>
              ))}
            </Typography>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '16px',
              }}
            >
              <Visibility
                style={{ marginRight: '8px', color: '#FFFFFF' }}
              />
              <Typography
                variant="body1"
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'Arial',
                }}
              >
                {movieDetails.vote_count}
              </Typography>
              <Star
                style={{ marginLeft: '16px', marginRight: '8px', color: '#FFFFFF' }}
              />
              <Typography
                variant="body1"
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'Arial',
                }}
              >
                {movieDetails.vote_average}
              </Typography>
            </div>
          </div>
        </div>
      </Grid>

      {/* Right side with movie details */}
      <Grid item xs={12} sm={4}>
        <div
          style={{
            overflowY: 'auto',
            maxHeight: '100%',
            backgroundColor: '#333333',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <CardMedia
              component="img"
              sx={{ height: '35%', objectFit: 'contain' }}
              image={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
            <Typography
              variant="body1"
              style={{
                marginTop: '16px',
                color: '#FFFFFF',
                fontFamily: 'Arial',
                fontWeight: 'bold',
              }}
            >
              Tag-line: {movieDetails.tagline}
            </Typography>
            <Typography
              variant="body1"
              style={{
                marginTop: '16px',
                color: '#FFFFFF',
                fontFamily: 'Arial',
                fontWeight: 'bold',
              }}
            >
                Status: {movieDetails.status}
            </Typography>
            <Typography
              variant="body1"
              style={{
                marginTop: '16px',
                color: '#FFFFFF',
                fontFamily: 'Arial',
                fontWeight: 'bold',
              }}
            >
              Countries:{' '}
              {movieDetails.production_countries.map((production_countries) => (
                <span style={{ margin: '0 5px' }} key={movieDetails.id}>
                  {production_countries.name}
                </span>
              ))}
            </Typography>
            <Typography
              variant="body1"
              style={{
                marginTop: '16px',
                color: '#FFFFFF',
                fontFamily: 'Arial',
                fontWeight: 'bold',
              }}
            >
                Duration: {movieDetails.runtime} Hr
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default DetailsGrid;
