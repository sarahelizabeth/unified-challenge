import axios from 'axios';

import { getAuth } from '@/utils/api';

const API_URL = 'https://api.dev.unified.community/v1';
const TOKEN_STRING =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhY2NvdW50OjYzNyIsInNjb3BlcyI6IiIsImF1ZCI6Imh0dHBzOi8vYXBpLmRldi51bmlmaWVkLmNvbW11bml0eSIsImV4cCI6MTcyODMyMzE3MiwiaWF0IjoxNzIwNTQ3MTcyLCJpc3MiOiJodHRwczovL2F1dGguZGV2LnVuaWZpZWQuY29tbXVuaXR5IiwianRpIjoiM2ExYTBlYjNhODM4NGFmMWI5OGUxNTU3YWYzOGEzMzgifQ.RSR-ieE4Eeh3tDvKkGPrahk74_qHGEZZGdOhXwmgDARdAHp5C-XKunQ0s9V-N_omSNJaflY-zqk71VKKxgl0l-PxmwSLJ56g2HfRQu6u3NuYc2VA2ahMOTnnfmwkHsydFcVgx6kijWOPbKpS4NmYL356EqL5kgPUw0rbz2k7fgcGe6QBKXgYrCdNS303zgpxJOpogU36cXsQTRalYXy4aUwpwvsVPwO_A1oB8PwrDjh7J6X87fCwL1ivli7uQWWdKwgG4ChYAjH9lKBuRoHn-QlM_Rd_mXR1e6tVrfzA1IJQJ8x6vuvL-EvpzmlTbb32-i95N9r0PafnosVCTqZEQQ';

export const fetchData = async (url, options = {}) => {
  const token = await getAuth();
  console.log('TOKEN', token);
  axios
    .get(`${API_URL}/feed?limit=5`, {
      headers: {
        Authorization: `Bearer ${TOKEN_STRING}`,
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const fetchPost = (id) => {
  axios
    .get(`${API_URL}/posts/${id}`, {
      headers: {
        Authorization: `Bearer ${TOKEN_STRING}`,
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log(response.data);
      console.log(response.data.author);
    })
    .catch((error) => {
      console.log(error);
    });
};
