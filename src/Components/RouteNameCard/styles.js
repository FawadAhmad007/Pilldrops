import { mvs } from "../../config/metrices";

const { StyleSheet, Platform } = require("react-native");

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderColor: "#EDEDED",
    width: "95%",
    height: mvs(145),
    marginVertical: mvs(4),
    marginStart: mvs(18),
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    padding: mvs(5),
    shadowRadius: mvs(5),
    shadowOffset: {
      height: 3,
      width: 0,
    },
    elevation: 3,
  },
  row_1: {
    flexDirection: "row",
    //alignItems: 'center',
    justifyContent: "space-between",
    marginStart: mvs(11),
  },

  row_2: {
    marginTop: mvs(5),
    marginStart: mvs(11),
    flexDirection: "row",
    alignItems: "center",
  },

  row_2_: {
    marginStart: mvs(11),
    marginTop: mvs(5),
    flexDirection: "row",
    alignItems: "center",
  },

  row_2_2: {
    marginTop: mvs(5),
    width: "20%",
    flexDirection: "row",
    alignItems: "center",
  },

  row_2_1: {
    marginTop: mvs(5),
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
