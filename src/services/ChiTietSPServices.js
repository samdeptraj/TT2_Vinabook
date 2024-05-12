import React, { Component } from 'react';
import axios from 'axios';
import { DOMAIN } from '../utils/const/services.const';

export default class ChiTietSPServices {
    getAllChiTietSpAPIService = () => {
        return axios({
            url: `${DOMAIN}/admin/chi-tiet-san-pham/`,
            method: 'GET'
        })
    }
    getChiTietSpAPIServiceUser = (tenSp) => {
        if (tenSp)
            return axios({
                url: `${DOMAIN}/chi-tiet-san-pham?tenSp=${encodeURIComponent(tenSp)}`,
                method: 'GET'
            })
    }
    createChiTietSpAPIService = (data) => {
        return axios({
            url: `${DOMAIN}/admin/chi-tiet-san-pham/`,
            method: 'POST',
            data: data,
            headers: { token: localStorage.getItem('token') }
        })
    }
    deleteChiTietSpAPIService = (id) => {
        return axios({
            url: `${DOMAIN}/admin/chi-tiet-san-pham/${id}`,
            method: 'DELETE',
            data: id,
            headers: {
                token: localStorage.getItem('token')
            }
        })
    }
    updateChiTietSpAPIService = (values, id) => {
        return axios({
            url: `${DOMAIN}/admin/chi-tiet-san-pham/${id}`,
            method: 'PUT',
            data: values,
        })
    }
}
export const chiTietSPServices = new ChiTietSPServices();

