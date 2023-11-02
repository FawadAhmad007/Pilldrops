import React from 'react';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/Context/AuthContext';
import Routes from './src/Navigation/Routes';
import UpdateDeliveryStatus from './src/Screens/UpdateDeliveryStatus';

const App = () => {


  // useEffect(() => {
  //   if (Platform.OS === 'android') {
  //     SplashScreen.hide();
  //   }
  // }, []);

  return (

    <AuthProvider>
      <StatusBar barStyle={'dark-content'} />
      {/* <Routes /> */}
      <UpdateDeliveryStatus/>
    </AuthProvider>
  );
};

export default App;
