import React, { Component } from 'react'
import axios from 'axios'
import { DOMAIN } from '../utils/const/services.const'

export default class SanPhamServices {
  getAllSanPhamAPIService = () => {
    return axios({
      url: `${DOMAIN}/admin/san-pham`,
      method: 'GET'
    })
  }
  getAllSanPhamAPIServiceUser = (tenSp) => {
    if (tenSp) {
      return axios({
        url: `${DOMAIN}/admin/san-pham/user?tenSp=${tenSp}`,
        method: 'GET'
      })
    } else {
      return axios({
        url: `${DOMAIN}/admin/san-pham/user`,
        method: 'GET'
      })
    }
  }
  getSanPhamYetDetailAPIService = () => {
    return axios({
      url: `${DOMAIN}/admin/san-pham/yet-detail`,
      method: 'GET'
    })
  }
  createSanPhamAPIService = (data) => {
    return axios({
      url: `${DOMAIN}/admin/san-pham/`,
      method: 'POST',
      data: data,
      headers: { token: localStorage.getItem('token') }
    })
  }
  deleteSanPhamAPIService = (id) => {
    return axios({
      url: `${DOMAIN}/admin/san-pham/${id}`,
      method: 'DELETE',
      data: id,
      headers: {
        token: localStorage.getItem('token')
      }
    })
  }
  updateSanPhamAPIService = (formData, id) => {
    return axios({
      url: `${DOMAIN}/admin/san-pham/${id}`,
      method: 'PUT',
      data: formData,
    })
  }
}
export const sanPhamServices = new SanPhamServices();
