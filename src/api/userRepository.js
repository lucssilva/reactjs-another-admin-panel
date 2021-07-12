import api from '../services/httpClient';
import { USERS_ENDPOINT } from '../helpers/apiConsts';

export const fetchUser = async (userId) => {
    try {
        const response = await api.get(`${USERS_ENDPOINT}/${userId}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return {};
    }
}

export const createUser = async (user) => {
    try {
        const response = await api.post(USERS_ENDPOINT, user);
        return response.data;
    } catch (error) {
        console.log(error);
        return {};
    }
}

export const retrieveUsers = async () => {
    try {
        const response = await api.get(USERS_ENDPOINT);
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const updateUser = async (user) => {
    try {
        const response = await api.put(`${USERS_ENDPOINT}/${user.id}`, user);
        return response.data;
    } catch (error) {
        console.log(error);
        return {};
    }
};

export const deleteUser = async (userId) => {
    try {
        await api.delete(`${USERS_ENDPOINT}/${userId}`);
        return userId;
    } catch (error) {
        console.log(error);
        return 0;
    }
};
