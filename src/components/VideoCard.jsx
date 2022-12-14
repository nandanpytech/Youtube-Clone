import React from 'react'
import {Link} from 'react-router-dom';
import { Typography,Card,CardContent,CardMedia} from "@mui/material";
import {CheckCircle} from '@mui/icons-material'

import { demoChannelUrl,demoThumbnailUrl,demoVideoUrl,demoVideoTitle,demoChannelTitle } from '../utils/constant';

export default function VideoCard({video:{id:{videoId},snippet}}) {
  return (
    <Card sx={{width:{md:'320px',xs:'320px'},boxShadow:'none',margin:'auto',borderRadius:'none'}}>
      <Link to={videoId? `/videos/${videoId}`:demoVideoUrl}>
      <CardMedia image={snippet?.thumbnails?.high?.url}
      alt={snippet?.title}
      sx={{width:320,height:180}}
      >

      </CardMedia>
      </Link>

      <CardContent sx={{backgroundColor:'#1e1e1e',height:'106px'}}>
      <Link to={videoId? `/videos/${videoId}`:demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId? `/channel/${snippet?.channelId}`:demoChannelUrl}>
        <Typography variant="subtitle2" fontWeight="bold" color="gray">
          {snippet?.channelTitle|| demoChannelTitle}
          <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}}></CheckCircle>
        </Typography>
      </Link>
      </CardContent>
    </Card>
  )
}
