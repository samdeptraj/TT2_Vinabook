import React, { Component } from 'react'
import axios from 'axios'
import { DOMAIN } from '../utils/const/services.const'

export default class GioHangServices {
    getAllSpGioHangAPIService = (maNguoiDung) => {
        return axios({
            url: `${DOMAIN}/gio-hang/`,
            method: 'GET',
            headers: {
                maNguoiDung
            }
        })
    }
    createSpGioHangAPIService = (data) => {
        return axios({
            url: `${DOMAIN}/gio-hang/`,
            method: 'POST',
            data: data,
        })
    }
    deleteSanPhamGioHangAPIService = (id) => {
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
export const gioHangServices = new GioHangServices();
