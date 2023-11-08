import { View } from "react-native";
import React from "react";
import styles from "../styles";
import SairaBold from "../../../typography/SairaBold-text";
import SairaText from "../../../typography/saira-text";
import images from "../../../assets/images";
import { Image } from "@rneui/themed";
const BoxLeft = ({ item }) => {
  return (
    <View style={styles?.boxLeft}>
      <View style={styles?.boxLeftContainer}>
        <Image source={item?.avatar} resizeMode="contain" style={styles?.avatar} />
        <View>
          <View style={styles?.boxLeftSubContainer}>
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
            <View style={styles?.boxLeftDetailContainer}>
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

              <SairaText
                style={styles?.pharmacyName}
                label={item?.date}
                fw={"400"}
                color={"#000000"}
                size={9}
                lh={15}
                mr={17}
              />
            </View>
          </View>
          <View style={styles?.boxLeftMessageContainer}>
            <SairaBold
              style={styles?.pharmacyName}
              label={item?.message}
              fw={"700"}
              size={10}
              lh={15}
              color={"#E2E2E2"}
              textAlign={false}
              ml={20}
              mt={5}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default BoxLeft;
