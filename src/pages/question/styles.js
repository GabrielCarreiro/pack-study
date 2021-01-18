import styled from 'styled-components/native';

export const Container = styled.View`

`;

export const Content = styled.View`
    width: 100%;
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
    margin: 10px;
    padding: 0 5px;
    text-align: justify;
`;

export const Button = styled.TouchableOpacity`
    background-color: #fff;
    border-radius: 30px;
    border: 1px solid #1cb0f6;
    height: 35px;
    margin: 7px;
    justify-content: center;
    flex-direction: row;
    align-items: center;
`;

export const Button_Answer = styled.TouchableOpacity`
    background-color: #1cb0f6;
    border-radius: 30px;
    height: 32px;
    margin: 7px;
    justify-content: center;
    align-items: center;
`;

export const  Button_Text = styled.Text`
    color: #1cb0f6;
    font-weight: bold;
    font-size: 20px;
`;