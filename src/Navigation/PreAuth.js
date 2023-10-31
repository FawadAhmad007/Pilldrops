import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../Screens';
import {Constants} from '../Utils';

const PreAuthStack = createNativeStackNavigator();

const PreAuth = () => {
  const {SCREEN_NAME} = Constants;
  return (
    <PreAuthStack.Navigator>
      <PreAuthStack.Screen
        name={SCREEN_NAME.Login}
        component={Login}
        options={{headerShown: false}}
      />
    </PreAuthStack.Navigator>
  );
};

export default PreAuth;
