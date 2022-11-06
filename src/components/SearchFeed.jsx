import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/FetchfromApi";
import { Videos } from "./Index";


export default function SearchFeed() {
  const [videos,setVideos]=useState([])
  const {searchTerm} = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then(data=>setVideos(data.items))
  }, [searchTerm])
  
  return (
    <Box p={2} sx={{overflowY:'auto',height:'90vh', flex:2}}>
    <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
     Search Results for:<span style={{color:'#F31503'}}>{searchTerm}  videos</span>
    </Typography>
    <Videos videos={videos}></Videos>
  </Box>
  )
}
