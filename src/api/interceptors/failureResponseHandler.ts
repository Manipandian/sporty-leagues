import axios, { AxiosError } from "axios";



// Interceptor to handle failure responses from the api,
// It can be user to throw a banner message to the user based on the error code or message
export const failureResponseHandler = (error: AxiosError) => {
    console.error(error);
    return Promise.reject(error);
}

axios.interceptors.response.use(undefined, failureResponseHandler);