import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'
import { Container, Cards, Card, Text } from './styles';
import Header from '../../components/header';

const SelectedContent = ({route, navigation}) =>{

    let { trail, contentSelected } = route.params;
    
    return(
        <Container>
            <Header navigation={navigation} title={contentSelected}/>
            <Cards>
                <Card onPress={() =>{
                    navigation.navigate('conteudo/opcoes/curso', {content: 'course', contentSelected, trail })}}>
                    <MaterialCommunityIcons name="movie-open-outline" size={44} color="#0092d8" />
                    <Text> Cursos </Text>
                    <SimpleLineIcons name="arrow-right" size={32} color="#0092d8"/>
                </Card>
                <Card onPress={() =>{
                    navigation.navigate('conteudo/opcoes/artigo', {content: 'article', contentSelected, trail})}}>
                    <MaterialIcons name="article" size={44} color="#0092d8" />
                    <Text> Artigos  </Text>
                    <SimpleLineIcons name="arrow-right" size={32} color="#0092d8"/>
                </Card>
                <Card onPress={() =>{
                    navigation.navigate('conteudo/opcoes/ebook', {content: 'ebook', contentSelected, trail})}}>
                    <MaterialCommunityIcons name="book-open-variant" size={44} color="#0092d8"/>
                    <Text> Ebook </Text>
                    <SimpleLineIcons name="arrow-right" size={32} color="#0092d8"/>
                </Card>
                <Card onPress={() =>{
                    navigation.navigate('conteudo/opcoes/questoes', {content: 'question', contentSelected, trail})}}>
                    <AntDesign name="profile" size={44} color="#0092d8" />
                    <Text> Questões </Text>
                    <SimpleLineIcons name="arrow-right" size={32} color="#0092d8"/>
                </Card>
            </Cards>
           
        </Container>
           
    );
};

export default SelectedContent;