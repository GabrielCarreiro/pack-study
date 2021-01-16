import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #38A1CE;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.View`
    background-color: #38A1CE;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    opacity: 0.4;
    position: absolute;
`;

export const Image_Logo = styled.Image`
    width: 65%;
    height: 100px;
`;

export const Input = styled.TextInput`
    color: #fff;
    border: 0.6px solid #fff;
    width: 75%;
    height: 35px;
    padding: 0 15px;
    margin: 10px 0;
    border-radius: 15px;
    font-size: 18px; 
`;

export const Button = styled.TouchableOpacity`
    width: 75%;
    height: 35px;
    background-color: #fff;
    border-radius: 20px;
    margin: 10px 0;
    justify-content: center;
    align-items: center;
`;

export const Button_Text = styled.Text`
   font-size: 18px;
   color: #38A1CE;
`;

export const Text = styled.Text`
   font-size: 16px;
   color: #fff;
`;