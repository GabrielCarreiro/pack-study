import React from 'react';
import {View } from 'react-native'
import { Container, Header as Header_, Left, Body, Right, Button, Icon, Title } from 'native-base';

const Header = ({navigation, title}) => {
    return (
        <View style={{width: 360, marginTop: 20}}>
            <Header_ androidStatusBarColor="#1a90c4" style={{backgroundColor: '#38A1CE'}}>
            <Left>
                <Button transparent  onPress={navigation.goBack}>
                    <Icon name='arrow-back' />
                </Button>
            </Left>
            <Body>
                <Title style={{fontSize: 22}}>{title}</Title>
            </Body>
            <Right/>
            </Header_>
        </View>
    );
}

export default Header;