const {StyleSheet, Platform} = require('react-native');

const styles = StyleSheet.create({
  closeIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  commonColorStyle: {
    fontFamily:
      Platform.OS === 'android'
        ? 'Saira_Condensed-Bold'
        : 'Saira Condensed Bold',
    fontWeight: '700',
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
  },
  msgContainer: {
    width: '100%',
    position: 'absolute',
    top: '85%',
  },
});

export default styles;
