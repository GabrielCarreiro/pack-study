import React from 'react';
import { ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Container, Content } from './styles';
import CardEbook from '../../components/cardEbook';
import Header from '../../components/header';


const Ebook = ({route, navigation})=>{
    const { content, contentSelected, trail } = route.params;
    
    return(
        <Container>
            <ScrollView>
                <Content>
                    <Header navigation={navigation} title={"Ebook"}/>
                    <CardEbook content={content} contentSelected={contentSelected} trail={trail}/>
                </Content>
            </ScrollView>
        </Container>
    )
};

export default Ebook;