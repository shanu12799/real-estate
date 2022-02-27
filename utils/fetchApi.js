import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '9f4ac49936msh6be36813ac3f316p1a85e6jsne8b02b812022' ,
    },
  });
    
  return data;
}