import { View, TouchableOpacity } from "react-native";
import React from "react";
import { mvs } from "../../../config/metrices";
import SairaBold from "../../../typography/SairaBold-text";
import SairaText from "../../../typography/saira-text";

const Status = ({ check, name, status, onPress }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: mvs(5),
      }}
    >
      <TouchableOpacity
        style={{ flexDirection: "row" }}
        hitSlop={7}
        onPress={onPress}
      >
        <View
          hitSlop={7}
          style={{
            width: mvs(10),
            height: 10,
            backgroundColor: check ? "#000" : "#fff",
            borderRadius: mvs(2),
            borderWidth: mvs(1),
            borderColor: "#000",
          }}
        />
        <SairaBold
          label={status}
          fw={"700"}
          ml={mvs(7)}
          size={12}
          color={"#000"}
        />
      </TouchableOpacity>
      <SairaText label={name} fw={"200"} color={"#000"} size={12} />
    </View>
  );
};

export default Status;
