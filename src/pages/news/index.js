import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../../components/header';
import { Container, Content } from './styles';
import CardNews from '../../components/cardNews';
const News = ({route, navigation})=>{

    const { trail } = route.params;
    
    return(
        <Container>
            <Header  navigation={navigation} title={`Notícias`}/>
            <ScrollView>
                <Content>
                    <CardNews trail={trail}/> 
                </Content>
            </ScrollView>
        </Container>
    )
};

export default  News;