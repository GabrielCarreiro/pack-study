import React, { useEffect, useState, useCallback } from 'react';
import { ScrollView, View } from 'react-native';
import { 
    Container, 
    Content, 
    View_Text, 
    Text_Title,
    Text_Paragraph, 
    View_Card,
    Card, 
    Image } from './styles';
import Dev from '../../assets/dev.tsx'
import firebase from 'firebase';
import 'firebase/firestore';
//#414654 f6666c f3fafb
const Content_Dev = ({navigation}) => {

    const [contentDev, setcontentDev] = useState([]);

    const loadContentDev = useCallback(
        async () => {
            try {
                const response = await firebase.firestore().collection('content_dev').get();
                const temp = [];
                response.forEach(doc => {
                    temp.push({ id: doc.id, ...doc.data() });
                });
                setcontentDev(temp);
            } catch (error) {
                console.log(error, 'Erro ao carregar o conteudo');
            };
        }, []);

    useEffect(() => {
        loadContentDev()
    }, []);

    return (

        <Container>
            <ScrollView contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
                <Content>
                    <Dev/>   
                    <View_Text>
                        <Text_Title> Trilha Dev </Text_Title>
                        <Text_Paragraph>
                            Selecione o conteudo que deseja estudar, todo material disponivel foi 
                            preparado com muito carinho.
                        </Text_Paragraph>
                    </View_Text>               
                    <View_Card>
                        {contentDev.map(content =>(
                            <Card key={content.id} onPress={() =>{
                                navigation.navigate('topic/dev', {topicId: content.id})
                            }}>
                                <Image source={{ uri:content.image }}/>
                            </Card>
                        ))}
                    </View_Card>
                </Content>
            </ScrollView>
        </Container>
    )
};

export default Content_Dev;