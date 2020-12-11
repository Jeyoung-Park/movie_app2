import {
    // 로그인 여부를 판단하고 로그인 여부에 따라 보여줄 화면을 전환하기 위한 기능
    createSwitchNavigator,
    // 네비게이션을 다루기 위한 State, Link 등을 관리
    createAppContainer
} from 'react-navigation';
// 영화 리스트 화면에서 영화를 선택하면 영화의 상세 페이지를 보여주기 위해 사용
import {createStackNavigator} from 'react-native-stack';

import CheckLogin from '~/Screens/CheckLogin';
import Login from '~/Screens/Login';
import MovieHome from '~/Screens/MovieHome';
import MovieDetail from '~/Screens/MovieDetail';

const LoginNavigator=createStackNavigator({
    Login,
});

const MovieNavigator=createStackNavigator({
    MovieHome, MovieDetail
});

const AppNavigator=createSwitchNavigator({
    CheckLogin,
    LoginNavigator,
    MovieNavigator
},{
    initialRouteName:'CheckLogin'
});

export default createAppContainer(AppNavigator);