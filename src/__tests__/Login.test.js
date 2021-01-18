import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import Login from '../pages/login/index.js';

test('Testando se todos os textos na tela de login são exibidos corretamente', async () => {
    const { getByText, getByPlaceholderText } = render(<Login />)

    waitFor(() => getByText('Entrar'));
    waitFor(() => getByText('Não possui conta ? Cadastra-se'));
    waitFor(() => getByPlaceholderText('Digite seu email'));
    waitFor(() => getByPlaceholderText('Digite sua senha'));
});

it('Testando os inputs da tela de login', async () => {
    const { getByPlaceholderText } = render(<Login />)

    fireEvent.changeText(getByPlaceholderText('Digite seu email'), 'gabriel@gmail.com');
    fireEvent.changeText(getByPlaceholderText('Digite sua senha'), 'mypassword');

    expect(getByPlaceholderText('Digite seu email').props.value).toEqual('gabriel@gmail.com');
    expect(getByPlaceholderText('Digite sua senha').props.value).toEqual('mypassword');
});

test('Testando o submit do botão Entrar do login' , async () => {
    const mockFn = jest.fn();
    const data = { "email": "gabrielcarreiro","password": "123456"}
    const { getByPlaceholderText, getByText } = render(<Login onSubmit_test={mockFn} />);
    
    fireEvent.changeText(getByPlaceholderText('Digite seu email'), 'gabrielcarreiro');
    fireEvent.changeText(getByPlaceholderText('Digite sua senha'), '123456');
    fireEvent.press(getByText('Entrar'));

    expect(mockFn).toHaveBeenCalledWith(data);
});

