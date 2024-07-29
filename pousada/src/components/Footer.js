import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/container-bg.jpg'; // Certifique-se de adicionar suas imagens na pasta 'assets'

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  background-image: url(${backgroundImage});
  padding: 10px 0;
  text-align: center;
  border-top: 1px solid #e7e7e7;
  color: #e7e7e7;
`;

const FooterText = styled.p`
  margin: 0;
`;

function Footer() {
  return (
    <FooterContainer>
        <FooterText> Rua das Gaivotas n 283, Praia de cima - Pinheira - Palhoça - SC. </FooterText>
      <FooterText>&copy; 2024 Pousada Pinheira. Todos os direitos reservados.</FooterText>
    </FooterContainer>
  );
}

export default Footer;
