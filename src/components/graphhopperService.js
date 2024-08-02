import axios from 'axios';

const GRAPH_HOPPER_API_KEY = '41fb8fef-8a4f-45ce-9e55-4fb378d83da2';
const BASE_URL = 'https://graphhopper.com/api/1/route?point=48.8566,2.3522&point=51.5074,-0.1278&vehicle=car&key=41fb8fef-8a4f-45ce-9e55-4fb378d83da2';

export const getRoute = async (coordinates) => {
  try {
    const response = await axios.get(`${BASE_URL}/route`, {
      params: {
        point: coordinates.join('|'),
        vehicle: 'car', 
        key: GRAPH_HOPPER_API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching route:', error);
    throw error;
  }
};
