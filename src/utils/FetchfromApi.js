import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
  
const options = {
    params: {
      maxResults: 50,
    },
    headers: {
      'X-RapidAPI-Key':'469a6991a6msh24a065c862cc5fcp17671cjsn38a9ca1d2267' ,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  };
  
  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };