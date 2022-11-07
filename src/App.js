import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Box} from '@mui/material'
import { Navbar,ChannelDetail,VideoDetail,SearchFeed,Feed } from "./components/Index";
function App() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:"#000"}}>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Feed></Feed>}></Route>
        <Route path="/videos/:id" element={<VideoDetail></VideoDetail>}></Route>
        <Route path="/channel/:id" element={<ChannelDetail></ChannelDetail>} ></Route>
        <Route path="/search/:searchTerm" element={<SearchFeed></SearchFeed>}></Route>
      </Routes>
    </Box>
    </BrowserRouter>
  );
}

export default App;
