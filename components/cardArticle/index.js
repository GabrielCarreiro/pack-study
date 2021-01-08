import React, { useEffect, useState, useCallback } from 'react';
import { Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';
import { Article, Title_Article, Description, Buttom_View, ReadMore, ReadMore_Text } from './styles';

const CardArticle = ({ content, contentSelected, trail }) => {
    const [contentArticle, setcontentArticle] = useState([]);

    const searchArticleSelected = useCallback( 
        async ()=>{
            try {
                const response = await firebase.firestore().collection(`${trail}`).
                    doc(`${contentSelected}`).collection(`${content}`).get();
                const temp = [];
                response.forEach(doc => {
                    temp.push({ id: doc.id, ...doc.data() });
                });
                setcontentArticle(temp)
            } catch (error) {
                console.log(error, 'Erro ao carregar o conteudo');
            };
    },[]);

    useEffect(() => {
        searchArticleSelected()
    },[]);

    return (
        <View>
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
                            <ReadMore_Text>
                                Ler mais
                            </ReadMore_Text>
                        </ReadMore>
                    </Buttom_View>
                </Article>
            ))}
        </View>
    );
};

export default CardArticle;
