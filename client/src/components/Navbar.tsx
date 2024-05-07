import Wrapper from '../assets/wrappers/NavBar';
import { FaBars } from 'react-icons/fa';
import Logo from './Logo';
import SearchBar from './SearchBar';
import PrimaryButton from './PrimaryButton';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import AuthForm from './AuthForm';

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const [showAuthForm, setShowAuthFrom] = useState<boolean>(false);
  return (
    <Wrapper>
      <FaBars className='menu' />
      <div className='center'>
        <Logo
          onClick={() => {
            navigate('/home');
          }}
        />
        <SearchBar className='search' />
      </div>
      <PrimaryButton
        onClick={() => {
          setShowAuthFrom((prev) => !prev);
        }}
      >
        Sign in
      </PrimaryButton>
      <Modal display={showAuthForm} setDisplay={setShowAuthFrom}>
        <AuthForm
          onCloseBtnClicked={() => {
            setShowAuthFrom(false);
          }}
        />
      </Modal>
    </Wrapper>
  );
};

export default NavBar;
