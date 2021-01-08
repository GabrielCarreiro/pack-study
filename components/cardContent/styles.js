import styled from 'styled-components/native';

export const View_Card = styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.TouchableOpacity`
    border: 2px solid #0092d8;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    width: 45%;
    padding: 10px;
    margin: 5px;
`;

export const Image = styled.Image`
    width: 80%;
    height: 110px;
`;