import React from 'react'
import {Stack} from '@mui/material'
import { categories } from '../utils/constant'
import './css/index.css'
export default function Sidebar({selectedCategory,setSelectedCategory}) {
  return (
        <Stack direction='row'sx={{overflowY:'auto',height:{sx:'auto',md:'95%'},flexDirection:{md:'column'}}} >

            {categories.map((ele,id)=>{
                return <button key={id} onClick={()=> setSelectedCategory(ele.name)} on style={{
                    background:ele.name=== selectedCategory && '#FC1503',                //Here we use && to directly shows the red color without ternary operator
                    color:'white' 
                }} className='category-btn'>
                    <span style={{color:ele.name===selectedCategory?'white':'red',marginRight:'15px'}}>{ele.icon}</span>
                    <span style={{opacity:ele.name===selectedCategory?'1':'0.8'}}>{ele.name}</span>
                </button>
            })}
        </Stack>
  )
}
