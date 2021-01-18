import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import { View } from 'react-native'
import CardArticle from '../components/cardArticle/index.js';

test('Testando a função que chama API', async () => {

    const mockFn = jest.fn();
    const content = render(<CardArticle onSubmit_test={mockFn} trail={"Dev"} contentSelected={"JavaScript"} content={"article"} />);
    expect(mockFn()).toEqual('article');
});

test('Testando o container da pagina de artigos', async () => {

    let inst = renderer.create(<CardArticle />)
    await waitFor(() => {
        const view = inst.root.findAllByType(View);
        expect(view.length).toBe(1);

    })
});