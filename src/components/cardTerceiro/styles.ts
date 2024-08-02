import styled from "styled-components";
import { css } from 'styled-components';
interface TerceiroProps{
    reverse?: boolean;
}

export const PositionCardTres = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const ProjectCard3 = styled.div<TerceiroProps>`
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

export const ImageSegundoCardTres = styled.img<TerceiroProps>`
    width: 250px;
    height: auto;
    position: relative;
    border-radius: 8px;
    right: 20px;
    top: 40px;
    margin-right: 20px; /* Espaço entre a imagem e o texto */
    margin-bottom: 70px;

    ${(props) => props.reverse && css`
    margin-right: 0;
    margin-left: 20px; /* Espaço para o layout reverso */
  `}
`;

export const TextCard3 = styled.p`
    color: white;
    font-family: 'Oswald', sans-serif;
    margin: 0;
`;