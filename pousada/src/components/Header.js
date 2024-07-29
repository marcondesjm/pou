// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background: #fff;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Logo = styled.h1`
  font-size: 24px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
      display: none;
      flex-direction: column;
      width: 100%;
      background: #333;
      position: absolute;
      top: 60px;
      left: 0;
      padding: 10px;
    }
  }

  li {
    display: inline;

    a {
      color: #fff;
      text-decoration: none;
      font-size: 16px;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const MenuIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo>Pousada Pinheira</Logo>
      <MenuIcon onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <Nav>
        <ul style={{ display: isMenuOpen ? 'flex' : 'none' }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/accommodations">Acomodações</Link></li>
          <li><Link to="/packages">Pacotes</Link></li>
          <li><Link to="/breakfast">Café da Manhã</Link></li>
          <li><Link to="/contact">Contato</Link></li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
