const { StyleSheet } = require("react-native");
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const styles = StyleSheet.create({
  contentContainerStyle: {
    backgroundColor: "transparent",
    paddingBottom: 10,
  },
  scrollView: {
    backgroundColor: "white",
    height: "8%",
  },
  addressContainer: {
    marginHorizontal: scale(16),
  },
  pharmacyInfoContainer: {
    alignItems: "center",
  },
  pharmacyName: {
    textAlign: "center",
  },
  orderSummaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: scale(16),
    marginTop: verticalScale(5),
    alignItems: "baseline",
  },
  pharmacySectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: scale(16),
    marginTop: verticalScale(5),
    alignItems: "baseline",
  },
  signContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: scale(18),
    marginTop: verticalScale(5),
  },
  sign: {
    borderWidth: 1,
    width: scale(180),
    justifyContent: "center",
    height: verticalScale(45),
    alignItems: "center",
    marginTop: verticalScale(5),
  },
  orderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: scale(16),
    alignItems: "baseline",
  },
  saveButton: {
    alignSelf: "flex-end",
    borderWidth: 1,
    width: scale(50),
    justifyContent: "center",
    height: verticalScale(19),
    alignItems: "center",
    marginRight: scale(18),
    marginTop: verticalScale(20),
  },
  lineStyle: {
    marginHorizontal: scale(16),
    height: moderateScale(2),
    backgroundColor: "#1F1C1C",
    alignSelf: "center",
    width: scale(160),
  },
  lineStyle2: {
    marginHorizontal: scale(16),
    height: moderateScale(2),
    backgroundColor: "#1F1C1C",
    alignSelf: "center",
    width: scale(130),
  },
  lineStyle3: {
    height: moderateScale(1),
    backgroundColor: "#1F1C1C",
    width: scale(180),
    alignSelf: "flex-end",
  },
});

export default styles;
