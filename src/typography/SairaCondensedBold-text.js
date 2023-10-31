
import React, { useContext } from 'react';
import { Text } from 'react-native';
import { mvs } from '../config/metrices';

const SairaCondensedBold = ({
  lh = mvs(14),
  mt,
  ml,
  mr,
  mb,
  label,
  style,
  textAlign,
  numberOfLines = 1,
  size = mvs(10),
  color,
  fw,
  adjustsFontSizeToFit = false,
  isUnderLine,
  ...props
}) => {

  return (
    <Text
      {...props}
      numberOfLines={numberOfLines}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      style={{
        fontSize: size,
        color: color,
        marginTop: mt,
        marginRight: mr,
        marginLeft: ml,
        marginBottom: mb,
        lineHeight: lh,
        fontWeight: fw,
        color: color ? color : '#000000',
        textAlign: textAlign ? 'right' : 'left',
        fontFamily: Platform.OS === 'android'
          ? 'Saira_Condensed-Bold'
          : 'Saira Condensed Bold',
        textDecorationLine: isUnderLine ? 'underline' : "none",
        ...style,
      }}>
      {label}
      {props.children}
    </Text>
  );
};

export default SairaCondensedBold;
