import React from "react";
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import { SearchBar, VideoDetail, VideoList } from "./components";
import dotenv from "dotenv";
dotenv.config();

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount() {
    this.handleSubmit('Global Warming');
  }

  handleSubmit =  async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: process.env.React_App_Youtube_Api,
        q: searchTerm,
      },
    });
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  render (){
    const { selectedVideo, videos } = this.state;
    return (
      <Grid justifyContent="center" container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };
};

export default App;
