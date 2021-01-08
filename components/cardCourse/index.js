import React, { useEffect, useState, useCallback } from 'react';
import { Linking } from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';
import { Card, Image_Card, Image_Text, Title_Card, Description_Card, Button_Card, Text_Button } from './styles';

const CardCourse = ({ content, contentSelected, trail }) => {
    const [contentCourse, setContentCourse] = useState([]);

    const searchCourseSelected = useCallback( 
        async ()=>{
            try {
                const response = await firebase.firestore().collection(`${trail}`).
                    doc(`${contentSelected}`).collection(`${content}`).get();
                const temp = [];
                response.forEach(doc => {
                    temp.push({ id: doc.id, ...doc.data() });
                });
                setContentCourse(temp)
            } catch (error) {
                console.log(error, 'Erro ao carregar o conteudo');
            };
    },[]);

    useEffect(() => {
        searchCourseSelected()
    },[]);
    
    return contentCourse.map(course => (
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
                <Text_Button>
                    Iniciar Curso
                </Text_Button>
            </Button_Card>
        </Card>
    ));
};

export default CardCourse;