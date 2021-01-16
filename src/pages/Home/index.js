import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons';   
import { Fontisto } from '@expo/vector-icons'; 
import { Container, Content, Card, Title_Card } from './styles';
import { useAuth } from '../../hooks/auth';
import { Video } from 'expo-av';

const Home = ({navigation})=>{
    
    const { user } = useAuth();
    
    return(
        <Container>
            <Video
                source={require('../../assets/fundo.mp4')}
                rate={0.9}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={{ width:'100%', height: '100%', position: 'absolute' }}/>
            <Content>
            <Card style={{backgroundColor: '#0092d8'}}
                onPress={() =>{
                navigation.navigate('conteudo', {trail: 'Dev'})}}>
                <Title_Card>Trilha Dev</Title_Card>
                <MaterialIcons name="computer" size={50} color="#fff" />
            </Card>

            <Card style={{backgroundColor: '#6e56bb'}}
                onPress={() =>{
                navigation.navigate('conteudo', {trail: 'UX'})}}>
                <Title_Card>Trilha UX</Title_Card>
                <MaterialIcons name="design-services" size={50} color="#fff" />
            </Card>

            <Card style={{backgroundColor: '#04d6d6'}}
                onPress={() =>{
                navigation.navigate('conteudo', {trail: 'QA'})}}>
                    <Title_Card>Trilha QA</Title_Card>
                <Fontisto name="test-tube" size={50} color="#fff" />
            </Card>

            <Card style={{backgroundColor: '#5fc523'}}
                onPress={() =>{
                navigation.navigate('noticias', {trail: 'News'})}}>
                <Title_Card>Notícias</Title_Card>
                <MaterialCommunityIcons name="newspaper-variant-outline" size={50} color="#fff" />
            </Card>
            </Content>
        </Container>
    )
};

export default Home;