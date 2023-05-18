import axios from 'axios';

const axiosServices = axios.create({
	baseURL: process.env.REACT_APP_BASE_API_URL
});

axiosServices.interceptors.response.use(response => {
	return response;
}, error => {
	const { pathname } = window.location;
	if (error.response.status === 401 && pathname !== '/login') {
		localStorage.removeItem("serviceToken");
		window.location.href = "/login";		
	}
	return error.response;
});

export default axiosServices;