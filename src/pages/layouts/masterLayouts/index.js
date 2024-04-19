import React from 'react'
import Footer from '../footer'
import Header from '../header'

export default function MasterLayout({ children, ...props }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
