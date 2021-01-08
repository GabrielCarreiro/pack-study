import React, { useState, useCallback } from "react";
import { Toast, Spinner } from 'native-base';
import { Video } from 'expo-av';
import { useAuth } from '../../hooks/auth';
import { Container, Content, Input, Image_Logo, Button, Button_Text, Text } from "./style";

const Login = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);

    const { signIn } = useAuth();

    const handleloginfirebase = useCallback(
        async () => {
            setLoading(true);
            console.log(email, password)

            if (!email) return;
            if (!password) return;

            console.log(email, password)

            try {
                await signIn({ email, password });
            } catch (error) {
                Toast.show({
                    text: "Usuário ou senha inválidos",
                    buttonText: "Okay",
                    type: "warning"
                })
            } finally {
                setLoading(false);
            }
        },[email, password, loading]);

    return (
        <Container>
            <Video
                source={require('../../assets/background.mp4')}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={{ width:'100%', height: '100%', position: 'absolute', opacity: 0.7 }}/>
            <Content>
            </Content>
            <Image_Logo source={require("../../assets/logo.png")} />
                <Input
                    placeholder="Digite seu email"
                    placeholderTextColor="#fff" value={email}
                    onChangeText={text => setEmail(text)} />
                <Input
                    placeholder="Digite sua senha"
                    placeholderTextColor="#fff" value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true} />
                <Button
                    onPress={() => handleloginfirebase()}>
                    {!loading ? (
                        <Button_Text>Entrar</Button_Text>
                    ):(
                        <Spinner color="#38A1CE"/>
                    )}
                </Button>
                <Text onPress={()=> navigation.push('signUp')}> Não possui conta ? Cadastra-se</Text>
        </Container>
  
    );
};

export default Login;
