import React from 'react';
import { ScrollView } from 'react-native';
import { Container, Text_Title, Text_Paragraph } from './styles';
import CardContent from '../../components/cardContent';

const ContentDev = ({navigation, route}) => {

    const { trail } = route.params;

    return (
        <Container>
            <ScrollView>
                <Text_Title> Trilha {trail} </Text_Title>
                <Text_Paragraph>
                    Selecione o conteudo que deseja estudar, todo material disponivel foi 
                    preparado com muito carinho.
                </Text_Paragraph> 
                <CardContent navigation={navigation} trail={trail}/> 
            </ScrollView>
        </Container>
    )
};

export default ContentDev;