import React, { useContext } from "react";
import { Platform, Text } from "react-native";
import { mvs } from "../config/metrices";

const SairaCondensedRegular = ({
  lh = mvs(10),
  mt,
  ml,
  mr,
  mb,
  fw,
  label,
  style,
  textAlign,
  numberOfLines = 1,
  size = mvs(10),
  color,
  isUnderLine,
  ...props
}) => {
  return (
    <Text
      {...props}
      numberOfLines={numberOfLines}
      style={{
        fontSize: size,
        color: color,
        includeFontPadding: false,
        marginTop: mt,
        marginRight: mr,
        marginLeft: ml,
        marginBottom: mb,
        lineHeight: lh,
        fontFamily:
          Platform.OS === "android"
            ? "Saira_Condensed-Regular"
            : "Saira Condensed Regular",
        fontWeight: fw,
        color: color ? color : "#000000",
        textAlign: textAlign ? "right" : "left",
        textDecorationLine: isUnderLine ? "underline" : "none",
        ...style,
      }}
    >
      {label}
      {props.children}
    </Text>
  );
};

export default SairaCondensedRegular;
