import { mvs } from '../../config/metrices';

const { StyleSheet, Platform } = require('react-native');

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: mvs(8),
    marginVertical: mvs(8)
  },
  innerContainer: {
    padding: mvs(10),
    borderRadius: mvs(10),
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    alignItems: "center",
    backgroundColor: "#fff"
  },

});

export default styles;
