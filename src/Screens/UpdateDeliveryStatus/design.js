import { View, Text, StatusBar, Image } from "react-native";
import React, { useEffect } from "react";
import { mvs } from "../../config/metrices";
import images from "../../assets/images";
import SairaBold from "../../typography/SairaBold-text";
import SairaText from "../../typography/saira-text";
import PhoneNumber from "./component/PhoneNumber";

const Design = ({ navigation }) => {
  return (
    <>
      <StatusBar backgroundColor={"#0B6699"} barStyle={"light-content"} />
      <View
        style={{
          alignSelf: "center",
          padding: mvs(4),
          backgroundColor: "#0B6699",
          margin: mvs(5),
          width: "60%",
          borderRadius: mvs(8),
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View>
            <SairaBold label={" Stop # 22"} fw={"700"} color={"#fff"} />
            <SairaBold
              label={" RX Count: 5"}
              fw={"700"}
              color={"#fff"}
              mt={mvs(3)}
            />
          </View>
          <SairaBold
            label={"Order ID : 01-00064"}
            fw={"700"}
            color={"#fff"}
            ml={mvs(25)}
            size={12}
            alignSelf={"center"}
          />
        </View>
        <SairaBold
          label={"Name: Ceballos Natividad"}
          fw={"700"}
          color={"#fff"}
          mt={mvs(2)}
          size={12}
          alignSelf={"center"}
        />
        <SairaBold
          label={"Address : "}
          fw={"700"}
          color={"#fff"}
          mt={mvs(5)}
          size={12}
          mr={mvs(10)}
          ml={mvs(10)}
          numberOfLines={2}
        >
          <SairaText
            label={"24-07 94th street, first floor east elmhurst,"}
            fw={"200"}
            color={"#fff"}
            lh={16}
            size={12}
          />
        </SairaBold>
        <View style={{ position: "absolute", bottom: 5, right: 0 }}>
          <SairaBold
            label={"Apt #  45 C"}
            fw={"700"}
            color={"#fff"}
            mt={mvs(5)}
            size={12}
            mr={mvs(10)}
            ml={mvs(10)}
          />
        </View>
      </View>

      <View style={{ margin: mvs(8) }}>
        <PhoneNumber label={"Phone Number"} number={"(909) 000 9999"} />
        <PhoneNumber label={"Cell Number"} number={"(909) 000 9999"} />
        <PhoneNumber label={"Work Number"} number={"(909) 000 9999"} />
      </View>
    </>
  );
};

export default Design;
