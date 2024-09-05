import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './style/LatestStories.css'; // Ensure this CSS file exists and is correctly linked

const LatestStories = () => {
  return (
    <div className="latest-stories-section">
      <h2>Latest Stories</h2>
      <div className="latest-stories-carousel">
        <Card className="story-card">
          <img src="https://unsplash.com/photos/a-white-house-with-a-red-tiled-roof-o-nn2Mn4Jlg" alt="Story 1" className="story-image" />
          <CardContent>
            <Typography variant="h5" component="div">
              Story 1
            </Typography>
            <Typography variant="body2">
              A brief description of Story 1.
            </Typography>
          </CardContent>
        </Card>
        <Card className="story-card">
          <img src="https://unsplash.com/photos/a-white-house-with-a-red-tiled-roof-o-nn2Mn4Jlg" alt="Story 2" className="story-image" />
          <CardContent>
            <Typography variant="h5" component="div">
              Story 2
            </Typography>
            <Typography variant="body2">
              A brief description of Story 2.
            </Typography>
          </CardContent>
        </Card>
        <Card className="story-card">
          <img src="https://unsplash.com/photos/Flw7xW7B9gs" alt="Story 3" className="story-image" />
          <CardContent>
            <Typography variant="h5" component="div">
              Story 3
            </Typography>
            <Typography variant="body2">
              A brief description of Story 3.
            </Typography>
          </CardContent>
        </Card>
        <Card className="story-card">
          <img src="https://unsplash.com/photos/6II8T6P1K8s" alt="Story 4" className="story-image" />
          <CardContent>
            <Typography variant="h5" component="div">
              Story 4
            </Typography>
            <Typography variant="body2">
              A brief description of Story 4.
            </Typography>
          </CardContent>
        </Card>
        <Card className="story-card">
          <img src="https://unsplash.com/photos/_C6A4Ht3F5g" alt="Story 5" className="story-image" />
          <CardContent>
            <Typography variant="h5" component="div">
              Story 5
            </Typography>
            <Typography variant="body2">
              A brief description of Story 5.
            </Typography>
          </CardContent>
        </Card>
        {/* Add more story cards as needed */}
      </div>
    </div>
  );
};

export default LatestStories;
