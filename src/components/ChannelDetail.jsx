import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChanelCard } from "./Index";
import { fetchFromAPI } from "../utils/FetchfromApi";


export default function ChannelDetail() {
  const [channelDetail, setchannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  const {id}=useParams()

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then(data=>setchannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then(data=>setVideos(data?.items));
  },[id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',zIndex:10,height:'300px'}}></div>

        <ChanelCard channelDetail={channelDetail} marginTop="-95px"></ChanelCard>
      </Box>
      <Box p={2} display="flex" justifyContent="center">
      <Box  justifyContent="center">
        <Videos videos={videos} />

      </Box>  
      </Box>
    </Box>
  )
}
