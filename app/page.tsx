// src/components/Home.jsx or app/page.tsx in Next.js
import React from 'react';
import SubHome from './components/SubHome';
import HeaderNav from './components/HeaderNav';

const Home = () => {
  return (<>
    <HeaderNav />
    <SubHome />
  </>
  );
};

export default Home;
