import React from "react";
import { Stack, Box } from "@mui/material";

import { ChanelCard, VideoCard } from "./Index";
import Loader from "./Loader";

const Videos = ({ videos}) => {
  if(!videos?.length) return <Loader />;
  return (
    <Stack sx={{flexDirection:{sm:'column',md:'row'},alignItems:{sm:'center',md:'start'}}} flexWrap="wrap"    justifyContent="center"  gap={2}>
     {videos.map((item,idx)=>{
      return (
      <Box key={idx}>
        {item.id.channelId&& <ChanelCard channelDetail={item} />}
        {item.id.videoId && <VideoCard video={item} /> }
        
    </Box>)
     })}
    </Stack>
  );
}

export default Videos;