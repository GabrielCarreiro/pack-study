import React from 'react';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import Home from '../pages/Home/index';
import Content_Dev from '../pages/Content_Dev/index';
import Topic_Dev from '../pages/Topic_Dev';

const App = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Help" onPress={() => alert('Link to help')} />
        </DrawerContentScrollView>
    );
}

const AppRoutes = () => {
    return (
        <App.Navigator drawerContent={
            props => <CustomDrawerContent {...props} />
        }>
            <App.Screen name="Home" component={Content_Dev} />
            <App.Screen name="topic/dev" component={Topic_Dev} />
        </App.Navigator>
    )
};

export default AppRoutes;