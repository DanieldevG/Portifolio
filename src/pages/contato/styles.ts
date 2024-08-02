import styled from "styled-components";
interface FormProps{
    backgroundForm: string;
};

export const ContainerContato = styled.div<FormProps>`
    color: #333;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${props => props.backgroundForm});
    background-size: cover;
    background-position: center;
    position: relative;
    background-attachment: fixed;
    background-repeat: no-repeat;
`;

export const ContainerForm = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`; 

export const ButtonScroll = styled.button`
    margin-top: 600px;
    border: none;
    border-radius: 50%;
    background-color: #fff;
    color: #000;
    cursor: pointer;
`;

export const ImageIcon = styled.img`
    width: 30px;
    height: 30px;
`;