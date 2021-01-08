import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';   
import { Fontisto } from '@expo/vector-icons'; 
import { Container, Title_Header, Card, Title_Card } from './styles';
import { useAuth } from '../../hooks/auth';

const Home = ({navigation})=>{
    
    const { user } = useAuth();
    
    return(
        <Container>
            <Title_Header>
                Selecione o seu conteudo
            </Title_Header>

            <Card style={{backgroundColor: '#0092d8'}}
                onPress={() =>{
                navigation.navigate('conteudo', {trail: 'Dev'})}}>
                <Title_Card> Trilha Dev </Title_Card>
                <MaterialIcons name="computer" size={50} color="#fff" />
            </Card>

            <Card style={{backgroundColor: '#752cb9'}}
                onPress={() =>{
                navigation.navigate('conteudo', {trail: 'UX'})}}>
                <Title_Card> Trilha UX </Title_Card>
                <MaterialIcons name="design-services" size={50} color="#fff" />
            </Card>

            <Card style={{backgroundColor: '#03bebe'}}
                onPress={() =>{
                navigation.navigate('conteudo', {trail: 'QA'})}}>
                    <Title_Card> Trilha QA </Title_Card>
                <Fontisto name="test-tube" size={50} color="#fff" />
            </Card>

            <Card style={{backgroundColor: '#5fc523'}}>
                <Title_Card> Anotações </Title_Card>
                <Foundation name="clipboard-pencil" size={50} color="#fff" />
            </Card>
        </Container>
    )
};

export default Home;