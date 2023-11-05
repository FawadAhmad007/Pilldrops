import React from "react";
import { StyleSheet } from "react-native";
import { mvs } from "../../config/metrices";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: mvs(12),
    backgroundColor: "#DADADA",
    borderColor: "#6F6E6E",
    borderRadius: mvs(6),
    borderWidth: mvs(1),
  },
  detailView: {
    backgroundColor: "#fff",
    paddingHorizontal: mvs(5),
    borderRadius: mvs(6),
    marginVertical: mvs(5),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  btnView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: mvs(5),
    alignSelf: "center",
  },
  btnStyle: {
    width: mvs(60),
    alignItems: "center",
    borderRadius: mvs(4),
    justifyContent: "center",
    marginHorizontal: mvs(10),
  },
});
