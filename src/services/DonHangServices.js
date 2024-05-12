import React, { Component } from 'react'
import axios from 'axios'
import { DOMAIN } from '../utils/const/services.const';

export default class DonHangServices {
    getAllDonHangAPIService = () => {
        return axios({
            url: `${DOMAIN}/admin/don-hang/`,
            method: 'GET',
        })
    }
    getAllDonHangCuaToiAPIService = (maNguoiDung) => {
        return axios({
            url: `${DOMAIN}/don-hang/don-hang-cua-toi`,
            method: 'GET',
            headers: {
                maNguoiDung
            }
        })
    }
    createDonHangAPIService = (maDonHang) => {
        return axios({
            url: `${DOMAIN}/don-hang/`,
            method: 'POST',
            data: maDonHang,
        })
    }
    deleteSanPhamAPIService = (id) => {
        return axios({
            url: `${DOMAIN}/gio-hang/${id}`,
            method: 'DELETE',
            data: id,
        })
    }
    updateDonHangAPIService = (id, status) => {
        return axios({
            url: `${DOMAIN}/admin/don-hang/${id}`,
            method: 'PUT',
            data: {id, status}
        })
    }
}
export const donHangServices = new DonHangServices();
