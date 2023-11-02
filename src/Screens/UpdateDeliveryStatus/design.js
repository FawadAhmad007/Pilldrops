import { View, ScrollView, StatusBar, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { mvs } from "../../config/metrices";
import images from "../../assets/images";
import SairaBold from "../../typography/SairaBold-text";
import SairaText from "../../typography/saira-text";
import PhoneNumber from "./component/PhoneNumber";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../Components";
import { TouchableOpacity } from "react-native-gesture-handler";
import Status from "./component/Status";

const Design = () => {
  const navigation = useNavigation();
  const [statusCheck, setStatusCheck] = useState(1);
  const [checkPatient, setCheckPatient] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header title={"Update Delivery Status"} />,
    });
  }, [navigation]);
  return (
    <>
      <StatusBar backgroundColor={"#0B6699"} barStyle={"light-content"} />
      <ScrollView>
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

        <View style={{ margin: mvs(1) }}>
          <PhoneNumber label={"Phone Number"} number={"(909) 000 9999"} />
          <PhoneNumber label={"Cell Number"} number={"(909) 000 9999"} />
          <PhoneNumber label={"Work Number"} number={"(909) 000 9999"} />
        </View>

        <View
          style={{
            width: "90%",
            alignSelf: "center",
            backgroundColor: "#F4F4F4",
            borderRadius: mvs(8),
            borderColor: "#fff",
            borderWidth: mvs(1),
            padding: mvs(5),
            shadowColor: "#000",
            marginTop: mvs(3),
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <View
            style={{
              backgroundColor: "#05B321",
              padding: mvs(6),
              alignSelf: "flex-end",
              borderRadius: mvs(2),
              borderColor: "#fff",
              borderWidth: mvs(1),
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SairaBold
              label={"Copay : $ 19.99"}
              fw={"700"}
              size={12}
              color={"#fff"}
            />
          </View>

          <Status
            check={statusCheck == 1}
            name={"By : Driver Name"}
            status={"Collected"}
            onPress={() => setStatusCheck(1)}
          />
          <Status
            check={statusCheck == 2}
            name={"Received By : Carlos "}
            status={"Paid To Pharmacy"}
            onPress={() => setStatusCheck(2)}
          />
          <Status
            check={statusCheck == 3}
            name={"Waived By : Simon"}
            status={"Waived By pharmacy"}
            onPress={() => setStatusCheck(3)}
          />

          <View
            style={{
              flexDirection: "row",
              marginTop: mvs(5),
              justifyContent: "space-between",
            }}
          >
            <SairaBold
              label={"Patient Is Requesting Councelling"}
              fw={"700"}
              size={12}
              color={"#000"}
            />
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginEnd: mvs(20),
                }}
                onPress={() => setCheckPatient(true)}
              >
                <SairaBold
                  label={"Yes"}
                  fw={"700"}
                  size={12}
                  color={"#000"}
                  mr={mvs(4)}
                />
                <View
                  hitSlop={7}
                  style={{
                    width: mvs(10),
                    height: 10,
                    backgroundColor: checkPatient ? "#000" : "#fff",
                    borderRadius: mvs(2),
                    borderWidth: mvs(1),
                    borderColor: "#000",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center" }}
                onPress={() => setCheckPatient(false)}
              >
                <SairaBold
                  label={"No"}
                  fw={"700"}
                  size={12}
                  color={"#000"}
                  mr={mvs(4)}
                />
                <View
                  hitSlop={7}
                  style={{
                    width: mvs(10),
                    height: 10,
                    backgroundColor: !checkPatient ? "#000" : "#fff",
                    borderRadius: mvs(2),
                    borderWidth: mvs(1),
                    borderColor: "#000",
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            marginVertical: mvs(8),
            flexDirection: "row",
            alignSelf: "center",
            alignItems: "flex-end",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <View
            style={{
              paddingVertical: mvs(5),
              paddingHorizontal: mvs(10),
              backgroundColor: "#fff",
              borderRadius: mvs(15),
              borderWidth: mvs(1),
              width: mvs(100),
              borderColor: "#000",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SairaText label={"FACE TO FACE"} fw={"200"} color={"#000"} />
          </View>

          <View
            style={{
              paddingVertical: mvs(10),
              paddingHorizontal: mvs(15),
              backgroundColor: "#0B6699",
              borderRadius: mvs(10),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SairaBold
              label={"Proof Of Delivery"}
              fw={"700"}
              size={12}
              color={"#fff"}
            />
          </View>

          <View
            style={{
              paddingVertical: mvs(5),
              paddingHorizontal: mvs(10),
              backgroundColor: "#fff",
              borderRadius: mvs(15),
              borderWidth: mvs(1),
              width: mvs(100),
              borderColor: "#FF8B03",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SairaText label={"Photo ID"} fw={"200"} color={"#FF8B03"} />
          </View>
        </View>

        <View
          style={{
            padding: mvs(7),
            width: "90%",
            alignSelf: "center",
            backgroundColor: "#F4F4F4",
            borderRadius: mvs(8),
            borderWidth: mvs(1),
            borderColor: "#fff",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                paddingVertical: mvs(5),
                paddingHorizontal: mvs(10),
                backgroundColor: "#fff",
                borderRadius: mvs(5),
                borderWidth: mvs(2),
                borderColor: "#000",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <SairaBold
                label={"Signature"}
                fw={"700"}
                size={12}
                color={"#000"}
                mr={mvs(5)}
                ml={mvs(5)}
              />
              <Image
                source={images.Sign}
                style={{
                  width: mvs(25),
                  height: mvs(25),
                  marginHorizontal: mvs(5),
                }}
                resizeMode="contain"
              />
            </View>

            <View
              style={{
                paddingVertical: mvs(5),
                paddingHorizontal: mvs(10),
                backgroundColor: "#fff",
                borderRadius: mvs(5),
                borderWidth: mvs(2),
                borderColor: "#000",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <SairaBold
                label={"Signature On Delivery Slip"}
                fw={"700"}
                size={12}
                color={"#000"}
                mr={mvs(5)}
                ml={mvs(5)}
              />
              <Image
                source={images.Paper}
                style={{
                  width: mvs(25),
                  height: mvs(25),
                  marginHorizontal: mvs(5),
                }}
                resizeMode="contain"
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <SairaBold
              label={"Send SMS Link To Get Signature"}
              fw={"700"}
              size={12}
              mt={mvs(15)}
              mb={mvs(15)}
              color={"#000"}
            />
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <Image
                source={images.SignSend}
                style={{ width: mvs(30), height: mvs(30) }}
                resizeMode="contain"
              />

              <SairaText
                label={"Send"}
                fw={"200"}
                color={"#000"}
                lh={16}
                size={12}
              />
              <Image
                source={images.Sent}
                style={{
                  width: mvs(12),
                  height: mvs(12),
                  position: "absolute",
                  top: 0,
                  right: 0,
                }}
                resizeMode="contain"
              />
            </View>

            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <Image
                source={images.SignRecive}
                style={{ width: mvs(30), height: mvs(30) }}
                resizeMode="contain"
              />

              <SairaText
                label={"Received"}
                fw={"200"}
                color={"#000"}
                lh={16}
                size={12}
              />
              <Image
                source={images.Read}
                style={{
                  width: mvs(15),
                  height: mvs(15),
                  position: "absolute",
                  top: 0,
                  right: 0,
                }}
                resizeMode="contain"
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <SairaBold
              label={"Capture Images"}
              fw={"700"}
              size={12}
              mt={mvs(15)}
              mb={mvs(15)}
              color={"#000"}
            />
            <TouchableOpacity>
              <Image
                source={images.CameraBlack}
                style={{
                  width: mvs(25),
                  height: mvs(25),
                  marginHorizontal: mvs(5),
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={images.Photo}
                style={{
                  width: mvs(25),
                  height: mvs(25),
                  marginEnd: mvs(20),
                  marginHorizontal: mvs(5),
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <SairaBold
              label={"Driver Note"}
              fw={"700"}
              size={12}
              mt={mvs(15)}
              mb={mvs(15)}
              color={"#000"}
            />
            <View
              style={{
                paddingVertical: mvs(5),
                paddingHorizontal: mvs(10),
                backgroundColor: "#fff",
                borderRadius: mvs(15),
                width: "70%",
                borderWidth: mvs(1),
                borderColor: "#000",
                alignItems: "center",
                justifyContent: "center",
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
                label={"Delivery Note"}
                fw={"700"}
                size={12}
                isUnderLine={true}
                color={"#000"}
                mr={mvs(5)}
                ml={mvs(5)}
              />
              <SairaText
                label={"Attempt and get New number"}
                fw={"200"}
                color={"#000"}
                lh={14}
                size={12}
              />
              <SairaText
                label={"confirm new address"}
                fw={"200"}
                color={"#000"}
                lh={14}
                size={12}
              />
            </View>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginEnd: mvs(20),
              justifyContent: "flex-end",
              marginTop: mvs(9),
            }}
          >
            <SairaBold
              label={"Send To Pharmacy"}
              fw={"700"}
              size={12}
              color={"#000"}
              mr={mvs(4)}
            />
            <View
              hitSlop={7}
              style={{
                width: mvs(10),
                height: 10,
                backgroundColor: "#000",
                borderRadius: mvs(2),
                borderWidth: mvs(1),
                borderColor: "#000",
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            padding: mvs(7),
            width: "90%",
            alignSelf: "center",
            backgroundColor: "#F4F4F4",
            borderRadius: mvs(8),
            marginVertical: mvs(12),
            borderWidth: mvs(1),
            borderColor: "#fff",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <View
            style={{
              paddingVertical: mvs(10),
              paddingHorizontal: mvs(15),
              backgroundColor: "#0B6699",
              borderRadius: mvs(10),
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              marginBottom: mvs(10),
            }}
          >
            <SairaBold
              label={"Contact Pharmacy"}
              fw={"700"}
              size={12}
              color={"#fff"}
            />
          </View>
          <SairaBold
            label={"Patient Is Requesting Councelling"}
            fw={"700"}
            size={12}
            color={"#000"}
          />
          <PhoneNumber
            label={"Pharmacy Phone Number"}
            number={"(909) 000 9999"}
          />
          <PhoneNumber
            label={"Pharmacy Emergency Contact"}
            number={"(909) 000 9999"}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Design;
