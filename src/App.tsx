import React from 'react';
import {StatusBar} from 'react-native';
import Navigator from '~/Screens/Navigator';
import Login from '~/Screens/Login';
interface Props {}

// const App=({}:Props)=>{
//   return(
//     <>
//       <StatusBar barStyle="light-content"/>
//       <Navigator />
//     </>
//   );
// }

const App=({}:Props)=>{
  return(
    <Login></Login>
  );
}

export default App;