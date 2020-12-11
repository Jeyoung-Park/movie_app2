import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationActions, NavigationScreenProp, NavigationState} from 'react-navigation';
import {Linking} from 'react-native';
import Styled from 'styled-components/native';

import Input from '~/Components/Input';
import Button from '~/Components/Button';

const Container=Styled.SafeAreaView`
    flex:1;
    background-color:#141414;
    align-items:center;
    justify-content:center;
`;

const InfoInput=Styled.TextInput`
    width:80%;
    background-color:#DDD;
    margin:10px;
`;

const PasswordReset=Styled.TouchableOpacity`
    
`;

const PasswordResetLabel=Styled.Text`
    font-size:16px;
    color:#DDD;
    margin:10px;
`;

interface Props{
    navigation:NavigationScreenProp<NavigationState>;
}

const Login =({navigation}:Props)=>{
    return(
        <Container>
            {/* <InfoInput 
                placeholder="이메일"
                autoCapitalize="none"
                autoFocus={false}
                ></InfoInput>
            <InfoInput 
                placeholder="비밀번호"
                secureTextEntry={true}
                autoFocus={false}
                autoCapitalize="none"
                ></InfoInput> */}
                <Input placeholder2="이메일"/>
                {/* Input에 매개변수로 전달 */}
                <Input 
                    placeholder2="비밀번호"
                    secureTextEntry={true}
                />
                <Button
                    label="로그인"
                    onPress={()=>{
                        // 로그인 버튼을 누르면
                        AsyncStorage.setItem('key', 'JWT_KEY'); //asyncstorage를 이용해 키 값을 저장
                        navigation.navigate('MovieNavigator'); //MovieNavigator로 이동
                    }}
                ></Button>
            <PasswordReset
                onPress={()=>{
                    // 단순히 누르면 링크 이동하도록 설정
                    Linking.openURL('https://eloquence-developers.tistory.com');
                }}>
                <PasswordResetLabel>비밀번호 재설정</PasswordResetLabel>
            </PasswordReset>
        </Container>
    );
}

Login.navigationOptions={
    title:"MOVIEAPP",
    headerTransparent:true,
    headerTintColor:'#E70915',
    headerTitleStyle:{
        fontWeight:'bold',
        fontSize: '40px'
    }
};

export default Login;