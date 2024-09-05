import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import './style/VideoThumbnails.css'; // Import your custom CSS file

const VideoThumbnails = () => {
  const history = useHistory();

  const handleVideoClick = (videoId) => {
    // Redirect to video player page with video ID as a URL parameter
    history.push(`/video/${videoId}`);
  };

  return (
    <div className="video-thumbnails-container">
      <Card onClick={() => handleVideoClick('VIDEO_ID_1')} className="video-thumbnail">
        <CardMedia
          component="img"
          height="140"
          image="https://img.youtube.com/vi/VIDEO_ID_1/hqdefault.jpg"
          alt="Video Thumbnail 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Video Title 1
          </Typography>
        </CardContent>
      </Card>
      <Card onClick={() => handleVideoClick('VIDEO_ID_2')} className="video-thumbnail">
        <CardMedia
          component="img"
          height="140"
          image="https://img.youtube.com/vi/VIDEO_ID_2/hqdefault.jpg"
          alt="Video Thumbnail 2"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Video Title 2
          </Typography>
        </CardContent>
      </Card>
      {/* Add more video thumbnails here */}
    </div>
  );
};

export default VideoThumbnails;
