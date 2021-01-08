import React, {useState} from 'react';
import { Container, ListItem, Text, Radio, Right, Left } from 'native-base';

const RadioButton = ({title, select, selectedAlternative, alternative}) =>{
    return(
        <ListItem >
            <Left>
                <Text>{title}</Text>
            </Left>
            <Right>
                <Radio
                    color={"#5fc523"}
                    selectedColor={"#1cb0f6"}
                    selected={select}
                    onPress={()=> selectedAlternative(alternative)}/>
            </Right>
        </ListItem>
    )
};

export default RadioButton;