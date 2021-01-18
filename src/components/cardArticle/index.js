import React, { useEffect, useState, useCallback } from 'react';
import { Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Spinner } from 'native-base';
import firebase from 'firebase';
import 'firebase/firestore';
import { Container, Article, Title_Article, Description, Buttom_View, ReadMore, ReadMore_Text } from './styles';

const CardArticle = ({ content, contentSelected, trail, onSubmit_test }) => {

    const [contentArticle, setcontentArticle] = useState([]);
    const [ loading, setLoading ] = useState();

    /* Função para buscar na API todos os artigos */
    const searchArticleSelected = useCallback( 
        async ()=>{
            try {
                if(onSubmit_test){
                    onSubmit_test.mockReturnValue(content);
                    return;
                }
                setLoading(true);
                const response = await firebase.firestore().collection(`${trail}`).
                    doc(`${contentSelected}`).collection(`${content}`).get();
                const temp = [];
                response.forEach(doc => {
                    temp.push({ id: doc.id, ...doc.data() });
                });
                setcontentArticle(temp)
            } catch (error) {
                console.log(error, 'Erro ao carregar o conteudo na API');
            }finally{
                setLoading(false)
            }
    },[content, contentSelected, trail, loading]);

    useEffect(() => {
        searchArticleSelected()
    },[content, contentSelected, trail]);

    return (
        <>
            {loading ?(
                <Spinner color="#38A1CE"/>
            ):(
            <Container>
                {contentArticle.map(article => (
                    <Article key={article.id}>
                        <Title_Article>
                           {article.title}
                        </Title_Article>
                        <Description>
                            {article.resume}
                        </Description>
                        <Buttom_View >
                            <ReadMore onPress={() => Linking.openURL(`${article.link}`)}>
                                <MaterialIcons name="read-more" size={22} color="#fff" />
                                <ReadMore_Text>Ler mais</ReadMore_Text>
                            </ReadMore>
                        </Buttom_View>
                    </Article>
                ))}
            </Container>
            )}
        </>
    );
};

export default CardArticle;
