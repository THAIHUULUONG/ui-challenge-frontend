import axios from 'axios';

const serviceToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInVzZXJuYW1lIjoidGhhaSBodXUgbHVvbmciLCJlbWFpbCI6InRoYWlodXVsdW9uZ3RkdUBnbWFpbC5jb20iLCJleHAiOjE2ODk0MTcxMzcuNDksImlhdCI6MTY4NDIzMzEzN30.W-7UZw1WfKRiOB963e_dzZjK5CdMlR-JmG19XAG3FGM'

const axiosServices = axios.create({
	baseURL: process.env.REACT_APP_BASE_API_URL,
	headers: {
		'Authorization': `Bearer ${serviceToken}`,
		'Accept': '*',
		'Content-Type': 'application/json; charset=utf-8',
		'Access-Control-Allow-Origin': '*',
		'X-Powered-By': 'Express',
		'Vary':'Origin',
		'Content-Length': '57',
		'ETag': 'W/"39-hSoXpawMxBdbWDSdIEsa1tLUNzc"',
		'Date':'Sat, 18 Feb 2023 10:08:04 GMT',
		'Connection': 'keep-alive',
		'Keep-Alive': 'timeout=5'
	  },
});


axiosServices.interceptors.response.use(response => {
	return response;
}, error => {
	const { pathname } = window.location;
	console.log('error', error);
	
	if (error.response.status === 401 && pathname !== '/login') {
		// localStorage.removeItem("serviceToken");
		window.location.href = "/login";		
	}
	return error.response;
});

export default axiosServices;