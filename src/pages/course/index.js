import React from 'react';
import { ScrollView } from 'react-native';
import { Container, Content, Header_Title, Header_Description } from './styles';
import CardCourse from '../../components/cardCourse';
import Header from '../../components/header';

const Course = ({route, navigation})=>{
    const { content, contentSelected, trail } = route.params;
    
    return(
        <Container>
            <Header  navigation={navigation} title={`Cursos`}/>
            <ScrollView>
                <Content>
                    <CardCourse content={content} contentSelected={contentSelected} trail={trail}/>
                </Content>
            </ScrollView>
        </Container>
    )
};

export default Course;