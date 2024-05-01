import React, { Component } from 'react'
import axios from 'axios'
import { DOMAIN } from '../utils/const/services.const';

export default class DonHangServices {
    getAllSpGioHangAPIService = (maNguoiDung) => {
        return axios({
            url: `${DOMAIN}/gio-hang/`,
            method: 'GET',
            headers: {
                maNguoiDung
            }
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
    updateSpGioHangAPIService = (data) => {
        return axios({
            url: `${DOMAIN}/gio-hang/`,
            method: 'PUT',
            data
        })
    }
}
export const donHangServices = new DonHangServices();
