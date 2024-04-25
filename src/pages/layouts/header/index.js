import React from 'react'
import HeaderTop from './component/headerTop/HeaderTop'
import HeaderMain from './component/headerMain/HeaderMain'
import HeaderBottom from './component/headerBottom/HeaderBottom'
import ModalSignin from '../../signupPage/ModalSignin'

export default function Header() {
  return (
    <div className='container-fuild'>
        <HeaderTop/>
        <HeaderMain/>
        <ModalSignin/>
        <HeaderBottom/>
    </div>
  )
}
