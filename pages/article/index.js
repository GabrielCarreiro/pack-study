import React from 'react';
import { ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Container, Content, Header, Header_Title } from './styles';
import CardArticle from '../../components/cardArticle/index'

const Article = ({route})=>{
    const { content, contentSelected, trail } = route.params;

    return(
        <Container>
            <ScrollView>
                <Content>
                    <Header>
                        <MaterialCommunityIcons name="newspaper-variant-outline" size={40} color="#505052" />
                        <Header_Title> Artigos {contentSelected} </Header_Title>
                    </Header>
                    <CardArticle content={content} contentSelected={contentSelected} trail={trail}/>
                </Content>
            </ScrollView>
        </Container>
    )
};

export default Article;