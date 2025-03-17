import axiosInstance from './axios';

export const getDailyIntake = async params => {
  try {
    const response = await axiosInstance.get('/api/products/daily-intake', {
      params,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const saveCalorieInfo = async calorieInfo => {
  try {
    const token = localStorage.getItem("token"); 
    if (!token) throw new Error("No authentication token found");
    
    const response = await axiosInstance.post(
      '/api/save-calorie-info',
      calorieInfo,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data || { message: 'Something went wrong'};
  }
};