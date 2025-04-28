import React from "react";
import { Paper, Typography } from "@material-ui/core";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "50vw", maxHeight: "400px" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
          allowFullScreen
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "20px", marginTop: "10px" }}>
        <Typography variant="h6" gutterBottom style={{ fontWeight: 600 }}>
          {video.snippet.title}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="body2" style={{ marginTop: "8px" }}>
          {video.snippet.description}
        </Typography>
      </Paper>
    </React.Fragment>
  );
};

export default VideoDetail;
