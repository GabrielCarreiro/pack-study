import React from 'react';
import { ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Container, Content, Header_Title } from './styles';
import CardArticle from '../../components/cardArticle/index';
import Header from '../../components/header';

const Article = ({route, navigation})=>{
    const { content, contentSelected, trail } = route.params;

    return(
        <Container>
            
            <ScrollView>
            
                <Content>
                    <Header navigation={navigation} title={"Artigos"}/>
                    <CardArticle content={content} contentSelected={contentSelected} trail={trail}/>
                </Content>
            </ScrollView>
        </Container>
    )
};

export default Article;