import React, { useState, useCallback } from "react";
import { Toast, Spinner } from 'native-base';
import { useAuth } from '../../hooks/auth';
import { Container, Input, Image_Logo, Button, Button_Text, Text } from "./styles";

const SignUp = ({navigation}) => {

    const [displayName, setDisplayName] = useState();
    const [email, setEmail] = useState();
    const [emailVerified, setEmailVerified] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);

    const { signUp } = useAuth();

    const handleCreateUserFirebase = useCallback(
        async () => {

            if (!displayName) return;
            if (!email) return;
            if (!emailVerified) return;
            if (!password) return;

            setLoading(true);

            try {
                await signUp({ displayName, email, emailVerified, password });
            } catch (error) {
                Toast.show({
                    text: "Usuário ou senha não confere.",
                    buttonText: "Okay",
                    type: "warning"
                })
            } finally {
                setLoading(false);
            };
        }, [displayName, email, emailVerified, password, loading]);

    return (
        <Container>
            <Image_Logo source={require("../../assets/logo.png")} />
            <Input
                placeholder="Digite seu nome"
                placeholderTextColor="#fff" value={displayName}
                onChangeText={text => setDisplayName(text)} />
            <Input
                placeholder="Digite seu email"
                placeholderTextColor="#fff" value={email}
                onChangeText={text => setEmail(text)} />
            <Input
                placeholder="Confirme seu email"
                placeholderTextColor="#fff" value={emailVerified}
                onChangeText={text => setEmailVerified(text)} />
            <Input
                placeholder="Digite sua senha"
                placeholderTextColor="#fff" value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true} />
            <Button
                onPress={() => handleCreateUserFirebase()}>
                {!loading ? (
                    <Button_Text> Cadastrar-se </Button_Text>
                ):(
                    <Spinner color="#38A1CE"/>
                )}
            </Button>
            <Text onPress={navigation.goBack}>
                Cancelar 
            </Text>
        </Container>
    );
};

export default SignUp;
