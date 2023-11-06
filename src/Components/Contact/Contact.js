import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { mvs } from "../../config/metrices";
import SairaCondensedBold from "../../typography/SairaCondensedBold-text";
import SairaCondensedRegular from "../../typography/SairaCondensedRegular-text";
import images from "../../assets/images";
import { styles } from "./style";
import PhoneNumber from "./PhoneNumber";

const Contact = () => {
  return (
    <View style={styles.container}>
      <SairaCondensedBold
        label={"Contact Pharmacy Name"}
        color={"#000"}
        size={18}
        lh={28}
        fw={"700"}
      />
      <PhoneNumber
        heading={"Phone"}
        number={"(909) 000 9999 "}
        onPressCall={() => {}}
        onPressMessage={() => {}}
      />
      <PhoneNumber
        heading={"Cell"}
        number={"(909) 000 9999 "}
        onPressCall={() => {}}
        onPressMessage={() => {}}
      />
      <PhoneNumber
        heading={"Work"}
        number={"(909) 000 9999 "}
        onPressCall={() => {}}
        onPressMessage={() => {}}
      />
    </View>
  );
};

export default Contact;
