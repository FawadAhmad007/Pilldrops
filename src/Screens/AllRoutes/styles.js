const {StyleSheet, Platform} = require('react-native');

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    // borderColor: 'red',
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
  },
  dateTxt: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'android' ? 'Saira-Bold' : 'Saira Bold',
    fontWeight: '700',
    fontSize: 14,
    color: 'black',
  },
});

export default styles;
