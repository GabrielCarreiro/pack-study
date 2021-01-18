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
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons'; 
import { createDrawerNavigator,
         DrawerContentScrollView,
         DrawerItem } from '@react-navigation/drawer';

const AppRoutes = () => {

    const { signOut } = useAuth();

    const App = createDrawerNavigator();

    function CustomDrawerContent({navigation}) {
        return (
            <DrawerContentScrollView >
                <DrawerItem  icon={ () =>(
                        <MaterialIcons name="computer" size={20} color="#000" />
                )} label="Trilha Dev" onPress={() =>{navigation.navigate('conteudo', {trail: 'Dev'})}}/>

                <DrawerItem label="Trilha UX" icon={ () =>(
                        <MaterialIcons name="design-services" size={20} color="#000"/>
                )}  onPress={() =>{navigation.navigate('conteudo', {trail: 'UX'})}}/>

                <DrawerItem label="Trilha QA" icon={ () =>(
                        <Fontisto name="test-tube"  size={20} color="#000" />
                )} onPress={() =>{ navigation.navigate('conteudo', {trail: 'QA'})}}/>

                <DrawerItem label="Notícias"  icon={ () =>(
                        <MaterialCommunityIcons name="newspaper-variant-outline" size={20} color="#000" />
                )} onPress={() =>{navigation.navigate('noticias', {trail: 'News'})}}/>

                <DrawerItem label="Deslogar" icon={ () =>(
                        <MaterialCommunityIcons name="exit-to-app" size={20} color="#000" />
                )} onPress={() => signOut()} />
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