const { StyleSheet } = require("react-native");
import { mvs } from "../../config/metrices";

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
    marginHorizontal: mvs(16),
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
    marginHorizontal: mvs(16),
    marginTop: mvs(5),
    alignItems: "baseline",
  },
  pharmacySectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: mvs(16),
    marginTop: mvs(5),
    alignItems: "baseline",
  },
  signContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: mvs(18),
    marginTop: mvs(5),
  },
  sign: {
    borderWidth: 1,
    width: mvs(180),
    justifyContent: "center",
    height: mvs(45),
    alignItems: "center",
    marginTop: mvs(5),
    borderRadius: mvs(4),
  },
  orderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: mvs(16),
    alignItems: "baseline",
  },
  saveButton: {
    alignSelf: "flex-end",
    borderWidth: 1,
    width: mvs(50),
    // justifyContent: "center",
    height: mvs(24),
    alignItems: "center",
    marginRight: mvs(18),
    marginTop: mvs(20),
    borderRadius: mvs(4),
  },
  lineStyle: {
    marginHorizontal: mvs(16),
    height: mvs(2),
    backgroundColor: "#1F1C1C",
    alignSelf: "center",
    width: mvs(175),
  },
  lineStyle2: {
    marginHorizontal: mvs(16),
    height: mvs(2),
    backgroundColor: "#1F1C1C",
    alignSelf: "center",
    width: mvs(140),
  },
  lineStyle3: {
    height: mvs(1),
    backgroundColor: "#1F1C1C",
    width: mvs(180),
    alignSelf: "flex-end",
  },
});

export default styles;
