import { Image, TouchableOpacity } from "react-native";
import React from "react";
import SairaBold from "../../typography/SairaBold-text";
import { mvs } from "../../config/metrices";
import images from "../../assets/images";

const RNCB = ({ color, image, text, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginHorizontal: mvs(3),
        width: mvs(76),
        height: mvs(22),
        backgroundColor: color,
        borderRadius: mvs(8),
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <SairaBold label={text} fw={"700"} color={"#fff"} size={10} />
      {image && (
        <Image
          source={images.Share}
          resizeMode="contain"
          style={{
            width: mvs(15),
            height: mvs(15),
            marginBottom: mvs(6),
            marginLeft: mvs(2),
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default RNCB;
