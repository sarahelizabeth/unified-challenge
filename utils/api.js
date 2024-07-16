import axios from 'axios';

const API_URL = 'https://api.dev.unified.community/v1';
const TOKEN_STRING =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhY2NvdW50OjYzNyIsInNjb3BlcyI6IiIsImF1ZCI6Imh0dHBzOi8vYXBpLmRldi51bmlmaWVkLmNvbW11bml0eSIsImV4cCI6MTcyODMyMzE3MiwiaWF0IjoxNzIwNTQ3MTcyLCJpc3MiOiJodHRwczovL2F1dGguZGV2LnVuaWZpZWQuY29tbXVuaXR5IiwianRpIjoiM2ExYTBlYjNhODM4NGFmMWI5OGUxNTU3YWYzOGEzMzgifQ.RSR-ieE4Eeh3tDvKkGPrahk74_qHGEZZGdOhXwmgDARdAHp5C-XKunQ0s9V-N_omSNJaflY-zqk71VKKxgl0l-PxmwSLJ56g2HfRQu6u3NuYc2VA2ahMOTnnfmwkHsydFcVgx6kijWOPbKpS4NmYL356EqL5kgPUw0rbz2k7fgcGe6QBKXgYrCdNS303zgpxJOpogU36cXsQTRalYXy4aUwpwvsVPwO_A1oB8PwrDjh7J6X87fCwL1ivli7uQWWdKwgG4ChYAjH9lKBuRoHn-QlM_Rd_mXR1e6tVrfzA1IJQJ8x6vuvL-EvpzmlTbb32-i95N9r0PafnosVCTqZEQQ';

const formData = new FormData();

formData.append('grant_type', 'password');
formData.append('username', 'codingchallenge@example.com');
formData.append('password', 'DD!!J2fzCtHDnPYAJytEP6G2@$');

export const getAuth = () => {
  console.log('here');
  axios({
      method: 'post',
      url: API_URL,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then(function (response) {
      console.log('success +++++++++++++ ', response.data.access_token);
      // return response.data.access_token;
    })
    .catch(function (error) {
      console.log('error =========== ');
      // return error;
    });

};
