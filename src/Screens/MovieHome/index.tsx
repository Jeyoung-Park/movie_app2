import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import Styled from 'styled-components/native';

import BitCatalogList from './BigCatalogList';
import SubCatalogList from './SubCatalogList';

const Container=Styled.ScrollView`
    flex:1;
    background-color:#141414l;
`;

const StyleButton = Styled.TouchableOpacity`
    padding:8px;
`;

const Icon=Styled.Image``;

interface Props{
    navigation: NavigationScreenProp<NavigationState>
}

const MovieHome=({navigation}:Props)=>{
    //사용자가 로그아웃하는 경우
    const _logout=()=>{
        AsyncStorage.removeItem('key'); //asyncstorage에 key란 이름으로 저장되어 있는 거 삭제하고
        navigation.navigate('LoginNavigator'); //로그인 네비게이션으로 화면 이동
    };

    //useEffect의 두 번째 파라미터로 빈 배열을 전달하면 화면에 맨 처음 렌더링될떄만 실행(마운트될 때만 실행)
    useEffect(()=>{
        navigation.setParams({ //navigation에 매개변수를 설정
            logout:_logout
        });
    }, []);

    return(
        <Container>
            <BitCatalogList 
                url="https://yts.lt/api/v2/list_movies,json?sort_by=like_count&order_by=desc&limit=5"
                onPress={(id:number)=>{
                    navigation.navigate('MovieDetail', {
                        id
                    });
                }}
            />
            <SubCatalogList 
                title="최신 등록순"
                url="https://yts.lt/api/v2/list_movies.json?sort_by=date_added&prder_by=desc&limit=10"
                onPress={(id:number)=>{
                    navigation.navigate('MovieDetail', {
                        id
                    });
                }}
            />
            <SubCatalogList 
                title="평점순"
                url="https://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=dex&limit=10"
                onPress={(id:number)=>{
                    navigation.navigate('MovieDetail', {
                        id
                    });
                }}
            />
            <SubCatalogList 
                title="다운로드순"
                url="https://yts.ly/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10"
                onPress={(id:number)=>{
                    navigation.navigate('MovieDetail', {
                        id
                    });
                }}
            />
        </Container>
    );
}

interface INaviProps{
    navigation: NavigationScreenProp<NavigationState>;
}

//setParams로 설정된 매개변수(logout) 사용 
MovieHome.navigationOptions=({navigation}:INaviProps)=>{
    const logout=navigation.getParam('logout');
    return{
        title: 'MOVIEAPP',
        headerTintColor:'#E70915',
        headerStyle:{
            backgroundColor:'#141414',
            borderBottomWidth: 0
        },
        headerTitleStyle:{
            fontWeight:'bold'
        },
        headerBackTitle:null,
        headerRight:(
            <StyleButton
                onPress={()=>{
                    if(logout&&typeof logout ==='function'){
                        logout();
                    }
                }}
            >
                <Icon source={require('~Assets/Images/ic_logout.png')} />
            </StyleButton>
        )
    }
}

export default MovieHome;