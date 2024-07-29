import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #b15a00;
  padding: 10px;
`;

const NavLink = styled(Link)`
  margin: 0 15px;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Menu = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Sobre</NavLink>
      <NavLink to="/accommodations">Acomodações</NavLink>
      <NavLink to="/packages">Pacotes</NavLink>
      <NavLink to="/Breakfast">Café da Manhã</NavLink>
      <NavLink to="/contact">Contato</NavLink>
    </Nav>
  );
};
const Menu1= () => {
  return (
    <MenuContainer>
      <MenuContent>
        <Logo src="/logo192.png" alt="Pousada Pinheira" />
        
        <SocialMedia>
          <SocialLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </SocialLink>
          <SocialLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </SocialLink>
          <SocialLink href="https://api.whatsapp.com/send?l=pt_br&phone=5548999720998&text=Oi,%20estou%20em%20seu%20site%20e%20gostaria%20de%20algumas%20informa%C3%A7%C3%B5es,%20consegue%20me%20ajudar?" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </SocialLink>
        </SocialMedia>
      </MenuContent>
      
    </MenuContainer>
  );
};


export default Menu;Menu1;
