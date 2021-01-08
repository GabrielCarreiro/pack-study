import React from 'react';
import { ScrollView } from 'react-native';
import { Container, Content, Header, Header_Title, Header_Description } from './styles';
import CardCourse from '../../components/cardCourse';

const Course = ({route})=>{
    const { content, contentSelected, trail } = route.params;
    
    return(
        <Container>
            <ScrollView>
                <Content>
                    <Header>
                        <Header_Title> Cursos de {contentSelected} </Header_Title>
                        <Header_Description> Os melhores cursos do youtube </Header_Description>
                    </Header>
                    <CardCourse content={content} contentSelected={contentSelected} trail={trail}/>
                </Content>
            </ScrollView>
        </Container>
    )
};

export default Course;