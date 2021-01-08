import styled from 'styled-components/native';

export const Card = styled.View`
    background-color: #0092d8;
    border-radius: 10px;
    width: 98%;
    justify-content: center;
    margin: 15px 0;
`;

export const Image_Card = styled.Image`
    width: 100%;
    height: 260px;
    align-content: flex-start;
`;

export const Image_Text = styled.Text`
    color: #f0f0f0;
    font-size: 14px;
    padding: 5px 10px;
`;

export const Title_Card = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 22px;
`;

export const Description_Card = styled.Text`
    color: #f0f0f0;
    font-size: 18px;
    padding: 5px;
`;

export const Button_Card = styled.TouchableOpacity`
    background-color: #5fc523;
    align-items: flex-end;
    height: 32px;
`;

export const Text_Button = styled.Text`
    color: #fff;
    font-size: 20px;
    paddingRight: 5px;
`;

