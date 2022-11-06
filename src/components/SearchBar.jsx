import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Paper,IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  const [searchItem, setsearchItem] = useState('')

  const navigate=useNavigate()

  const handlesubmit=(e)=>{
    e.preventDefault();

    if(searchItem){
      console.log(searchItem)
      navigate(`/search/${searchItem}`)
      setsearchItem('')
    }
  }
  return (
    <Paper component="form" onSubmit={handlesubmit} 
    sx={{borderRadius:20,
        border:"1px solid #e3e3e3", 
        pl:2,boxShadow:"none",
        mr:{sm:5}}}
        >
        <input className='search-bar' placeholder='Search...' type="text" n
        ame="" id="" value={searchItem}
        onChange={(e)=>setsearchItem(e.target.value)} />

        <IconButton type="submit" sx={{p:'10px',color:'red'}}>
            <SearchIcon></SearchIcon>
        </IconButton>
            
        </Paper>
  )
}
