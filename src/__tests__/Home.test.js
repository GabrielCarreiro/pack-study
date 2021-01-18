import React from 'react';
import { render, waitFor} from '@testing-library/react-native';
import renderer from 'react-test-renderer'; 
import { TouchableOpacity } from 'react-native'
import Home from '../pages/home/index.js';

test('Testando os textos na pagina Home', async () => {
    const { getByText } = render(<Home />)

    expect(getByText('Trilha Dev')).not.toBeNull();
    expect(getByText('Trilha UX')).not.toBeNull();
    expect(getByText('Trilha QA')).not.toBeNull();
    expect(getByText('Dicas')).not.toBeNull();

});

test('Testando se todos botões são exibidos corretamente', async () => {

  let inst = renderer.create(<Home />)
  
  await waitFor(() => {
    const button = inst.root.findAllByType( TouchableOpacity );
    expect(button.length).toBe(4);

  })
});