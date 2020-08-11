import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import './layout.css'
import {Container} from '../common/style'
import MobileHeader from '../mobile-header/mobile-header'
import {Helmet} from 'react-helmet'

function Layout({children}) {
  return (
    <>
      <Helmet />
      <Header />
      <MobileHeader />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
