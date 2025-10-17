import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '52810682-f1cccaa4d6041835a99124ea2';

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
