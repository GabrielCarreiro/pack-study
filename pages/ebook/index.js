import React from 'react';
import { ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Container, Content, Header, Header_Title } from './styles';
import CardEbook from '../../components/cardEbook';


const Ebook = ({route})=>{
    const { content, contentSelected, trail } = route.params;
    
    return(
        <Container>
            <ScrollView>
                <Content>
                    <Header>
                        <Header_Title> Ebooks de {contentSelected} </Header_Title>
                        <MaterialCommunityIcons name="book-open-page-variant" size={36} color="#505052" />
                    </Header>
                    <CardEbook content={content} contentSelected={contentSelected} trail={trail}/>
                </Content>
            </ScrollView>
        </Container>
    )
};

export default Ebook;