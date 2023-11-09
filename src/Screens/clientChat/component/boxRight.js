import { View, Text } from "react-native";
import React from "react";
import styles from "../styles";
import SairaBold from "../../../typography/SairaBold-text";
import SairaText from "../../../typography/saira-text";
import images from "../../../assets/images";
import { Image } from "@rneui/themed";
const BoxRight = ({ item }) => {
  return (
    <View style={styles?.boxRight}>
      <View>
        <View style={styles?.boxRightContainer}>
          <View style={styles?.boxRightSubContainer}>
            <SairaText
              style={styles?.pharmacyName}
              label={item?.date}
              fw={"400"}
              color={"#000000"}
              size={9}
              lh={15}
              mr={7}
              ml={10}
            />
            <SairaText
              style={styles?.pharmacyName}
              label={item?.read ? "Read" : "Sent"}
              fw={"400"}
              color={"#000000"}
              size={9}
              lh={15}
            />
            <Image
              source={item?.read ? images.Read : images.Sent}
              resizeMode="contain"
              style={styles.icon}
            />
          </View>
          <View>
            <SairaBold
              style={styles?.pharmacyName}
              label={item?.name}
              fw={"700"}
              color={"#000000"}
              size={10}
              lh={15}
            />
          </View>
        </View>

        <View style={styles?.boxRightMessageContainer}>
          <SairaBold
            style={styles?.pharmacyName}
            label={item?.message}
            fw={"700"}
            size={10}
            lh={15}
            color={"#000000"}
            textAlign={false}
            ml={20}
            mt={5}
          />
        </View>
      </View>
      <Image source={item?.avatar} resizeMode="contain" style={styles?.avatar} />
    </View>
  );
};

export default BoxRight;
