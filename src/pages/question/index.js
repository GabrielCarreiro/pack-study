import React, {useState, useCallback, useEffect } from 'react';
import { Toast } from 'native-base';
import { ScrollView } from 'react-native';
import { Container } from 'native-base';
import { Feather } from '@expo/vector-icons'; 
import {  Content, Question_Title, Button_Answer, Button, Button_Text } from './styles';
import firebase from 'firebase';
import 'firebase/firestore';
import { Spinner } from 'native-base';
import RadioButton from '../../components/radioButton';
import Header from '../../components/header';

const Question = ({navigation, route })=>{
    
    const { trail, contentSelected, content } = route.params;
    const [ alternativeID, setAlternativeID] = useState();
    const [ alternativeA, setAlternativeA ] = useState(false);
    const [ alternativeB, setAlternativeB ] = useState(false);
    const [ alternativeC, setAlternativeC ] = useState(false);
    const [ alternativeD, setAlternativeD ] = useState(false);
    const [ allQuestion, setAllQuestion ] = useState([]);
    const [ loading, setLoading ] = useState();
    const [ question, setQuestion ] = useState([]);
    const [ index, setIndex] = useState(1);
    
    /* Função que busca na API todas as questões */
    const searchAllQuestion = useCallback(
        async()=>{
            try {
                setLoading(true)
                const response = await firebase.firestore().collection(`${trail}`).
                    doc(`${contentSelected}`).collection(`${content}`).get();
                const temp = [];
                response.forEach(doc => {
                    temp.push({ id: doc.id, ...doc.data() });
                });
                setAllQuestion(temp);
                temp.map( quest =>{
                    if(quest.id == index) {
                        setQuestion(quest)
                    }
                })
            } catch (error) {
                console.log(error, 'Erro ao carregar as questões');
            }finally{
                setLoading(false);
            }
    },[trail, content, contentSelected, loading]);

    useEffect(()=>{
        searchAllQuestion();
    },[trail, content, contentSelected]);

    /* Switch que vai setar no estado a opção que usuario selecionou */
    const selectedAlternative = (key)=>{
        switch (key) {
            case 'A':
                setAlternativeID(key);
                setAlternativeA(true);
                setAlternativeB(false);
                setAlternativeC(false);
                setAlternativeD(false);
                break;
            case 'B':
                setAlternativeID(key);
                setAlternativeA(false);
                setAlternativeB(true);
                setAlternativeC(false);
                setAlternativeD(false);
                break;
            case 'C':
                setAlternativeID(key);
                setAlternativeA(false);
                setAlternativeB(false);
                setAlternativeC(true);
                setAlternativeD(false);
                break;
            case 'D':
                setAlternativeID(key);
                setAlternativeA(false);
                setAlternativeB(false);
                setAlternativeC(false);
                setAlternativeD(true);
                break;
            default:
                setAlternativeID('');
                setAlternativeA(false);
                setAlternativeB(false);
                setAlternativeC(false);
                setAlternativeD(false);
                break;
        }
    };
    
    /* Função que vai buscar a proxima questão de acordo com index */
    const nextQuestion = () =>{
        let result = index + 1
        setIndex( result);
        selectedAlternative();
        allQuestion.map( question => {
            if(question.id == result){
                setQuestion(question)
            }
        });
    };

    /* Função que vai buscar a questão anterior de acordo com index */
    const previousQuestion = () =>{
        let result = index - 1
        setIndex( result);
        selectedAlternative();
        allQuestion.map( question => {
            if(question.id == result){
                setQuestion(question)
            }
        });
    };

    /* Função para verificar a resposta certa */
    const VerifiedQuestion = () =>{
        if(!alternativeID) {
            Toast.show({
                text: "Marca uma resposta",
                buttonText: "Okay",
                type: "warning"
            })
            return;
        }
        if(alternativeID === question.answer){
            Toast.show({
                text: "Você acertou parabéns",
                buttonText: "Okay",
                type: "success"
            })
        }else{
            Toast.show({
                text: ` Errou, alternativa correta ${question.answer}`,
                buttonText: "Okay",
                type: "danger"
            })
        }
    };

    return(
        <>
            {loading ? (
                  <Spinner color="#38A1CE"/>
            ):(
                <Container>
                    <ScrollView>
                        <Content>
                            <Header title={"Questões"} navigation={navigation}/> 
                            <Question_Title>
                                {question.question}
                            </Question_Title> 
                            <RadioButton 
                                title={question.A} select={alternativeA} selectedAlternative={selectedAlternative} alternative={'A'}/>
                            <RadioButton 
                                title={question.B} select={alternativeB} selectedAlternative={selectedAlternative} alternative={'B'}/>
                            <RadioButton 
                                title={question.C} select={alternativeC} selectedAlternative={selectedAlternative} alternative={'C'}/>
                            <RadioButton 
                                title={question.D} select={alternativeD} selectedAlternative={selectedAlternative} alternative={'D'}/>
                            {allQuestion.length !== index ? (
                                <Button style={{marginTop: 30}}
                                    onPress={()=> nextQuestion()}>
                                    <Button_Text>
                                        Proximo
                                    </Button_Text>
                                    <Feather name="arrow-right" size={22} color="#1cb0f6" />
                                </Button>
                                ):(<></>)}
                                <Button_Answer onPress={() => VerifiedQuestion()}>
                                    <Button_Text style={{color: "#fff"}}>
                                        Resposta
                                    </Button_Text>
                                </Button_Answer>
                            {index > 1 ? (
                                <Button onPress={()=> previousQuestion()}>
                                    <Feather name="arrow-left" size={22} color="#1cb0f6" />
                                    <Button_Text>
                                        Voltar
                                    </Button_Text>
                                </Button>
                            ):(<></>)}
                        </Content>
                    </ScrollView>
                </Container>
            )}
        </>
    )
};

export default Question;