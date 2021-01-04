import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #363142;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const Content = styled.View`
    justify-content: center;
    align-items: center;
    padding: 0 2px;
    
`;

export const View_Card = styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const View_Text = styled.View`
    width: 100%;
    margin: 10px 0;
`;

export const Text_Paragraph= styled.Text`
    color: #f3fafb;
    font-size: 14px;
    margin: 5px 0;
    padding: 0 10px;
`;

export const Text_Title = styled.Text`
    color: #f3fafb;
    font-weight: bold;
    font-size: 38px;
`;

export const Card = styled.TouchableOpacity`
    background-color: #414654;
    justify-content: center;
    align-items: center;
    margin: 7px;
    width: 45%;
    padding: 5px;
`;

export const Image = styled.Image`
    width: 80%;
    height: 120px;
`;