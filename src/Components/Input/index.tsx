import React from 'react';
import Styled from 'styled-components/native';

const Container=Styled.View`
    width:80%;
    height:40px;
    padding-left:16px;
    padding-right:16px;
    border-radius:4px;
    background-color:#333333;
    margin:10px;
`;

const InputField=Styled.TextInput`
    flex:1;
    color:#FFFFFF;
`;

interface Props{
    placeholder2: string;
    keyboardType?: 'default'|'email-address'|'numeric'|'phone-pad';
    secureTextEntry?:boolean;
    style?: Object;
    clearMode?: boolean;
    onChangeText?:(text: string)=>void;
}

const Input=({
    placeholder2,
    keyboardType,
    secureTextEntry,
    style,
    clearMode,
    onChangeText,
}:Props)=>{
    return(
        <Container style={style}>
            <InputField 
                selectionColor="#F3441A" //입력 내용을 복붙할 떄 나타나는 색상
                secureTextEntry={secureTextEntry} //입력내용을 숨길지 여부
                keyboardType={keyboardType?keyboardType:'default'}
                autoCapitalize="none"
                autoCorrect={false}
                allowFontScaling={false} // 사용자가 단말기를 통해 서정한 폰트 크기를 적용할지 여부
                placeholderTextColor="#FFFFFF"
                placeholder={placeholder2}
                clearButtonMode={clearMode?'while-editing':'never'} //ios 속성, clear button이 텍스트의 오른쪽에 나타나야하는지
                onChangeText={onChangeText} //압력창의 내용이 변결될 때 호출되는 콜백 함수
            />
        </Container>
    );
};

export default Input;