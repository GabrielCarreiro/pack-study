import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    flex: 1;
`;

export const Content = styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    opacity: 0.9;
`;

export const Card = styled.TouchableOpacity`
    width: 40%;
    height: 150px;
    justify-content: center;
    align-items: center; 
    border-radius: 20px;
    padding: 7px;
    margin: 10px;
`;


export const Title_Card = styled.Text`
    font-size: 24px;
    color: #fff;
    margin-bottom: 5px;
    font-weight: bold;
`;