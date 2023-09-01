import axios from 'axios';


const url = 'http://localhostÇ5173/posts';

export const fetchPosts = () => axios.get(url);