const {StyleSheet, Platform} = require('react-native');

const styles = StyleSheet.create({
  logoImgContainer: {
    width: '100%',
    height: 44,
    marginVertical: 20,
  },
  logoImg: {
    width: '100%',
    height: '100%',
  },
  userImg: {
    width: 67,
    height: 67,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 30,
    gap: 14,
  },
  nameTxt: {
    fontFamily: Platform.OS === 'android' ? 'Saira-Regular' :'Saira',
    fontSize: 12,
    color: '#3468E7',
  },
  greetingTxt: {
    fontFamily: Platform.OS === 'android' ? 'Saira-SemiBold' : 'Saira SemiBold',
    fontWeight:"600",
    fontSize: 12,
    color: 'black',
  },
  drawerTitleContainer: {
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#F3F3F3',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  filler: {
    width: 16,
    height: 16,
  },
  itemTitleTxt: {
    width: '75%',
    fontFamily: Platform.OS === 'android' ? 'Saira-SemiBold' : 'Saira SemiBold',
    fontWeight:"600",
    fontSize: 14,
    color: '#181818',
  },
  subRoutes: {
    width: '100%',
    paddingLeft: 40,
    paddingVertical: 3,
  },
  subRoutesTxt: {
    fontFamily:
      Platform.OS === 'android' ? 'Saira_Condensed-Regular' : 'Saira Condensed',
    fontSize: 13,
    color: 'black',
  },
});

export default styles;
