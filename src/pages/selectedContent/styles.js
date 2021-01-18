import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #fcf9fc;
    width: 100%;
    flex: 1;
`;
export const Cards = styled.View`
    width: 100%;
    height: 90%;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.TouchableOpacity`
    width: 85%;
    height: 90px;
    margin: 15px 0; 
    border-radius: 50px;
    flex-direction: row;
    padding: 0 25px;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #0092d8;
`;

export const Text = styled.Text`
    color:  #0092d8;
    font-size: 34px;
`;


