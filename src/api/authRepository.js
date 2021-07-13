import api from '../services/httpClient';
import { LOGIN_ENDPOINT, REGISTER_ENDPOINT } from '../helpers/apiConsts';

export const login = async(data) => {
    try {
        const response = await api.post(LOGIN_ENDPOINT, data);
        return response.data;
    } catch (error) {
        console.log(error);
        return {};
    }
}

export const register = async(data) => {
    try {
        const response = await api.post(REGISTER_ENDPOINT, data);
        return response.data;
    } catch (error) {
        console.log(error);
        return {};
    }
}