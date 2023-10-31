const {StyleSheet, Platform} = require('react-native');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoImgContainer: {
    width: 41.95,
    height: 36.29,
  },
  logoImg: {
    width: '100%',
    height: '100%',
  },
  titleTxt: {
    fontFamily:
      Platform.OS === 'android'
        ? 'Saira_Condensed-Bold'
        : 'Saira Condensed Bold',
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  userName: {
    fontFamily:
      Platform.OS === 'android'
        ? 'Saira_Condensed-Bold'
        : 'Saira Condensed Bold',
    color: 'white',
    fontWeight: '700',
    fontSize: 12,
  },
});

export default styles;
