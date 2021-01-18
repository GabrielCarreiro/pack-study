import React, { useEffect, useState, useCallback } from 'react';
import { Linking } from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';
import { Spinner } from 'native-base';
import { View } from 'react-native';
import { Card, Card_Date, Description, Card_Resume, Card_Image } from './styles';

const CardNews = ({ trail }) => {

    const [ allNews, setAllNews ] = useState([]);
    const [ loading, setLoading ] = useState();

    /* Função que obtem da API todos as noticas */
    const searchAllNews = useCallback( 
        async ()=>{
            try {
                setLoading(true)
                const response = await firebase.firestore().collection(`${trail}`).get();
                const temp = [];
                response.forEach(doc => {
                    temp.push({ id: doc.id, ...doc.data() });
                });
                setAllNews(temp);
            } catch (error) {
                console.log(error, 'Erro ao carregar as noticias');
            }finally{
                setLoading(false)
            }
    },[ trail, loading]);

    useEffect(() => {
        searchAllNews()
    },[trail]);

    return (
        <>
            {loading ?(
                <Spinner color="#38A1CE"/>
            ):(
                <View>
                    {allNews.map( news => (
                        <Card key={news.id} onPress={() => Linking.openURL(`${news.link}`)}>                         
                            <Description>
                                <Card_Date>{news.date}</Card_Date>
                                <Card_Resume>{news.title}</Card_Resume>
                            </Description>
                            <Card_Image source={{uri:news.image}}/>
                        </Card>
                    ))}
                </View>
            )}
        </>
    )
};

export default CardNews;
