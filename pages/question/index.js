import React, {useState, useCallback, useEffect, useMemo} from 'react';
import { Toast } from 'native-base';
import { ScrollView } from 'react-native';
import { Container } from 'native-base';
import {  Header, Header_Title, Question_Title, Button_Next, Button_Text } from './styles';
import firebase from 'firebase';
import 'firebase/firestore';
import RadioButton from '../../components/radioButton';

const Question = ({navigation, route })=>{
    
    const { trail, contentSelected, content } = route.params;
    const [ alternativeID, setAlternativeID] = useState();
    const [ alternativeA, setAlternativeA ] = useState(false);
    const [ alternativeB, setAlternativeB ] = useState(false);
    const [ alternativeC, setAlternativeC ] = useState(false);
    const [ alternativeD, setAlternativeD ] = useState(false);
    const [ allQuestion, setAllQuestion ] = useState([]);
    const [ question, setQuestion ] = useState([]);
    const [ index, setIndex] = useState(1);
    

    const searchAllQuestion = async ()=>{
            try {
                const response = await firebase.firestore().collection(`${trail}`).
                    doc(`${contentSelected}`).collection(`${content}`).get();
                const temp = [];
                response.forEach(doc => {
                    temp.push({ id: doc.id, ...doc.data() });
                });
                console.log(index)
                setAllQuestion(temp);
                temp.map( quest =>{
                    if(quest.id == index) {
                        setQuestion(quest)
                    }
                })
            } catch (error) {
                console.log(error, 'Erro ao carregar as questões');
            };
    };

    useEffect(()=>{
        searchAllQuestion();
    },[]);

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
    
    console.log(question)

    const nextQuestion = () =>{
        let result = index + 1
        setIndex( result);
        selectedAlternative();
        allQuestion.map( question => {
            if(question.id == result){
                setQuestion(question)
            }
            
        })
    };

    const previousQuestion = () =>{
        let result = index - 1
        setIndex( result);
        selectedAlternative();
        allQuestion.map( question => {
            if(question.id == result){
                setQuestion(question)
            }
            
        })
    };

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

    }

    return(
        <Container style={{marginTop: 30}}>
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
                <Button_Next onPress={()=> nextQuestion()}>
                    <Button_Text>
                        Proximo
                    </Button_Text>
                </Button_Next>
                ):(<></>)}
                <Button_Next onPress={() => VerifiedQuestion()}>
                    <Button_Text>
                        Resposta
                    </Button_Text>
                </Button_Next>
            {index > 1 ? (
                <Button_Next onPress={()=> previousQuestion()}>
                    <Button_Text>
                       Voltar
                    </Button_Text>
                </Button_Next>
            ):(<></>)}
       </Container>

        
    )
};

export default Question;