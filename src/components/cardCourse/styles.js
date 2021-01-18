import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    justify-content: center;
    padding: 0 5px;
    align-content: center;
`;

export const Card = styled.View`
    background-color: #f5f5f5;
    border: 1px solid #0092d8;
    border-radius: 5px;
    width: 100%;
    justify-content: center;
    margin: 15px 0;
`;

export const Image_Card = styled.Image`
    width: 100%;
    height: 260px;
    border-radius: 4px;
    align-content: flex-start;
`;

export const Image_Text = styled.Text`
    color: #0092d8;
    font-size: 16px;
    padding: 5px 10px;
`;

export const Title_Card = styled.Text`
    color: #0092d8;
    font-weight: bold;
    font-size: 22px;
    padding: 0 2px;
`;

export const Description_Card = styled.Text`
    color: #0092d8;
    font-size: 18px;
    padding: 5px 10px;
    margin-bottom: 5px;
`;

export const Button_Card = styled.TouchableOpacity`
    background-color: #0092d8;
    align-items: center;
    padding: 0 10px;
    justify-content: flex-end;
    flex-direction: row;
    border-radius: 4px;
    height: 34px;
`;

export const Text_Button = styled.Text`
    color: #fff;
    font-size: 22px;
    paddingRight: 5px;
`;

