import React from "react";
import { StyleSheet } from "react-native";
import { mvs } from "../../config/metrices";

export const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    padding: mvs(13),
    backgroundColor: "#DADADA",
    borderColor: "#0B6699",
    borderWidth: mvs(1),
    borderRadius: mvs(6),
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  imageStyle: { height: mvs(20), width: mvs(20), marginLeft: mvs(5) },
  signContainer: {
    backgroundColor: "#fff",
    height: mvs(120),
    width: "100%",
    borderWidth: mvs(2),
    padding: mvs(2),
    borderColor: "#000",
    marginVertical: mvs(5),
    borderRadius: mvs(6),
  },
  lineStyle: {
    width: "95%",
    borderTopWidth: mvs(1),
    borderColor: "#000",
    alignSelf: "center",
    marginBottom: mvs(10),
  },
  btnStyle: {
    width: mvs(80),
    alignItems: "center",
    borderRadius: mvs(4),
    borderWidth: mvs(1),
    backgroundColor: "red",
    justifyContent: "center",
  },
});
