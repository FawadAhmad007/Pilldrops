import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { setContainerWidth } from "../../Utils/Helpers/Helpers";
import ICONS from "../Icons";
import { useNavigation } from "@react-navigation/native";
import { Constants } from "../../Utils";
import styles from "./styles";
import { Image } from "@rneui/base";
import images from "../../assets/images";
import { mvs } from "../../config/metrices";
import SairaText from "../../typography/saira-text";
import SairaCondensedRegular from "../../typography/SairaCondensedRegular-text";
import SairaBold from "../../typography/SairaBold-text";
import SairaCondensedBold from "../../typography/SairaCondensedBold-text";
import RNCB from "../RouteNameCardButton";

const RouteNameCard = ({ item, index }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => {}}>
      <View
        style={{
          height: mvs(20),
          width: mvs(25),
          backgroundColor: "#fff",
          position: "absolute",
          zIndex: 5,
          top: -mvs(5),
          borderRadius: 20,
          borderWidth: mvs(1),
          borderColor: "#0B6699",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SairaBold label={index + 1} fw={"700"} color={"#0B6699"} />
      </View>
      <View style={styles.containerStyle}>
        {/* Row 1 */}
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "75%" }}>
            <View style={styles.row_1}>
              <View style={{ marginStart: mvs(10) }}>
                <SairaText label={item.PharmacyName} />
                <SairaCondensedBold
                  label={"Order ID: " + item.OrderID}
                  fw={"700"}
                />
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={images.UiwInformation}
                    resizeMode="contain"
                    style={{ width: mvs(15), height: mvs(15) }}
                  />
                  <View
                    style={{
                      backgroundColor: "#05B321",
                      paddingRight: mvs(8),
                      marginStart: mvs(10),
                      borderWidth: mvs(2),
                      borderRadius: mvs(1),
                      borderColor: "#fff",
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,

                      elevation: 5,
                    }}
                  >
                    <SairaBold
                      label={" Copay : $ 19.99"}
                      fw={"700"}
                      color={"#fff"}
                    />
                  </View>
                </View>
                <View
                  style={{
                    borderColor: "#1FA1FF",
                    marginRight: mvs(5),
                    marginTop: mvs(2),
                    borderWidth: mvs(1),
                    justifyContent: "center",
                    width: mvs(75),
                    height: mvs(15),
                    backgroundColor: "#fff",
                    borderRadius: mvs(5),
                    alignItems: "center",
                  }}
                >
                  <SairaCondensedRegular
                    label={"Register"}
                    color={"#1FA1FF"}
                    fw={"400"}
                  />
                </View>
              </View>
            </View>

            {/* Row 2 */}
            <View style={styles.row_1}>
              <SairaBold label={"Name: " + item.name} fw={"600"} isUnderLine />
            </View>

            {/* Row 3 */}
            <View style={styles.row_2_}>
              <Image
                source={images.Phone}
                resizeMode="contain"
                style={{ width: mvs(10), height: mvs(10) }}
              />
              <SairaText label={item.phone} fw={"400"} ml={mvs(5)} />
              <Image
                source={images.Cell}
                resizeMode="contain"
                style={{ width: mvs(10), height: mvs(10), marginLeft: mvs(20) }}
              />
              <SairaText label={item.cell} fw={"400"} ml={mvs(5)} />
            </View>

            {/* Row 4 */}
            <View style={styles.row_1}>
              <View style={styles.row_2_1}>
                <SairaBold label={"Address: "} fw={"400"} numberOfLines={2}>
                  <SairaText label={item.Address} fw={"400"} />
                </SairaBold>
              </View>
              <View style={styles.row_2_2}>
                <SairaBold label={"Apt #" + item.delivered} fw={"400"} />
              </View>
            </View>
          </View>
          <View
            style={{
              width: "25%",
              height: mvs(98),
              borderRadius: mvs(8),
              backgroundColor: "#0B6699",
              borderColor: "#fff",
              borderWidth: mvs(1),
              shadowColor: "#000",
              alignItems: "center",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
            }}
          >
            <SairaCondensedBold
              label={"Delivery Note"}
              fw={"700"}
              mt={mvs(3)}
              isUnderLine={true}
              color={"#fff"}
            />
            <SairaText
              numberOfLines={2}
              label={"Attempt and get New number"}
              fw={"400"}
              textAlign={"center"}
              color={"#fff"}
              mt={2}
              lh={10}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: mvs(5),
          }}
        >
          <RNCB text={"Arrived"} color={"#0B6699"} />
          <RNCB text={"Update Status"} color={"#05B321"} />
          <RNCB text={"Navigate"} color={"#FE9604"} image={true} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={images.Map}
              resizeMode="contain"
              style={{ width: mvs(10), height: mvs(10), marginLeft: mvs(10) }}
            />
            <SairaText label={item.distance + " M"} fw={"400"} ml={mvs(3)} />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={images.Time}
              resizeMode="contain"
              style={{ width: mvs(10), height: mvs(10), marginLeft: mvs(10) }}
            />
            <SairaText label={"02:53 pm"} fw={"400"} ml={mvs(3)} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RouteNameCard;
