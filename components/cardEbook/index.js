import React, { useEffect, useState, useCallback } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Linking } from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';
import { Card_Ebook, Card_Title, Card_Author, Card_Resume, View_Buttom, Buttom_Card, Button_Text } from './styles';

const CardEbook = ({ content, contentSelected, trail }) => {

    const [contentEbook, setContentEbook] = useState([]);

    const searchAllEbook = useCallback( 
        async ()=>{
            try {
                const response = await firebase.firestore().collection(`${trail}`).
                    doc(`${contentSelected}`).collection(`${content}`).get();
                const temp = [];
                response.forEach(doc => {
                    temp.push({ id: doc.id, ...doc.data() });
                });
                setContentEbook(temp)
            } catch (error) {
                console.log(error, 'Erro ao carregar o conteudo');
            };
    },[]);

    useEffect(() => {
        searchAllEbook()
    },[]);

    return contentEbook.map( ebook => (
        <Card_Ebook key={ebook.id}>
            <Card_Title> 
                {ebook.title}
            </Card_Title>
            <Card_Author>
                {ebook.name}
            </Card_Author>
            <Card_Resume>
                {ebook.resume}
            </Card_Resume>
            <View_Buttom>
                <Buttom_Card onPress={() => Linking.openURL(`${ebook.link}`)}>
                <FontAwesome5 name="book-reader" size={18} color="#fff" />
                    <Button_Text>
                        Iniciar Leitura
                    </Button_Text>
                </Buttom_Card>
            </View_Buttom>
        </Card_Ebook>
    ));
};

export default CardEbook;
