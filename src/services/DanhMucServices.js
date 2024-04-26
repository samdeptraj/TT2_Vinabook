import React, { Component } from 'react';
import axios from 'axios';
import { DOMAIN } from '../utils/const/services.const';

export default class DanhMucServices {
    getAllDanhMucAPIService = () => {
        return axios({
            url: `${DOMAIN}/admin/danh-muc-san-pham/`,
            method: 'GET'
        })
    }
    createDanhMucAPIService = (data) => {
        return axios({
            url: `${DOMAIN}/admin/danh-muc-san-pham/`,
            method: 'POST',
            data: data,
            headers: { token: localStorage.getItem('token') }
        })
    }
    deleteDanhMucAPIService = (id) => {
        return axios({
            url: `${DOMAIN}/admin/danh-muc-san-pham/${id}`,
            method: 'DELETE',
            data: id,
            headers: {
                token: localStorage.getItem('token')
            }
        })
    }
    updateDanhMucAPIService = (tenDanhMuc, id) => {
        return axios({
            url: `${DOMAIN}/admin/danh-muc-san-pham/${id}`,
            method: 'PUT',
            data: tenDanhMuc,
        })
    }
}
export const danhMucServices = new DanhMucServices();
