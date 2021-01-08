import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #fcf9fc;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    flex: 1;
`;

export const Title_Header = styled.Text`
    font-size: 34px;
    color: #313131;
    font-weight: bold;
    margin: 10px;
    paddingTop: 15px;
`;

export const Card = styled.TouchableOpacity`
    width: 95%;
    height: 100px;
    justify-content: space-between;
    align-items: center; 
    flex-direction: row;
    border-radius: 5px;
    padding: 0 38px;
    margin: 15px 0;
`;


export const Title_Card = styled.Text`
    font-size: 40px;
    color: #fff;
    font-weight: bold;
`;