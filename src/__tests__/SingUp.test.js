import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import SignUp from '../pages/signUp/index.js';

test('Testando se todos os textos na tela de cadastro são exibidos corretamente', async () => {
    const { getByText } = render(<SignUp  navigation={"teste"}/>)

    waitFor(() => getByText('Cadastrar-se'));
    waitFor(() => getByText('Cancelar'));
});

test('Testando os inputs da tela de cadastro', async () => {
    const { getByPlaceholderText } = render(<SignUp navigation={"teste"}/>)

    fireEvent.changeText(getByPlaceholderText('Digite seu nome'), 'Gabriel Carreiro');
    fireEvent.changeText(getByPlaceholderText('Digite seu email'), 'gabriel@gmail.com');
    fireEvent.changeText(getByPlaceholderText('Confirme seu email'), 'gabriel@gmail.com');
    fireEvent.changeText(getByPlaceholderText('Digite sua senha'), 'mypassword');

    expect(getByPlaceholderText('Digite seu nome').props.value).toEqual('Gabriel Carreiro');
    expect(getByPlaceholderText('Digite seu email').props.value).toEqual('gabriel@gmail.com');
    expect(getByPlaceholderText('Confirme seu email').props.value).toEqual('gabriel@gmail.com');
    expect(getByPlaceholderText('Digite sua senha').props.value).toEqual('mypassword');
});

test('Testando o submit do botão Entrar do login' , async () => {
    const mockFn = jest.fn();
    const data = { 
        "displayName": "Gabriel Carreiro", 
        "email": "gabriel@gmail.com", 
        "emailVerified": "gabriel@gmail.com",
        "password": "123456"
    }
    const { getByPlaceholderText, getByText } = render(<SignUp onSubmit_test={mockFn} navigation={"teste"} />);
    
    fireEvent.changeText(getByPlaceholderText('Digite seu nome'), 'Gabriel Carreiro');
    fireEvent.changeText(getByPlaceholderText('Digite seu email'), 'gabriel@gmail.com');
    fireEvent.changeText(getByPlaceholderText('Confirme seu email'), 'gabriel@gmail.com');
    fireEvent.changeText(getByPlaceholderText('Digite sua senha'), '123456');
    fireEvent.press(getByText('Cadastrar-se'));

    expect(mockFn()).toEqual(data);
});