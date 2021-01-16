import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/routes/index';
import AppProvider from './src/hooks';
import './src/services/firebase.js';
import { Root } from 'native-base';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer']);

export default function App() {
    return (
        <SafeAreaProvider style={{backgroundColor: '#fff' }}>
            <StatusBar style="dark"/>
                <AppProvider>
                    <Root>
                        <NavigationContainer>
                            <RootNavigator />
                        </NavigationContainer>
                    </Root>
            </AppProvider>
        </SafeAreaProvider>
    );
};
