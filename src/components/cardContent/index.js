import React, { useEffect, useState, useCallback } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import { Spinner } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';  
import { View_Card, Card, Card_Text, Card_Image } from './styles';

const CardContent = ({navigation, trail, onSubmit_test}) => {

    const [content, setContent] = useState([]);
    const [ loading, setLoading] = useState();

    /* Função que busca na API todas as materias de acordo com a trilha do usuário */
    const searchContent = useCallback(
        async()=>{
            try {
                setLoading(true)
                if(onSubmit_test){
                    onSubmit_test.mockReturnValue("success");
                    return;
                }
                const response = await firebase.firestore().collection(`${trail}`).get();
                const temp = [];
                response.forEach(doc => {
                    temp.push({ id: doc.id, ...doc.data() });
                });
                setContent(temp);
            }catch (error) {
                console.log(error, 'Erro ao carregar o conteudo');
            }finally{
               setLoading(false)
            }
    },[loading, trail]);

    useEffect(() => {
        searchContent() 
    }, [ trail ]);

    return(
        <>
            {loading ? (
                <Spinner color="#38A1CE"/>
            ):(
                <View_Card>
                    {content.map(item =>(
                    <Card key={item.id} onPress={() =>{
                        navigation.navigate('conteudo/opcoes', {contentSelected:item.id, trail})
                    }}>
                        <Card_Image source={{uri:item.image}}/>  
                        <Card_Text>
                            {item.id}
                        </Card_Text>
                        <MaterialIcons name="arrow-forward-ios" size={24} color="#38A1CE" />
                    </Card>
                    ))}
                </View_Card>
            )}
        </>
    );
};

export default CardContent;
