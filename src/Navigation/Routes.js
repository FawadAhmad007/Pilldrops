import {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PreAuth from './PreAuth';
import PostAuth from './PostAuth';
import {AuthContext} from '../Context/AuthContext';
import {ActivityIndicator, View} from 'react-native';

const Routes = () => {
  const {userToken, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken === null ? <PreAuth /> : <PostAuth />}
    </NavigationContainer>
  );
};

export default Routes;
