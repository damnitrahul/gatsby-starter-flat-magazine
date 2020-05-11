import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import './layout.css';
import { Container } from '../common/style';
function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}

export default Layout;
