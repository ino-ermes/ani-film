import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SharedLayout';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { FaHome } from 'react-icons/fa';

const SharedLayout: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  return (
    <Wrapper>
      <Sidebar
        show={showSidebar}
        setShow={setShowSidebar}
        items={[{ icon: FaHome, name: 'Home', to: '/home' }]}
      />
      <NavBar onMenuClick={() => setShowSidebar(true)} />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};

export default SharedLayout;
