import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/routes/index';
import './src/services/firebase.js';
//import { LogBox } from 'react-native';
//LogBox.ignoreLogs(['Setting a timer']);

export default function App() {
    return (
        <SafeAreaProvider style={{backgroundColor:'#38A1CE'}}>
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
            <StatusBar style="light" style={{opacity: 0.4}} />
        </SafeAreaProvider>
    );
}
