import React from "react";
import styled from "styled-components";
import "../";
import logo from "../assets/logo.png"; // Importe a logo

// Importe suas imagens
import breakfast1 from "../../src/assets/breakfast1.jpg";
import breakfast2 from "../../src/assets/breakfast2.jpg";
import breakfast3 from "../../src/assets/breakfast3.jpg";
import breakfast4 from "../../src/assets/breakfast4.jpg"; // Adicione quantas imagens forem necessárias

// Estilos para o container da galeria e das imagens
const BreakfastContainer = styled.div`
  padding: 20px;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
`;

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 10px; /* Espaçamento entre as imagens */
  overflow-x: auto; /* Permite rolagem horizontal se necessário */
`;

const GalleryImage = styled.img`
  width: 100%;
  max-width: 300px; /* Largura máxima das imagens */
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra para um efeito de profundidade */
`;

const Section = styled.section`
  margin-bottom: 20px;
  font-size: 1.1rem;
`;

const Acomodações = () => (
  <AcomodaçõesContainer>
    <Section>
      <h1>Café da Manhã</h1>
      <p>
        No Café da Manhã da Pousada Pinheira, oferecemos uma seleção deliciosa e
        variada para começar bem o seu dia. Nossa oferta inclui:
      </p>
      <ul>
        <li>Frutas frescas da estação</li>
        <li>Pães e bolos caseiros</li>
        <li>Cafés, chás e sucos naturais</li>
        <li>Opções de queijos e frios</li>
        <li>Pratos quentes como omeletes e tapiocas</li>
      </ul>
      <p>
        Desfrute de um café da manhã acolhedor em um ambiente tranquilo, ideal
        para começar o seu dia de forma especial.
      </p>
    </Section>
    <GalleryContainer>
      <GalleryImage src={breakfast1} alt="Café da Manhã 1" />
      <GalleryImage src={breakfast2} alt="Café da Manhã 2" />
      <GalleryImage src={breakfast3} alt="Café da Manhã 3" />
      <GalleryImage src={breakfast4} alt="Café da Manhã 4" />{" "}
      {/* Adicione mais imagens conforme necessário */}
    </GalleryContainer>
  </AcomodaçõesContainer>
);

const PageContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroSection = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  color: #fff;
  padding: 2rem;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

export default Acomodações;
