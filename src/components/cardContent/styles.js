import styled from 'styled-components/native';

export const View_Card = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
`;

export const Card = styled.TouchableOpacity`
    border: 1px solid #0092d8;
    background-color: #fff;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    border-radius: 3px;
    width: 90%;
    height: 80px;
    padding: 10px;
    margin: 7px 5px;
`;

export const Card_Text = styled.Text`
    font-size: 20px;
    text-align: center;
    paddingRight: 10px;
    width: 40%;
`;

export const Card_Image = styled.Image`
    width: 15%;
    height: 45px;
`;