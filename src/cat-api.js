import axios from 'axios';

const api_key =
  live_qguOE57bFHy0zBinBqymilsQ4Zv6cGaa7KGoY5Wzs5TOHnWDYy6PACel1FVkpmWm;
axios.defaults.headers.common['x-api-key'] = api_key;

export const fetchBreeds = async () => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    return response.data.map(breed => ({ id: breed.id, name: breed.name }));
  } catch (err) {
    throw new Error('Error loading breeds');
  }
};

export const fetchCatByBreed = async breedId => {
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
    );
    return response.data[0];
  } catch (err) {
    throw new Error('Error loading cat info');
  }
};
