import React from 'react';
import { waitFor, render,  } from '@testing-library/react-native';
import CardContent from '../components/cardContent';
import renderer from 'react-test-renderer'; 
import { View } from 'react-native';


test('Testando a função que chama API' , async () => {
    const mockFn = jest.fn();
    const content = render(<CardContent  onSubmit_test={mockFn} />);
    expect(mockFn()).toEqual('success');
});

test('Testando se o container da pagina de conteudo é exido corretamente', async () => {

    let inst = renderer.create(<CardContent />)
    
    await waitFor(() => {
      const container = inst.root.findAllByType(View);
      expect(container.length).toBe(1);
  
    })
  });