import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'; // ajuste o caminho conforme a localização da imagem



// Estilos para o menu de navegação
const NavbarContainer = styled.nav`
  width: 100%;
  background-color: #cc6800;
  color: white;
`;

const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const NavTitle = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const DropdownToggle = styled.button`
  display: none;
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinksContainer = styled.div`
  width: 100%;
`;

const NavLinks = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  background-color: #ffc88f;
  width: 100%;

  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const NavLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  padding: 10px 20px;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: #cc6800;
  }

  @media (min-width: 769px) {
    width: auto;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const Header = () => (
  <HeaderContainer>
     <Link to="/">
     <center>
        <Logo src={logo} alt="Pousada Pinheira" />
        </center>
      </Link>

    
  </HeaderContainer>
);
const Logo = styled.img`
  height: 50px; /* Ajuste a altura conforme necessário */
  
`;
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
    
      <NavHeader>
    
      <Link to="/">
     <center>
        <Logo src={logo} alt="Pousada Pinheira" />
        </center>
      </Link>
      
        <DropdownToggle
        
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
        >
          Menu 
          
        </DropdownToggle>
        
      </NavHeader>
     
   
      <NavLinksContainer>
        <NavLinks isOpen={isOpen}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="./Acomodações">Acomodações</NavLink>
          <NavLink to="./About">Sobre</NavLink>
          <NavLink to="/breakfast">Café da Manhã</NavLink>
          <NavLink to="/contact">Contato</NavLink>
        </NavLinks>
      </NavLinksContainer>
    </NavbarContainer>
  );
};

const Logo = styled.img`
  height: 50px; /* Ajuste a altura conforme necessário */
  
`;
export default Navbar;
