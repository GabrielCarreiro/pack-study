import React from 'react';
import {  waitFor} from '@testing-library/react-native';
import renderer from 'react-test-renderer'; 
import { View } from 'react-native'
import CardCourse from '../components/cardCourse/index';

test('Testando o container da pagina de cursos', async () => {

    let inst = renderer.create(<CardCourse  />)
    await waitFor(() => {
        const view = inst.root.findAllByType(View);
        expect(view.length).toBe(1);

    })
});