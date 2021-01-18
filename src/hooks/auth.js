import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import { Toast } from 'native-base';
import firebase from 'firebase';
import 'firebase/auth';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [data, setData] = useState({});

    const onAuthStateChanged = useCallback( userState => {
        setData({ 
            user: userState 
        });
    },[]);

    useEffect(() => {
        const unsubscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return () => unsubscriber();
    }, [onAuthStateChanged]);

    const signUp = useCallback(
        async ({ email, password }) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(resp => {
                Toast.show({
                    text: "Usuário criado com sucesso",
                    buttonText: "Okay",
                    type: "success"
                })
            })
            .catch(error => {
                Toast.show({
                    text: "Error ao criar usuário",
                    buttonText: "Okay",
                    type: "warning"
                })
            })
    }, []);

    const signIn = useCallback(
        async ({ email, password }) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(resp => {
                Toast.show({
                    text: "Logado com sucesso",
                    buttonText: "Okay",
                    type: "success"
                })
               
            }).catch(error => {
                Toast.show({
                    text: "Usuário ou senha inválidos",
                    buttonText: "Okay",
                    type: "warning"
                })
            })
    }, []);

    const signOut = useCallback(
        async () => {
        firebase
            .auth()
            .signOut()
            .then(resp => {
                console.log("Deslogado com sucesso");
            })
            .catch(error => {
                console.log('Error ao deslogar', error);
            })
    },[]);

    return (
        <AuthContext.Provider
            value={{ user: data.user, signUp, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    };
    return context;
}

export { AuthProvider, useAuth };