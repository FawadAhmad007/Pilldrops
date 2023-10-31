import React from 'react';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/Context/AuthContext';
import Routes from './src/Navigation/Routes';

const App = () => {


  // useEffect(() => {
  //   if (Platform.OS === 'android') {
  //     SplashScreen.hide();
  //   }
  // }, []);

  return (

    <AuthProvider>
      <StatusBar barStyle={'dark-content'} />
      <Routes />
    </AuthProvider>
  );
};

export default App;
