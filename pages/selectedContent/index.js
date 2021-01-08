import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Container, Card, Text } from './styles';

const SelectedContent = ({route, navigation}) =>{

    const { trail, contentSelected } = route.params;

    return(
        <Container>
            <Card onPress={() =>{
                navigation.navigate('conteudo/opcoes/curso', {content: 'course', contentSelected, trail })}}>
                <MaterialCommunityIcons name="movie-open-outline" size={50} color="#fff" />
                <Text> Cursos </Text>
            </Card>
            <Card onPress={() =>{
                navigation.navigate('conteudo/opcoes/artigo', {content: 'article', contentSelected, trail})}}>
                <MaterialIcons name="article" size={50} color="#fff" />
                <Text> Artigos  </Text>
            </Card>
            <Card onPress={() =>{
                navigation.navigate('conteudo/opcoes/ebook', {content: 'ebook', contentSelected, trail})}}>
                <MaterialCommunityIcons name="book-open-variant" size={50} color="#fff"/>
                <Text> Ebook </Text>
            </Card>
            <Card onPress={() =>{
                navigation.navigate('conteudo/opcoes/questoes', {content: 'question', contentSelected, trail})}}>
                <AntDesign name="profile" size={50} color="#fff" />
                <Text> Questões </Text>
            </Card>
        </Container>
           
    );
};

export default SelectedContent;