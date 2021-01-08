import styled from 'styled-components/native';

export const Container = styled.View`
    
`;

export const Content = styled.View`
    background-color: red;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const Header = styled.View`
    marginTop: 20px; 
    marginRight: 10px;
    flex-direction: row;
`;

export const Header_Title = styled.Text`
    color: #505052;
    font-weight: bold;
    font-size: 30px;
`;

export const Question_Title = styled.Text`
    color: #505052;
    font-weight: bold;
    font-size: 20px;
    margin: 5px 0;
`;

export const Button_Next = styled.TouchableOpacity`
    background-color: #1cb0f6;
    height: 32px;
    margin: 7px 0;
    justify-content: center;
    align-items: center;
`;

export const  Button_Text = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 20px;
`;