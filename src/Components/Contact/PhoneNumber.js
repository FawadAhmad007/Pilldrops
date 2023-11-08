import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./style";
import SairaCondensedRegular from "../../typography/SairaCondensedRegular-text";
import images from "../../assets/images";
import { mvs } from "../../config/metrices";

const PhoneNumber = ({ number, heading, onPressCall, onPressMessage }) => {
  return (
    <View style={styles.detailView}>
      <View style={styles.detailStyle}>
        <SairaCondensedRegular
          label={heading + " : "}
          lh={28}
          color={"#000"}
          size={18}
          fw={"200"}
        />
        <SairaCondensedRegular
          label={number}
          lh={28}
          ml={mvs(10)}
          color={"#000"}
          size={18}
          fw={"200"}
        />
      </View>
      <View style={styles.detailStyle}>
        <TouchableOpacity style={{ margin: mvs(15) }} onPress={onPressCall}>
          <Image
            source={images.Phone}
            style={styles.imageStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ margin: mvs(15) }} onPress={onPressMessage}>
          <Image
            source={images.Message}
            style={styles.imageStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhoneNumber;
