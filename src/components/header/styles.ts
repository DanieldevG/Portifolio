import styled from "styled-components";

export const Start = styled.header`
    width: 100%;
    height: 70px;
    background-color: transparent;
`;

export const Navegar = styled.nav`
     width: 50%;
`;

export const Lista = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: 700px;
    margin-left: 250px;
`;

export const ItenLista = styled.li`
     font-family: 'Oswald', sans-serif;
    font-size: 21px;
    color: #fff;
    cursor: pointer;

   &:hover{
    color: #D870DB;
   }
`;
