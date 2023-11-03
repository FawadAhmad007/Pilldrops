import React from 'react';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/Context/AuthContext';
import Routes from './src/Navigation/Routes';
import SignaturePad from './src/Screens/Signature';

const App = () => {

  // useEffect(() => {
  //   if (Platform.OS === 'android') {
  //     SplashScreen.hide();
  //   }
  // }, []);

  return (

    <AuthProvider>
      <StatusBar barStyle={'dark-content'} />
      <SignaturePad/>
      {/* <Routes /> */}
    </AuthProvider>
  );
};

export default App;
