import React from "react";
import { StyleSheet } from "react-native";
import { mvs } from "../../config/metrices";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D9D9D9",
    padding: mvs(45),
    borderWidth: mvs(1),
    borderColor: "#6F6E6E",
  },
  detailView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingHorizontal: mvs(10),
    shadowColor: "#000",
    marginVertical: mvs(5),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imageStyle: { width: mvs(18), height: mvs(18) },
  detailStyle: { flexDirection: "row", alignItems: "center" },
});
