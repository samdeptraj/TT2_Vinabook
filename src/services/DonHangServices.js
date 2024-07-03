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
        console.log('maDonHang: ', maDonHang);
        return axios({
            url: `${DOMAIN}/don-hang/`,
            method: 'POST',
            data: maDonHang,
        })
    }
    deleteDonHangAPIService = (id) => {
        return axios({
            url: `${DOMAIN}/admin/don-hang/${id}`,
            method: 'DELETE',
            data: id,
        })
    }
    updateDonHangAPIService = ({ maDonHang, status }) => {
        console.log(' maDonHang, status : ', maDonHang, status);
        return axios({
            url: `${DOMAIN}/admin/don-hang/${maDonHang}`,
            method: 'PUT',
            data: { id:maDonHang, status }
        })
    }
}
export const donHangServices = new DonHangServices();
