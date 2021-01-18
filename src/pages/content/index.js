import React from 'react';
import { ScrollView } from 'react-native';
import { Container } from './styles';
import CardContent from '../../components/cardContent';
import  Header  from '../../components/header';

const ContentDev = ({navigation, route}) => {

    const { trail } = route.params;

    return (
        <Container>
            <ScrollView>
                <Header navigation={navigation} title={`Trilha ${trail}`}/>
                <CardContent navigation={navigation} trail={trail}/> 
            </ScrollView>
        </Container>
    )
};

export default ContentDev;