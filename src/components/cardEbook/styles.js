import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    padding: 10px;
    margin-top: 5px;
`;

export const Card_Ebook = styled.View`
    background-color: #fff;
    border: 1px solid #1cb0f6;
    border-radius: 5px;
    width: 100%;
    justify-content: center;
    paddingTop: 7px;
`;

export const Card_Title = styled.Text`
    color:  #505052;
    font-weight: bold;
    font-size: 22px;
    padding: 0 15px;
`;

export const Card_Author= styled.Text`
    color:  #505052;
    font-size: 18px;
    font-weight: bold;
    padding: 0 15px;
`;

export const Card_Resume = styled.Text`
    color:  #505052;
    font-size: 18px;
    padding: 5px 15px;
    margin-bottom: 5px;
    text-align: justify;
`;

export const View_Buttom = styled.View`
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    padding-left: 160px;
`;

export const Buttom_Card = styled.TouchableOpacity`
    background-color: #1cb0f6;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 32px;
`;

export const Button_Text = styled.Text`
    color: #fff;
    font-size: 20px;
    paddingLeft: 5px;
`;