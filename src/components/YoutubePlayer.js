import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId }) => {
  const opts = {
    height: '100%', 
    width: '100%', 
    playerVars: {
      autoplay: 0, 
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
