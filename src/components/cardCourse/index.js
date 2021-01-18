import React, { useEffect, useState, useCallback } from 'react';
import { Linking } from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';
import { Ionicons } from '@expo/vector-icons'; 
import { Spinner } from 'native-base';
import { Container, Card, Image_Card, Image_Text, Title_Card, Description_Card, Button_Card, Text_Button } from './styles';

const CardCourse = ({ content, contentSelected, trail }) => {

    const [contentCourse, setContentCourse] = useState([]);
    const [ loading, setLoading ] = useState(false);

    /* Função para obter da API todos os cursos*/
    const searchCourseSelected = useCallback( 
        async ()=>{
            try {
                setLoading(true);
                const response = await firebase.firestore().collection(`${trail}`).
                    doc(`${contentSelected}`).collection(`${content}`).get();
                const temp = [];
                response.forEach(doc => {
                    temp.push({ id: doc.id, ...doc.data() });
                });
                setContentCourse(temp)
            } catch (error) {
                console.log(error, 'Erro ao carregar o conteudo');
            }finally{
                setLoading(false);
            }
    },[content, contentSelected, trail, loading]);

    useEffect(() => {
        searchCourseSelected()
    },[content, contentSelected, trail]);
    
    return (
        <>
            {loading ? (
                 <Spinner color="#38A1CE"/>
            ):(
                <Container>
                    {contentCourse.map(course => (
                        <Card key={course.id}>   
                            <Image_Card source={{uri:course.image}}/>
                            <Image_Text>
                                {course.name}
                            </Image_Text>
                            <Title_Card> {course.title} </Title_Card>
                            <Description_Card> 
                                {course.resume}
                            </Description_Card>
                            <Button_Card onPress={() => Linking.openURL(`${course.link}`)}>
                                <Text_Button>Iniciar curso</Text_Button>
                                <Ionicons name="arrow-redo-outline" size={24} color="#fff" />
                            </Button_Card>
                        </Card>
                    ))}
                </Container>
            )}
        </>
    );
};

export default CardCourse;