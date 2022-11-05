import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Paper,IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <Paper component="form" onSubmit={()=>{}} 
    sx={{borderRadius:20,
        border:"1px solid #e3e3e3", 
        pl:2,boxShadow:"none",
        mr:{sm:5}}}
        >
        <input className='search-bar' placeholder='Search...' type="text" n
        ame="" id=""
        onChange={()=>{}} />

        <IconButton type="submit" sx={{p:'10px',color:'red'}}>
            <SearchIcon></SearchIcon>
        </IconButton>
            
        </Paper>
  )
}
