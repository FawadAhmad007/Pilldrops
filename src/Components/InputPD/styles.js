const {StyleSheet, Platform} = require('react-native');

const styles = StyleSheet.create({
  labelStyle: {
    color: 'black',
    fontFamily: Platform.OS === 'android' ? 'Saira-SemiBold' : 'Saira SemiBold',
    fontSize: 14,
  },
  inputStyle: {
    fontFamily:
      Platform.OS === 'android'
        ? 'Saira_Condensed-Regular'
        : 'Saira Condensed Regular',
    fontSize: 14,
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  errorStyle: {
    fontFamily: Platform.OS === 'android' ? 'Saira-Regular' : 'Saira',
  },
  containerStyle: {
    paddingHorizontal: 0,
  },
});

export default styles;
