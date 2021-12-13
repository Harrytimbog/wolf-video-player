import React from "react";
import VideoItem from "./VideoItem";

import { Grid } from '@material-ui/core';

const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} video={video} key={id} /> )
  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  );
}

export default VideoList
