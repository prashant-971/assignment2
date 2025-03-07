// Import axios to make HTTP requests
import axios from 'axios';

// Base URL for our API endpoints
const API_BASE_URL = 'https://assignment3-iczh.onrender.com/api';

// Function to fetch greeting by name from our API
export const getGreeting = async (name) => {
  try {
    // Send a GET request to the '/greet' endpoint with the name as a query parameter
    const response = await axios.get(`${API_BASE_URL}/greet`, {
      params: { name }
    });
    // Return the response data 
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : { error: "Fetch failed" };
  }
};
