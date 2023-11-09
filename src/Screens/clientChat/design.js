import {
  View,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import SairaText from "../../typography/saira-text";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../Components";
import { StatusBar } from "react-native";
import images from "../../assets/images";
import BoxLeft from "./component/boxLeft";
import BoxRight from "./component/boxRight";

const Design = () => {
  const navigation = useNavigation();
  const data = [
    {
      name: "SERRANO, MANO",
      avatar: images.Profile,
      date: "10-24-2023 12:32AM",
      message: "Hi Alexa! What's Up?",
      from: true,
      read: true,
      sent: false,
    },
    {
      name: "SERRANO, MANO",
      avatar: images.Profile,
      date: "10-24-2023 12:32AM",
      message: "Hi Alexa! What's Up?",
      from: false,
      read: true,
      sent: true,
    },
    {
      name: "SERRANO, MANO",
      avatar: images.Profile,
      date: "10-24-2023 12:32AM",
      message: "Hi Alexa! What's Up?",
      from: true,
      read: true,
      sent: false,
    },
    {
      name: "SERRANO, MANO",
      avatar: images.Profile,
      date: "10-24-2023 12:32AM",
      message: "Hi Alexa! What's Up?",
      from: false,
      read: false,
      sent: true,
    },
  ];

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header isSearch={false} title={"Client Chat"} title2={"SJS Pharmacy"} />,
    });
  }, [navigation]);

  const renderItem = ({ index, item }) =>
    item?.from ? <BoxLeft item={item} /> : <BoxRight item={item} />;

  return (
    <View
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
      style={styles.scrollView}>
      <StatusBar backgroundColor={"#0B6699"} />
      <SairaText
        style={styles?.pharmacyName}
        label={"Order ID   01-69548"}
        fw={"300"}
        color={"#000000"}
        size={12}
        lh={18}
        isUnderLine
      />

      <View style={styles?.contentSubContainerStyle}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => String(index)}
          renderItem={renderItem}
        />
      </View>
      <KeyboardAvoidingView style={styles?.chatInputMainContainer}>
        <View style={styles?.chatInputTextContainer}>
          <TextInput
            placeholder={"Type Your Message Here"}
            placeholderTextColor={"#808080"}
            style={styles?.textInput}
            multiline={true}
          />
          <TouchableOpacity hitSlop={10} activeOpacity={0.6} style={styles.sendButton}>
            <Image source={images.Send} resizeMode="contain" style={styles?.sendButtonImage} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Design;
