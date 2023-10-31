import React, {createContext, useState, useEffect} from 'react';

import {
  setAccessToken,
  removeAccessToken,
  getAccessToken,
} from '../Utils/Helpers/AsyncStorags';
import {Camera} from 'expo-camera';
import {Alert, Linking} from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const getCameraPermission = async () => {
    const {status} = await Camera.requestCameraPermissionsAsync();
    if (status === 'denied') {
      Alert.alert(
        'Permission Denied',
        'Please allow the access to camera to scan the QR code.',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Open Settings',
            onPress: () => Linking.openSettings(),
          },
        ],
      );
      return false;
    } else {
      return status === 'granted';
    }
  };

  const login = async token => {
    setIsLoading(true);
    setUserToken(token);
    await setAccessToken(token);
    setIsLoading(false);
  };

  const logout = async () => {
    setIsLoading(true);
    setUserToken(null);
    setUserInfo(null);
    await removeAccessToken();
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let utok = await getAccessToken();
      setUserToken(utok);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        userInfo,
        userToken,
        isLoading,
        getCameraPermission,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
