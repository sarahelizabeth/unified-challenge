import axios from 'axios';

// import { getAuth } from '@/utils/api';
import { API_URL, TOKEN_STRING } from './constants';

export const getPostList = async (limit: number, cursor: string) => {
  try {
    const response = axios
      .get(API_URL + '/feed?limit=' + limit + (cursor !== '' ? '&cursor=' + cursor : ''), {
        headers: {
          Authorization: `Bearer ${TOKEN_STRING}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
    return response;
  } catch {
    throw new Error('error post list');
  }
};

export const getPost = (id: string) => {
  try {
    const response = axios
      .get(`${API_URL}/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${TOKEN_STRING}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log(response.data);
        console.log(response.data.author);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return response;
  } catch {
    throw new Error('error post');
  }
};
