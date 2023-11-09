const { StyleSheet } = require("react-native");
import { mvs } from "../../config/metrices";

const styles = StyleSheet.create({
  contentContainerStyle: {
    backgroundColor: "transparent",
    paddingBottom: 10,
  },
  contentSubContainerStyle: { flex: 1, marginHorizontal: mvs(5) },
  scrollView: {
    backgroundColor: "white",
    height: "100%",
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
  boxRight: { flexDirection: "row", justifyContent: "flex-end", marginBottom: mvs(5) },
  boxLeft: { alignItems: "flex-start", marginBottom: mvs(5) },
  avatar: { width: mvs(25), height: mvs(25) },
  boxRightMessageContainer: {
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#E2E2E2",
    minHeight: mvs(50),
    borderRadius: 12,
    alignSelf: "flex-end",
  },
  boxLeftMessageContainer: {
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#0B6699",
    minHeight: mvs(50),
    borderRadius: 12,
  },
  icon: { marginRight: mvs(7), width: mvs(15), height: mvs(15) },
  boxRightContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "80%",
    marginRight: mvs(8),
    alignSelf: "flex-end",
  },
  boxRightSubContainer: {
    flexDirection: "row",
    width: "40%",
  },
  boxLeftContainer: { flexDirection: "row" },
  boxLeftSubContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "80%",
    marginLeft: mvs(8),
  },
  boxLeftDetailContainer: {
    flexDirection: "row",
    width: "40%",
    justifyContent: "flex-end",
  },
  chatInputMainContainer: {
    flex: 1,
    justifyContent: "flex-end",
    borderWidth: 1,
    borderColor: "#E2E2E2",
    paddingVertical: mvs(10),
    backgroundColor: "#E2E2E2",
    borderRadius: mvs(12),
    margin: mvs(5),
    maxHeight: mvs(80),
    paddingHorizontal: mvs(5),
  },
  chatInputTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    maxHeight: mvs(120),
    minHeight: mvs(100),
    width: "80%",
    padding: mvs(7),
    textAlign: "left",
    color: "#000000",
    fontSize: 10,
  },
  sendButton: {
    width: mvs(30),
    height: mvs(30),
    backgroundColor: "white",
    borderRadius: mvs(50),
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
  },
  sendButtonImage: { width: mvs(20), height: mvs(20) },
});

export default styles;
