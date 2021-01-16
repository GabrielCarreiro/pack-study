import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import Login from '../pages/login/index';
import SignUp from '../pages/signUp/index';

const Auth= createStackNavigator();

const AuthRoutes = () =>{
    return(
        <Auth.Navigator initialRouteName="Login" screenOptions={{
            headerShown: false,       
        }}>
            <Auth.Screen name="Login" component={Login} />
            <Auth.Screen name="signUp" component={SignUp } />
        </Auth.Navigator>
    )
}
export default AuthRoutes;