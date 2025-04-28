import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        elevation={3}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onClick={() => onVideoSelect(video)}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "white")}
      >
        <img
          style={{
            width: "100px",
            height: "70px",
            objectFit: "cover",
            borderRadius: "8px",
            marginRight: "10px",
          }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography variant="subtitle2" noWrap>
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
