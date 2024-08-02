import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #333;
    width: 500px;
    height: 600px;
    padding: 20px;
    border-radius: 8px;
`;

export const Label = styled.label`
    display: block;
    color: #fff;
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    border-radius: 8px;
`;

export const Text = styled.textarea`
    display: block;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    height: 300px;
    min-height: 300px;
    max-height: 300px;
    border-radius: 8px;
`;

export const Button = styled.button`
    width: 100%;
    border: none;
    background-color: #fff;
    color: #333;
    border-radius: 8px;
    padding: 8px 12px;
    margin-top: 50px;
    cursor: pointer;

    &:hover{
        background-color: red;
        color: #fff;
    }
`;

export const P = styled.p`
    color: #fff;
    font-size: 30px;
`;