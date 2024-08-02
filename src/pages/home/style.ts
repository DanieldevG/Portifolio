import styled from "styled-components";
import { keyframes } from 'styled-components';
interface BackgroundProps {
    backgroundImage: string;
  }

export const Container = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Background = styled.div<BackgroundProps>`
  width: 100%;
  height: 700px; /* Defina a altura conforme necessário */
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
  background-attachment: fixed;
  background-repeat: no-repeat;
  padding-top: 10px;
`;

export const Titulo = styled.h1`
    font-family: 'Oswald', sans-serif;
    color: #fff;
    font-size: 60px;
    margin-left: 250px;
    margin-top: 200px;
`;

export const Img = styled.svg`
    width: 60px;
    height: 172px;
    bottom: 20px;
`;

const arrow = keyframes`
  0% { opacity: 0; }
  40% { opacity: 1; }
  80% { opacity: 0; }
  100% { opacity: 0; }
`;


export const CaminhoPrimeiro = styled.path`
  stroke: #fff;
  stroke-width: 2;
  fill: none;
  animation: ${arrow} 2s infinite; /* Definindo a animação */
  animation-delay: -1s; /* Adicionando o atraso */
  -webkit-animation: ${arrow} 2s infinite;
  -webkit-animation-delay: -1s;
`;

export const CaminhoSegundo = styled.path`
  stroke: #fff;
  stroke-width: 2;
  fill: none;
  animation: ${arrow} 2s infinite; /* Definindo a animação */
  animation-delay: -0.5s; /* Adicionando o atraso */
  -webkit-animation: ${arrow} 2s infinite;
  -webkit-animation-delay: -0.5s;
`;

export const CaminhoTerceiro = styled.path`
  stroke: #fff;
  stroke-width: 2;
  fill: none;
  animation: ${arrow} 2s infinite; /* Definindo a animação */
  animation-delay: 0s; /* Adicionando o atraso */
  -webkit-animation: ${arrow} 2s infinite;
  -webkit-animation-delay: 0s;
`;

export const Setas = styled.div`
  position: absolute;
  bottom: 5px; /* Ajuste conforme necessário */
  left: 50%;
  top: 540px;
  transform: translateX(-50%);
`;

