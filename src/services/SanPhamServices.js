import React, { Component } from 'react'
import axios from 'axios'

export default class SanPhamServices {
  getAllSanPhamAPIService = () => {
    return axios({
      url: 'http://localhost:3000/admin/san-pham',
      method: 'GET'
    })
  }
  createSanPhamAPIService = (data) => {
    return axios({
      url: 'http://localhost:3000/admin/san-pham/',
      method: 'POST',
      data
    })
  }
  uploadImageSanPhamAPIService = (data) => {
    return axios({
      url: `http://localhost:3000/admin/san-pham/${data}`,
      method: 'POST',
      data
    })
  }
}
export const sanPhamServices = new SanPhamServices();
