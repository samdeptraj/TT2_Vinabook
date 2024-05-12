import axios from 'axios';
import { DOMAIN } from '../utils/const/services.const';

export default class NguoiDungServices {
    async login(user) {
        try {
            return await axios({
                url: `${DOMAIN}/admin/nguoi-dung/login`,
                method: 'POST',
                data: user
            })
        } catch (error) {
            console.error('Error during login:', error);
            throw error; // Rethrow the error to propagate it furth
        }
    }
    async signup(user) {
        try {
            return await axios({
                url: `${DOMAIN}/admin/nguoi-dung/register`,
                method: 'POST',
                data: user
            })
        } catch (error) {
            console.error('Error during signup:', error);
            throw error; // Rethrow the error to propagate it further
        }
    }
    async getAllUserAPIService() {
        try {
            return await axios({
                url: `${DOMAIN}/admin/nguoi-dung/`,
                method: 'GET',
            })
        } catch (error) {
            console.error('Error during signup:', error);
            throw error; // Rethrow the error to propagate it further
        }
    }
    async getUserAPIService(id) {
        try {
            return await axios({
                url: `${DOMAIN}/admin/nguoi-dung/${id}`,
                method: 'GET',
            })
        } catch (error) {
            console.error('Error: ', error);
            throw error; // Rethrow the error to propagate it further
        }
    }
    async updateUserAPIService(newUser, id) {
        try {
            return await axios({
                url: `${DOMAIN}/admin/nguoi-dung/${id}`,
                method: 'PUT',
                data: newUser
            })
        } catch (error) {
            console.error('Error during signup:', error);
            throw error; // Rethrow the error to propagate it further
        }
    }
    async deleteUserAPIService(id) {
        try {
            return await axios({
                url: `${DOMAIN}/admin/nguoi-dung/${id}`,
                method: 'DELETE',
            })
        } catch (error) {
            console.error('Error during signup:', error);
            throw error; // Rethrow the error to propagate it further
        }
    }
}
export const nguoiDungServices = new NguoiDungServices();