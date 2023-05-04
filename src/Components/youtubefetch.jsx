import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Link, Routes } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  Typography,
  IconButton,
  Button,
  Card,
  Grid,
  Item,
} from "@material-ui/core";
import theme from "../CssAndThemes/theme";
import  "../CssAndThemes/youtubecss.css";
const YoutubeFetch = () => {
  const [videos, setVideos] = useState([]);
  //don't leave use effect with out the fucntion inside of it
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const options = {
          method: "GET",
          url: `https://www.googleapis.com/youtube/v3/search?key=`+process.env.REACT_APP_GOOGLE_API_KEY+`&channelId=`+process.env.REACT_APP_YOUTUBE_CHANNEL_DPC+`&part=snippet,id&order=date&maxResults=6`,
          
        };
        const result = await axios(options);
        setVideos(result.data.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideos();
  }, []);
  
  return (
     <MuiThemeProvider theme={theme}>
   
      <div class="main">
      <ul class="cards">
        {videos.map((video, index) => (
        //   <Grid item xs={2} sm={4} md={4} key={index}>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <iframe
                    width="360"
                    height="220"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    title={video.snippet.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div class="card_content">
                  <h2 class="card_title">{video.snippet.title.substring(0,20)}</h2>
                  <p class="card_text">{video.snippet.description.substring(0,40)+"..."}</p>
                  {/* <button class="btn card_btn">Read More</button> */}
                </div>
              </div>
            </li>
            /* <Card
              style={{ padding: 20, minHeight: 400 }}
              key={video.id.videoId}
            >
              <h3>{video.snippet.title}</h3>
              <p>{video.snippet.description}</p>
              <iframe
                width="360"
                height="215"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Card> */
        //   </Grid>
        ))}
         </ul>
         </div>
      
     </MuiThemeProvider>
  );
};
export default YoutubeFetch;
