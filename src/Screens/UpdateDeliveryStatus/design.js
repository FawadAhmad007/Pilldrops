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
import styles from "./style";
import Signature from "../../Components/Signature/Signature";
import { Constants } from "../../Utils";

const Design = () => {
  const navigation = useNavigation();
  const [statusCheck, setStatusCheck] = useState(1);
  const [checkPatient, setCheckPatient] = useState(false);
  const [signatureOpen, setSignatureOpen] = useState(false)
  const { SCREEN_NAME } = Constants;

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header title={"Update Delivery Status"} />,
    });
  }, [navigation]);
  return (
    <>
      <StatusBar backgroundColor={"#0B6699"} barStyle={"light-content"} />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.detailContainer}>
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
          <View style={styles.addressView}>
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

        <View style={styles.confirmContainer}>
          <View style={styles.priceContainer}>
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

          <View style={styles.patientView}>
            <SairaBold
              label={"Patient Is Requesting Councelling"}
              fw={"700"}
              size={12}
              color={"#000"}
            />
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.yesBtn}
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
                  style={[
                    styles.boxStyle,
                    { backgroundColor: checkPatient ? "#000" : "#fff" },
                  ]}
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
                  style={[
                    styles.boxStyle,
                    { backgroundColor: !checkPatient ? "#000" : "#fff" },
                  ]}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnFace}>
            <SairaText label={"FACE TO FACE"} fw={"200"} color={"#000"} />
          </TouchableOpacity>

          <View style={styles.viewProof}>
            <SairaBold
              label={"Proof Of Delivery"}
              fw={"700"}
              size={12}
              color={"#fff"}
            />
          </View>

          <TouchableOpacity
            style={[styles.btnFace, { borderColor: "#FF8B03" }]}
          >
            <SairaText label={"Photo ID"} fw={"200"} color={"#FF8B03"} />
          </TouchableOpacity>
        </View>

        <View style={styles.signtureContainer}>
          <View style={styles.signBtnContainer}>
            <TouchableOpacity
              onPress={() => setSignatureOpen(true)}
              style={styles.signBtn}>
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
                style={styles.signImage}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <View style={styles.signBtn}>
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
                style={styles.signImage}
                resizeMode="contain"
              />
            </View>
          </View>

          <View style={styles.captureView}>
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
                style={styles.imageSent}
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
                style={styles.imageRead}
                resizeMode="contain"
              />
            </View>
          </View>

          <View style={styles.captureView}>
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
                style={styles.imageCapture}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={images.Photo}
                style={styles.imageCapture}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.driveView}>
            <SairaBold
              label={"Driver Note"}
              fw={"700"}
              size={12}
              mt={mvs(15)}
              mb={mvs(15)}
              color={"#000"}
            />
            <View style={styles.driveDetail}>
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
          <TouchableOpacity style={styles.checkPharmacy}>
            <SairaBold
              label={"Send To Pharmacy"}
              fw={"700"}
              size={12}
              color={"#000"}
              mr={mvs(4)}
            />
            <View style={[styles.boxStyle, { backgroundColor: "#000" }]} />
          </TouchableOpacity>
        </View>

        <View style={styles.contectView}>
          <View
            style={[
              styles.viewProof,
              { alignSelf: "center", marginBottom: mvs(10) },
            ]}
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
            goToChat={() => navigation.navigate(SCREEN_NAME.PharmacyChats)}
          />
          <PhoneNumber
            label={"Pharmacy Emergency Contact"}
            number={"(909) 000 9999"}
            goToChat={() => navigation.navigate(SCREEN_NAME.PharmacyChats)}
          />
        </View>

        <View style={styles.btnView}>
          <TouchableOpacity
            style={[styles.btnStyle, { backgroundColor: "#FB1001" }]}
          >
            <SairaBold label={"Failed"} fw={"700"} size={12} color={"#fff"} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btnStyle, { backgroundColor: "#05B321" }]}
          >
            <SairaBold
              label={"Delivered"}
              fw={"700"}
              size={12}
              color={"#fff"}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.reasonView}>
          <View style={styles.reasonContainer}>
            <SairaBold
              label={"Reason"}
              fw={"700"}
              size={12}
              isUnderLine={true}
              color={"#000"}
              mr={mvs(5)}
              ml={mvs(5)}
            />
            <SairaText
              label={"Dropdown and option to write"}
              fw={"200"}
              color={"#000"}
              lh={14}
              size={12}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={[
                styles.btnFace,
                {
                  flexDirection: "row",
                  alignItems: "center",
                  width: mvs(70),
                  marginEnd: mvs(10),
                },
              ]}
            >
              <SairaText label={"Back"} fw={"200"} color={"#000"} />
              <Image
                source={images.BackArrow}
                style={{ width: mvs(10), height: mvs(10), marginStart: mvs(2) }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btnFace, { width: mvs(70) }]}>
              <SairaText label={"Save"} fw={"200"} color={"#1560BD"} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contectView}>
          <View
            style={[
              styles.viewProof,
              { marginTop: mvs(-25), alignSelf: "center" },
            ]}
          >
            <SairaBold
              label={"Contact Pharmacy"}
              fw={"700"}
              size={12}
              color={"#fff"}
            />
          </View>
          <PhoneNumber label={"Contact Facility"} number={"(909) 000 9999"} />
        </View>

      </ScrollView>
      {signatureOpen &&
        <View style={styles.alertView}>

          <Signature
            onCancel={() => setSignatureOpen(false,)}
          />
        </View>

      }
    </>
  );
};

export default Design;
