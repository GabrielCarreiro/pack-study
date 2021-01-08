import styled from 'styled-components/native';

export const Article = styled.View`
    background-color: #fff;
    border: 1px solid #1cb0f6;
    border-radius: 5px;
    width: 98%;
    justify-content: center;
    margin: 15px 0;
`;

export const Title_Article = styled.Text`
    color: #505052;
    font-weight: bold;
    font-size: 20px;
    padding: 5px 15px;
`;

export const Description = styled.Text`
    color: #505052;
    font-size: 16px;
    padding: 5px 15px;
`;

export const Buttom_View = styled.View`
    justify-content: flex-end;
    align-items: flex-end;
`;

export const ReadMore = styled.TouchableOpacity`
    width: 40%;
    backgroundColor: #1cb0f6;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
`;

export const ReadMore_Text = styled.Text`
    color: #fff;
    font-size: 18px;
    padding: 0 5px;
`;

