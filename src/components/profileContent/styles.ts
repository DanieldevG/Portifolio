import styled from "styled-components";

interface FotoProps{
    backgroundImg: string
}

export const ContainerSegundo = styled.div<FotoProps>`
    color: #333;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${props => props.backgroundImg});
    background-size: cover;
    background-position: center;
    position: relative;
    background-attachment: fixed;
    background-repeat: no-repeat;
`;

export const ProfileContainer = styled.div`
    width: 30%;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    background: #fff;
    padding: 30px;
    border-radius: 8px;
`;

export const CardImg = styled.img`
    width: 160px;
    height: 200px;
    border-radius: 50%;
    border: 4px solid #D870DB;
    object-position: center;
`;

export const Nome = styled.span`
    font-family: 'Oswald', sans-serif;
    font-size: 21px;
    margin-top: 15px;
`;

export const Text = styled.span`
    font-family: 'Oswald', sans-serif;
    font-size: 17px;
    text-align: center;
    width: 80%;
    margin-top: 10px;
`;

export const Button = styled.button`
    width: 150px;
    height: 50px;
    border-radius: 15px;
    border: none;
    background-color: #D870DB;
    color: #fff;
    font-family: 'Oswald', sans-serif;
    margin-top: 35px;
    cursor: pointer;
`;

export const Divisao = styled.hr`
    border: none;
  border-top: .5px solid #bfbfbf; /* Altere a cor conforme necessário */
  margin: 20px 0; /* Espaçamento acima e abaixo da linha */
  width: 100%; /* Altere a largura conforme necessário */
`;

export const ImagensContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`;

export const ImgIcon = styled.img`
      width: 80px;
      height: auto;
`;

export const TextInfo = styled.p`
    width: 430px;
    font-family: 'Oswald', sans-serif;
    color: #fff;
    font-size: 17px;
    margin-left: 100px;
`;

