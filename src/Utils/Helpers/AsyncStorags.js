import AsyncStorage from "@react-native-async-storage/async-storage";

export const setAccessToken = async (value) => {
  await AsyncStorage.setItem("access_token", value);
};

export const getAccessToken = async () => {
  return await AsyncStorage.getItem("access_token");
};

export const removeAccessToken = async () => {
  await AsyncStorage.removeItem("access_token");
};