import React from 'react';
import Home from '../pages/home/index';
import ContentDev from '../pages/content';
import Article from '../pages/article';
import Course from '../pages/course';
import Ebook from '../pages/ebook';
import Question from '../pages/question';
import News from '../pages/news';
import SelectedContent from '../pages/selectedContent';
import { useAuth } from '../hooks/auth';
import { MaterialIcons } from '@expo/vector-icons';
import { createDrawerNavigator,
         DrawerContentScrollView,
         DrawerItem } from '@react-navigation/drawer';

const AppRoutes = () => {

    const { signOut } = useAuth();

    const App = createDrawerNavigator();

    function CustomDrawerContent({navigation}) {
        return (
            <DrawerContentScrollView >
                <DrawerItem label="Trilha Dev" icon={ () =>(
                    <MaterialIcons name="computer" size={50} color="#fff" />
                )}  onPress={() =>{
                    navigation.navigate('conteudo', {trail: 'Dev'})}}/>
                <DrawerItem label="Trilha UX"  onPress={() =>{
                    navigation.navigate('conteudo', {trail: 'UX'})}}/>
                <DrawerItem label="Trilha QA"  onPress={() =>{
                    navigation.navigate('conteudo', {trail: 'QA'})}}/>
                <DrawerItem label="Notícias"  onPress={() =>{
                    navigation.navigate('noticias', {trail: 'News'})}}/>
                <DrawerItem label="Deslogar" onPress={() => signOut()} />
            </DrawerContentScrollView>
        );
    };
    
    return (
        <App.Navigator drawerContent={
            props => <CustomDrawerContent {...props} />
        }>
            <App.Screen name="home" component={Home} />
            <App.Screen name="conteudo" component={ContentDev} />
            <App.Screen name="noticias" component={News} />
            <App.Screen name="conteudo/opcoes" component={SelectedContent} />
            <App.Screen name="conteudo/opcoes/artigo" component={Article} />
            <App.Screen name="conteudo/opcoes/curso" component={Course} />
            <App.Screen name="conteudo/opcoes/ebook" component={Ebook} />
            <App.Screen name="conteudo/opcoes/questoes" component={Question} />
        </App.Navigator>
        )
    };

export default AppRoutes;