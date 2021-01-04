import React, {useState} from "react";
import { Container, Input, Image, Image_Logo, Button, Button_Text, Text } from "./style";
import { Video } from 'expo-av';


const Login = () => {
    
    return (
        <Container>
            <Image_Logo source={require("../../assets/logo.png")} />
            <Video
                source={require('../../assets/background.mp4')}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={{ width:'100%', height: '100%', position: 'absolute', opacity: 0.4 }}/>
            <Input placeholder="Digite seu email" placeholderTextColor="#fff"/>
            <Input placeholder="Digite sua senha" placeholderTextColor="#fff" />
            <Button>
                <Button_Text>Entrar</Button_Text>
            </Button>
            <Text> Não possui conta ? Cadastra-se</Text>
        </Container>
    );
};

export default Login;
