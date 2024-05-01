import React, { useEffect } from 'react'
import HeaderTop from './component/headerTop/HeaderTop'
import HeaderMain from './component/headerMain/HeaderMain'
import HeaderBottom from './component/headerBottom/HeaderBottom'
import ModalSignin from '../../signupPage/ModalSignin'
import { jwtDecode } from 'jwt-decode'
import { useDispatch } from 'react-redux'

export default function Header() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      const decodeToken = jwtDecode(token);
      dispatch({
        type: "GET_ALL_SP_GIO_HANG",
        data: decodeToken.maNguoiDung
      })
    }

  }, [dispatch])
  return (
    <div className='container-fuild'>
      <HeaderTop />
      <HeaderMain />
      <ModalSignin />
      <HeaderBottom />
    </div>
  )
}
