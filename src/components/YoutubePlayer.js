import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId }) => {
  const opts = {
    height: '100%', // Set height to 100% for responsiveness
    width: '100%', // Set width to 100% for responsiveness
    playerVars: {
      autoplay: 0, // Autoplay the video
    },
  };

  return (
    <div className="youtube-player-wrapper">
      <div className="youtube-player">
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
};

export default YouTubePlayer;
