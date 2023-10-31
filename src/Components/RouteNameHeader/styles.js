import { mvs } from '../../config/metrices';

const { StyleSheet, Platform } = require('react-native');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'space-between',
  },
  logoImgContainer: {
    width: mvs(48),
    height: mvs(50),
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
    color: '#0B6699',
    fontSize: mvs(20),
    fontWeight: '700',
    alignSelf: "center",

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
