import React from 'react';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/Context/AuthContext';
import Routes from './src/Navigation/Routes';
import Contact from './src/Components/Contact/Contact';

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
<Contact/>
    </AuthProvider>
  );
};

export default App;
