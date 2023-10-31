const {StyleSheet, Platform} = require('react-native');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImgContainer: {
    width: '100%',
    height: 69,
  },
  logoImg: {
    width: '100%',
    height: '100%',
  },
  loginTitle: {
    fontFamily: 'ZenDots-Regular',
    fontSize: 20,
    color: '#0B6699',
    marginVertical: 20,
  },
  loginFormContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 60,
  },
  RememberForget: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  bottomTxtStyle: {
    color: '#4760F5',
    fontFamily: Platform.OS === "android"?"Saira_Condensed-Regular": 'Saira Condensed SemiBold',
    fontSize: 14,
  },
  loginBtn: {
    backgroundColor: '#0B6699',
    height: 45,
    width: 162,
    borderRadius: 8,
    justifyContent: 'center',
  },
  loginBtnTxt: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Saira-Bold',
    fontSize: 16,
  },
});

export default styles;
