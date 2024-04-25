import axios from 'axios';

export default class NguoiDungServices {
    async login(user) {
        try {
            return await axios({
                url: `http://localhost:3000/admin/nguoi-dung/login`,
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
                url: `http://localhost:3000/admin/nguoi-dung/register`,
                method: 'POST',
                data: user
            })
        } catch (error) {
            console.error('Error during signup:', error);
            throw error; // Rethrow the error to propagate it further
        }
    }
}
export const nguoiDungServices = new NguoiDungServices();