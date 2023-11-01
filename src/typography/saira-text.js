import React, { useContext } from "react";
import { Platform, Text } from "react-native";
import { mvs } from "../config/metrices";

const SairaText = ({
  lh = mvs(14),
  mt,
  ml,
  mr,
  mb,
  label,
  style,
  fw,
  textAlign,
  numberOfLines = 1,
  size = mvs(10),
  isUnderLine,
  color,
  ...props
}) => {
  return (
    <>
      <Text
        {...props}
        numberOfLines={numberOfLines}
        style={{
          fontSize: size,
          color: color,
          marginTop: mt,
          marginRight: mr,
          marginLeft: ml,
          marginBottom: mb,
          lineHeight: lh,
          fontWeight: fw,
          color: color ? color : "#000000",
          textAlign: textAlign,
          fontFamily: "Saira",
          textDecorationLine: isUnderLine ? "underline" : "none",
          ...style,
        }}
      >
        {label}
        {props.children}
      </Text>
    </>
  );
};

export default SairaText;
