import React, { useContext } from "react";
import { Text } from "react-native";
import { mvs } from "../config/metrices";

const SairaBold = ({
  lh = mvs(14),
  mt,
  ml,
  mr,
  mb,
  label,
  style,
  pt,
  textAlign,
  numberOfLines = 1,
  size = mvs(10),
  fw,
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
        marginTop: mt,
        marginRight: mr,
        includeFontPadding: false,
        marginLeft: ml,
        marginBottom: mb,
        lineHeight: lh,
        fontWeight: fw,

        paddingTop: mvs(1),
        includeFontPadding: false,

        color: color ? color : "#000000",
        textAlign: textAlign ? "right" : "left",
        fontFamily: Platform.OS === "android" ? "Saira-Bold" : "Saira Bold",
        textDecorationLine: isUnderLine ? "underline" : "none",
        ...style,
      }}
    >
      {label}
      {props.children}
    </Text>
  );
};

export default SairaBold;
