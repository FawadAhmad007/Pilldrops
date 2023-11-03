import { View, Text } from "react-native";
import React, { useRef, useState } from "react";
import SignatureScreen from "react-native-signature-canvas";

const Signature = () => {
  const ref = useRef();
  const [sign, setSign] = useState();

  // Called after ref.current.readSignature() reads a non-empty base64 string
  const handleOK = (signature) => {
    console.log(signature);
    setSign(setSign);
  };

  // Called after ref.current.readSignature() reads an empty string
  const handleEmpty = () => {
    console.log("Empty");
  };

  // Called after ref.current.clearSignature()
  const handleClear = () => {
    console.log("clear success!");
  };

  // Called after end of stroke
  const handleEnd = () => {
    ref.current.readSignature();
  };

  // Called after ref.current.getData()
  const handleData = (data) => {
    console.log(data);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <SignatureScreen
        ref={ref}
        onEnd={handleEnd}
        onOK={handleOK}
        onEmpty={handleEmpty}
        onClear={handleClear}
        onGetData={handleData}
        autoClear={false}
        descriptionText={sign}
      />
    </View>
  );
};

export default Signature;
