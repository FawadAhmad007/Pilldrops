import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import PreAuth from "./PreAuth";
import { useSelector } from "react-redux";
import PostAuth from "./PostAuth";
import { ActivityIndicator, View } from "react-native";

const Routes = () => {
  const { token } = useSelector((state) => state.auth);
  console.log("Redux Tokken------>", token);

  // return (
  //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //     <ActivityIndicator size="large" />
  //   </View>
  // );

  return (
    <NavigationContainer>
      {token == undefined ? <PreAuth /> : <PostAuth />}
    </NavigationContainer>
  );
};

export default Routes;
