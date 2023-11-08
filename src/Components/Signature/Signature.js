import React, { useRef } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import SignatureScreen from "react-native-signature-canvas";
import { mvs } from "../../config/metrices";
import images from "../../assets/images";
import SairaCondensedBold from "../../typography/SairaCondensedBold-text";
import { styles } from "./style";

const Signature = ({ onCancel }) => {
  const ref = useRef();

  const handleOK = (signature) => {
    console.log(signature);
  };

  const handleClear = () => {
    ref.current.clearSignature();
  };

  const handleConfirm = () => {
    console.log("end");
    ref.current.readSignature();
  };

  const style = `.m-signature-pad--footer {display: none; margin: 0px;}`;

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <SairaCondensedBold
          label={"Please Sign Here"}
          fw={"700"}
          isUnderLine={true}
          color={"#000"}
          lh={25}
          size={14}
        />
        <Image
          source={images.Sign}
          style={styles.imageStyle}
          resizeMode="contain"
        />
      </View>
      <View style={styles.signContainer}>
        <SignatureScreen ref={ref} onOK={handleOK} webStyle={style} />
        <View style={styles.lineStyle} />
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={onCancel}
          style={styles.btnStyle}>
          <SairaCondensedBold
            label={"Cancel"}
            color={"#000"}
            lh={25}
            size={13}
            fw={"400"}
          />
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={handleClear}
            style={[
              styles.btnStyle,
              {
                backgroundColor: "#fff",
                marginEnd: mvs(10),
              },
            ]}
          >
            <SairaCondensedBold
              label={"Retake"}
              color={"#000"}
              lh={25}
              size={13}
              fw={"400"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleConfirm}
            style={[
              styles.btnStyle,
              {
                backgroundColor: "#fff",
              },
            ]}
          >
            <SairaCondensedBold
              label={"Save"}
              color={"#000"}
              lh={25}
              size={13}
              fw={"400"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signature;
