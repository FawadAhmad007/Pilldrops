import { ScrollView, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import SairaBold from "../../typography/SairaBold-text";
import SairaText from "../../typography/saira-text";
import SairaCondensedRegular from "../../typography/SairaCondensedRegular-text";
import SairaCondensedBold from "../../typography/SairaCondensedBold-text";
import { useNavigation } from "@react-navigation/native";
import RouteNameHeader from "../../Components/RouteNameHeader/Header";
import { Header } from "../../Components";
import { StatusBar } from "react-native";

const Design = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => (
        <Header
          isSearch={false}
          title2={"SELECT PHARMACY"}
          title={"10-16-2023 TO 10-22-2023 INVOICE"}
        />
      ),
    });
  }, [navigation]);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
      style={styles.scrollView}>
      <StatusBar backgroundColor={"#0B6699"} />
      <View style={styles?.pharmacyInfoContainer}>
        <SairaBold
          style={styles?.pharmacyName}
          label={"Medi-Serv Pharmacy "}
          fw={"800"}
          color={"#1F1C1C"}
          size={20}
          lh={31.48}
        />
        <SairaCondensedRegular
          label={"2611 Webster Ave, Bronx NY 10458 "}
          size={14}
          color={"#1F1C1C"}
          fw={"500"}
          mt={-8}
          lh={22.04}
        />
        <SairaCondensedRegular
          label={"Phone: (718)395-4000 Fax :(917)473-6355"}
          color={"#1F1C1C"}
          size={14}
          fw={"500"}
          lh={22.04}
          mt={-8}
        />
        <View style={styles.lineStyle} />
      </View>
      <View style={styles?.orderSummaryContainer}>
        <SairaCondensedBold
          label={"Total order = 450"}
          size={16}
          color={"#1F1C1C"}
          fw={"700"}
          lh={25.18}
          textAlign={false}
        />
        <SairaCondensedBold
          label={"Total Amount = $2100.50"}
          color={"#1F1C1C"}
          size={20}
          fw={"700"}
          lh={31.48}
          textAlign
        />
      </View>
      <View style={styles?.addressContainer}>
        <SairaCondensedBold
          label={"Get Forms Signed = 0 "}
          size={16}
          color={"#1F1C1C"}
          fw={"700"}
          lh={25.18}
          textAlign={false}
        />
        <SairaCondensedBold
          label={"HIPA FORM = 0, NF AOB FORM = 0, LIEN FORM = 0"}
          size={16}
          color={"#1F1C1C"}
          fw={"700"}
          lh={25.18}
          textAlign={false}
        />
      </View>
      <View style={styles?.orderContainer}>
        <SairaCondensedBold
          label={"Copay orders = 30"}
          size={16}
          color={"#1F1C1C"}
          fw={"700"}
          lh={25.18}
          textAlign={false}
        />
        <SairaCondensedBold
          label={"Copay's Collected = $650.70"}
          color={"#1F1C1C"}
          size={20}
          fw={"700"}
          lh={31.48}
          textAlign
        />
      </View>
      <SairaBold
        style={styles?.pharmacyName}
        label={"Pharmacy Section"}
        fw={"800"}
        color={"#1F1C1C"}
        size={20}
        lh={31.48}
      />
      <View style={styles.lineStyle2} />
      <View style={styles?.pharmacySectionContainer}>
        <SairaBold
          label={"Copay Receiver Name :"}
          size={18}
          color={"#1F1C1C"}
          fw={"800"}
          lh={25.18}
        />
        <View style={styles.lineStyle3} />
      </View>
      <View style={styles?.pharmacySectionContainer}>
        <SairaBold label={"Receiving Date :"} size={18} color={"#1F1C1C"} fw={"800"} lh={25.18} />
        <View style={styles.lineStyle3} />
      </View>
      <View style={styles?.signContainer}>
        <SairaBold
          label={"Copay Receiver Sign :"}
          size={18}
          color={"#1F1C1C"}
          fw={"800"}
          lh={25.18}
          mt={40}
        />

        <View style={styles?.sign}>
          <SairaBold label={"Sign Here"} size={18} color={"#1F1C1C"} fw={"800"} lh={25.18} />
        </View>
      </View>
      <SairaBold
        style={styles?.pharmacyName}
        label={"Facility Section"}
        fw={"800"}
        color={"#1F1C1C"}
        size={20}
        lh={31.48}
      />
      <View style={styles.lineStyle2} />
      <View style={styles?.pharmacySectionContainer}>
        <SairaBold label={"PD Receiver Name :"} size={18} color={"#1F1C1C"} fw={"800"} lh={25.18} />
        <View style={styles?.pharmacyInfoContainer}>
          <SairaText
            label={"Account Holder Name Auto Generated"}
            color={"#1F1C1C"}
            size={16}
            fw={"400"}
            lh={25.18}
          />
          <View style={styles.lineStyle3} />
        </View>
      </View>
      <View style={styles?.pharmacySectionContainer}>
        <SairaBold label={"Form of payment :"} size={18} color={"#1F1C1C"} fw={"800"} lh={25.18} />
        <View style={styles?.pharmacyInfoContainer}>
          <SairaText
            label={"Check/Cash/Credit/Debit Card/"}
            color={"#1F1C1C"}
            size={16}
            fw={"400"}
            lh={25.18}
          />
          <View style={styles.lineStyle3} />
          <SairaText label={"Bank Account"} color={"#1F1C1C"} size={16} fw={"400"} lh={25.18} />
        </View>
      </View>
      <View style={styles?.pharmacySectionContainer}>
        <SairaBold label={"Receiving Date :"} size={18} color={"#1F1C1C"} fw={"800"} lh={25.18} />
        <View style={styles?.pharmacyInfoContainer}>
          <SairaText
            label={"Current Date Auto"}
            color={"#1F1C1C"}
            size={16}
            fw={"400"}
            lh={25.18}
          />
          <View style={styles.lineStyle3} />
        </View>
      </View>
      <View style={styles?.signContainer}>
        <SairaBold
          label={"PD Receiver Sign :"}
          size={18}
          color={"#1F1C1C"}
          fw={"800"}
          lh={25.18}
          mt={37}
        />

        <View style={styles?.sign}>
          <SairaBold label={"Sign Here"} size={18} color={"#1F1C1C"} fw={"800"} lh={25.18} />
        </View>
      </View>
      <TouchableOpacity style={styles?.saveButton}>
        <SairaText label={"Save"} size={14} color={"#1F1C1C"} fw={"800"} lh={20} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Design;
