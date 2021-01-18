import React, { useEffect, useState, useCallback } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Linking } from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';
import { Spinner } from 'native-base';
import { View } from 'react-native';
import { Container, Card_Ebook, Card_Title, Card_Author, Card_Resume, View_Buttom, Buttom_Card, Button_Text } from './styles';

const CardEbook = ({ content, contentSelected, trail }) => {

    const [ contentEbook, setContentEbook ] = useState([]);
    const [ loading, setLoading ] = useState();

    /* Função que obtem da API todos os Ebooks */
    const searchAllEbook = useCallback( 
        async ()=>{
            try {
                setLoading(true)
                const response = await firebase.firestore().collection(`${trail}`).
                    doc(`${contentSelected}`).collection(`${content}`).get();
                const temp = [];
                response.forEach(doc => {
                    temp.push({ id: doc.id, ...doc.data() });
                });
                setContentEbook(temp);
            } catch (error) {
                console.log(error, 'Erro ao carregar o conteudo');
            }finally{
                setLoading(false)
            }
    },[content, contentSelected, trail, loading]);

    useEffect(() => {
        searchAllEbook()
    },[content, contentSelected, trail]);

    return (
        <>
            {loading ?(
                <Spinner color="#38A1CE"/>
            ):(
                <View>
                    {contentEbook.map( ebook => (
                        <Container key={ebook.id}>
                            <Card_Ebook >
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
                        </Container>
                    ))}
                </View>
            )}
        </>
    )
};

export default CardEbook;
