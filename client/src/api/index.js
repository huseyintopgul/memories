import axios from 'axios';


const url = 'http://localhost/5173/posts';

export const fetchPosts = () => axios.get(url);
