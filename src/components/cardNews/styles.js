import styled from 'styled-components/native';

export const Card = styled.TouchableOpacity`
    background-color: #fff;
    border: 1px solid #1cb0f6;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
    margin-top: 10px;

`;

export const Description = styled.View`
    justify-content: flex-start;
    align-items: flex-start;
    height: 100px;
    max-width: 60%;
`;

export const Card_Date = styled.Text`
    color:  #aeaeb0;
    font-weight: bold;
    font-size: 14px;
    padding: 0 5px;
   
`;

export const Card_Resume = styled.Text`
    color:  #505052;
    font-size: 16px;
    padding: 0 5px 10px 5px;
  
`;

export const Card_Image = styled.Image`
    width: 40%;
    height: 100%;
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