import React, { useEffect, useState, useCallback } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import { View_Card, Card, Image } from './styles';

const CardContent = ({navigation, trail}) => {

    const [content, setContent] = useState([]);
    
    const searchContent = useCallback(
        async () => {
            try {
                const response = await firebase.firestore().collection(`${trail}`).get();
                const temp = [];
                response.forEach(doc => {
                    temp.push({ id: doc.id, ...doc.data() });
                });
                setContent(temp);
            } catch (error) {
                console.log(error, 'Erro ao carregar o conteudo');
            };
        }, []);

    useEffect(() => {
        searchContent()
    }, []);

    return(
        <View_Card>
            {content.map(item =>(
                <Card key={item.id} onPress={() =>{
                    navigation.navigate('conteudo/opcoes', {contentSelected:item.id, trail})
                }}>
                    <Image source={{ uri:item.image }}/>
                </Card>
            ))}
        </View_Card>
    );
};

export default CardContent;
