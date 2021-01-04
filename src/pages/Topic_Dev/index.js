import React, { useEffect, useState, useCallback } from 'react';
import { ScrollView, Text } from 'react-native';
import { Container, Content, Article } from './styles';
import firebase from 'firebase';
import 'firebase/firestore';

const Topic_Dev = ({route})=>{
    const { topicId } = route.params;
    const [ movieContentDev, setMovieContentDev] = useState([]);
    const [ articleContentDev, setArticleContentDev] = useState([]);

    const loadSelectedContentDev = 
        async () =>{
            try {
                const response = await firebase.firestore().collection('content_dev').
                    doc(`${topicId}`).collection('article').get();
                console.log(response)
                const temp = [];
                response.forEach(doc => {
                    temp.push({ id: doc.id, ...doc.data() });
                });              
                setArticleContentDev(temp)
            } catch (error) {
                console.log(error, 'Erro ao carregar o conteudo');
            }
    }

    useEffect(()=>{
        loadSelectedContentDev()
    },[]);
    
    return(
        <Container>
            <ScrollView>
                <Content>
                    {articleContentDev.map( article =>(
                        <Article>
                            <Text>
                                {article.id}
                            </Text>
                        </Article>
                    ))}

                    {console.log(articleContentDev)}
                </Content>
            </ScrollView>
        </Container>
    )
};

export default Topic_Dev;