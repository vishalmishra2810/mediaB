// Import Axios library
import axios from 'axios';

const restClient = axios.create({
  baseURL: 'https://localhost:8080', 
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 3000 
});

export default restClient;
