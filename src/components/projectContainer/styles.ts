import styled from "styled-components";
import { css } from 'styled-components';
interface FundoProps{
    backgroundFundo?: string;
    reverse?: boolean;
}

export const ContainerProject = styled.div<FundoProps>`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.backgroundFundo});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const ProjectContent = styled.div`
    width: 75%;
    height: 80%;
    display: grid;
    grid-template-rows: repeat(1fr, 3);
    margin-bottom: 120px;
`;

export const PositionContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const ProjectCard = styled.div<FundoProps>`
    width: 700px;
    height: 200px;
    background-color: black;
    box-shadow: 10px 10px 5px black;
    border-radius: 8px;
    display: flex;
    align-items: center;
    ${(props) => props.reverse && css`
    flex-direction: row-reverse; /* Alinha imagem à direita e texto à esquerda */
  `}
`;

export const ImageCard = styled.img<FundoProps>`
    width: 250px;
    height: auto;
    position: relative;
    border-radius: 8px;
    right: 20px;
    top: 40px;
    margin-right: 20px; /* Espaço entre a imagem e o texto */
    margin-bottom: 60px;

    ${(props) => props.reverse && css`
    margin-right: 0;
    margin-left: 20px; /* Espaço para o layout reverso */
  `}
`;

export const TextProject = styled.p`
    color: white;
    font-family: 'Oswald', sans-serif;
    margin: 0;
`;
// parou no 6.23