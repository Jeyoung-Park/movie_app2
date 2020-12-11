// 키의 유효성을 체크하는 파일

import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import {ActivityIndicator} from 'react-native';
import Styled from 'styled-components/native';

const Container=Styled.View`
    flex:1;
    background-color:#141414;
    justify-content:center;
    align-items:center;
`;

interface Props{
    navigation:NavigationScreenProp<NavigationState>;
}

const CheckLogin=({navigation}:Props)=>{
    //로그인에 성공 시 key 전달 
    AsyncStorage.getItem('key')
    // 키의 존재에 따라 로그인 유뮤 판단
    .then(value=>{
        if(value){
            // 이 함수를 이용해 화면 전환
            navigation.navigate('MovieNavigator');
        }else{
            navigation.navigate('LoginNavigator');
        }
    })
    .catch((error:Error)=>{
        console.log(error);
    });

    return(
        <Container>
            {/* ActivityIndicator: loading 시 돌아가는 동그라미 만듦 */}
            <ActivityIndicator size="large" color="#E70915" />
        </Container>
    );
};

CheckLogin.navigationOptions={
    header:null,

};

export default CheckLogin;