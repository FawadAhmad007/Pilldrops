import { View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { mvs } from "../../config/metrices";
import SairaCondensedBold from "../../typography/SairaCondensedBold-text";
import { styles } from "./style";
import images from "../../assets/images";

const Confirmation = ({
  headerRed,
  headerBlack,
  detail,
  onPressNo,
  onPressYes,
  icon,
}) => {
  return (
    <View style={styles.container}>
      <SairaCondensedBold label={headerRed} color={"red"} fw={"700"} size={12}>
        <SairaCondensedBold
          label={headerBlack}
          color={"#000"}
          fw={"700"}
          size={12}
        />
      </SairaCondensedBold>

      <View style={styles.detailView}>
        <SairaCondensedBold
          label={detail}
          color={"#000"}
          fw={"700"}
          size={14}
          lh={25}
        />
        <Image
          source={icon}
          style={{ width: mvs(20), height: mvs(20) }}
          resizeMode="contain"
        />
      </View>

      <View style={styles.btnView}>
        <TouchableOpacity
          style={[styles.btnStyle, { backgroundColor: "red" }]}
          onPress={onPressNo}
        >
          <SairaCondensedBold
            label={"No"}
            color={"#fff"}
            fw={"700"}
            size={12}
            lh={24}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnStyle, { backgroundColor: "#05B321" }]}
          onPress={onPressYes}
        >
          <SairaCondensedBold
            label={"Yes"}
            color={"#fff"}
            fw={"700"}
            size={12}
            lh={24}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Confirmation;
