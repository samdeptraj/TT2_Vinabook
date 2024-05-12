import React, { Component } from 'react'
import axios from 'axios'
import { DOMAIN } from '../utils/const/services.const'

export default class HoaDonDatHangServices {
    getAllHoaDonDatHangAPIService = () => {
        return axios({
            url: `${DOMAIN}/hoa-don-dat-hang/`,
            method: 'GET',
        })
    }
    createHoaDonDatHangAPIService = (data) => {
        return axios({
            url: `${DOMAIN}/hoa-don-dat-hang/`,
            method: 'POST',
            data,
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
export const hoaDonDatHangServices = new HoaDonDatHangServices();
