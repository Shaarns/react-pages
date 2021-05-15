import React from 'react';
import Header from './header/Header';
import Home from './Home';
import HomeContent from './HomeContent'
import HomeSubContent from './HomeSubContent';
import HomeSection4 from './HomeSection4';
import Footer from './footer/Footer';

export default function HomeView() {
  return (
    <div>
      <Header />
      <Home />
      <HomeContent />
      <HomeSubContent />
      <HomeSection4 />
      <Footer />
    </div>
  )
}
