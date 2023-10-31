const {StyleSheet, Platform} = require('react-native');

const styles = StyleSheet.create({
  inputStyle: {
    top: Platform.OS === 'android' ? 0.5 : 0,
    fontSize: 11,
    color: 'white',
    fontFamily:
      Platform.OS === 'android'
        ? 'Saira_ExtraCondensed-Regular'
        : 'Saira ExtraCondensed',
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderColor: '#B0B6C3',
    height: 25,
    borderRadius: 25,
    paddingHorizontal: 5,
  },
  errorStyle: {
    height: 0,
  },
  containerStyle: {
    paddingHorizontal: 0,
  },
});

export default styles;
