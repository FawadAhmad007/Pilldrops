import { View, Image } from "react-native";
import React from "react";
import { mvs } from "../../../config/metrices";
import SairaBold from "../../../typography/SairaBold-text";
import SairaText from "../../../typography/saira-text";
import images from "../../../assets/images";

const PhoneNumber = ({ label, number }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: mvs(15),
        alignItems: "center",
        marginVertical: mvs(2),
      }}
    >
      <View style={{ width: "50%" }}>
        <SairaText label={label} fw={"200"} lh={16} size={12} />
      </View>
      <View>
        <SairaBold
          label={number}
          fw={"700"}
          size={12}
          mr={mvs(10)}
          ml={mvs(10)}
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={images.Phone}
          resizeMode="contain"
          style={{ width: mvs(13), height: mvs(13), marginEnd: mvs(15) }}
        />
        <Image
          source={images.Message}
          resizeMode="contain"
          style={{ width: mvs(13), height: mvs(13) }}
        />
      </View>
    </View>
  );
};

export default PhoneNumber;
