import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/home-background.jpg'; // Certifique-se de adicionar suas imagens na pasta 'assets'
import welcomeImage from '../assets/welcome.jpg'; // Outra imagem de boas-vindas
import logo from '../assets/logo.png'; // Logo da pousada
import { FaBars, FaTimes } from 'react-icons/fa';
import praiaImage from '../assets/galllery7.jpg'; // Outra imagem de boas-vindas

const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  color: #333;
  text-align: center;
  padding: 20px;
`;

const WelcomeImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const HomeTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const HomeText = styled.p`
  font-size: 1.2em;
  margin: 0 auto;
  max-width: 800px;
`;

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  background-image: url(${backgroundImage});
  
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 50px;
  margin-left: 20px;
`;

const Navbar = styled.nav`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 250px;
    background-color: #ffff;
  
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavItem = styled.li`
  margin: 0 15px;

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #f0a500;
  }
`;

const HamburgerIcon = styled(FaBars)`
  display: none;
  cursor: pointer;
  margin-right: 20px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseIcon = styled(FaTimes)`
  display: none;
  cursor: pointer;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: block;
  }
`;


function Pinheira() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    <HomeSection>
      <HeaderContainer>
        <Logo src={logo} alt="Pousada Pinheira Logo" />
        <HamburgerIcon onClick={() => setMenuOpen(true)} />
        <Navbar open={menuOpen}>
          <CloseIcon onClick={() => setMenuOpen(false)} />
          <NavList>
            <NavItem>
              <NavLink href="/">Home</NavLink>
              
            </NavItem>
            <NavItem>
              <NavLink href="/about">Sobre</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/accommodations">Acomodações</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/beaches">Praias</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/breakfast">Café da Manhã</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/gallery">Fotos</NavLink>
            </NavItem>
            <NavItem>
       
            </NavItem>
          </NavList>
          
        </Navbar>
        
      </HeaderContainer>
      
      
      <NavLink href="/contact">
     
      </NavLink>
     
      <WelcomeImage src={welcomeImage} alt="Bem-vindo à Pousada Pinheira"  />
      
      <HomeTitle>Pinheira</HomeTitle>
      
     
      <HomeText>
      
      

     

A praia da pinheira está localizada no município de Palhoça – SC e fica a aproximadamente 50km ao sul de Florianópolis, uma localidade de pescadores artesanais que até hoje mantém  a tradição da pesca da tainha que passa de pai para filho.<p></p>
 
Durante a temporada a localidade é freqüentada por famílias de diversas regiões do Brasil e America do Sul que procuram tranqüilidade e hospitalidade dos moradores e comerciantes da Praia. <p></p>Conta com uma boa infra-estrutura turística onde podemos encontrar com facilidade bares, restaurantes, farmácias, supermercados e pousadas, há inclusive um posto de saúde que atende os turistas e moradores.  <p></p>

A região demonstra grande diversidade em suas praias, na maioria encontramos águas claras e calmas, mas para os aventureiros e amantes de esportes é possível encontrar locais adequados para o Surf, Windsurf, mergulho, natação e etc.<p></p>
 <p></p>
      </HomeText>

      
      <WelcomeImage src={praiaImage} alt="Bem-vindo à Pousada Pinheira"  />
    </HomeSection>

    
  );
}

export default Pinheira;
