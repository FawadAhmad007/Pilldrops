const {StyleSheet, Platform} = require('react-native');

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 14,
    width: '100%',
    height: 100,
    marginBottom: 5,
    backgroundColor: '#EDEDED',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: {
      height: 3,
      width: 0,
    },
    elevation: 3,
    justifyContent: 'space-evenly',
  },
  row_1: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  routeName: {
    fontFamily: 'Saira-Regular',
    fontSize: 12,
  },
  statusContainer: {
    width: 65,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  statusTxt: {
    fontFamily:
      Platform.OS === 'android'
        ? 'Saira_Condensed-Bold'
        : 'Saira Condensed Bold',
    fontWeight: '700',
    fontSize: 12,
    color: 'black',
  },
  borroughTxt: {
    fontFamily:
      Platform.OS === 'android'
        ? 'Saira_Condensed-Bold'
        : 'Saira Condensed Bold',
    fontWeight: '700',
    fontSize: 10,
    color: 'black',
  },
  time: {
    fontFamily:
      Platform.OS === 'android'
        ? 'Saira_Condensed-Regular'
        : 'Saira Condensed Regular',
    fontSize: 9,
    color: 'black',
  },
  statusZoneContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10,
  },
  // // // // // // // ROW 2 // // // // // // //
  row_2: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  coPay: {
    fontFamily:
      Platform.OS === 'android'
        ? 'Saira_Condensed-Bold'
        : 'Saira Condensed Bold',
    fontWeight: '700',
    fontSize: 12,
    color: 'black',
  },
  stops: {
    fontFamily:
      Platform.OS === 'android'
        ? 'Saira_Condensed-Regular'
        : 'Saira Condensed Regular',
    fontSize: 10,
    color: 'black',
  },
  // // // // // // // ROW 3 // // // // // // //
  row_3: {
    borderWidth: 1,
    borderColor: '#595959',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  collected: {
    paddingRight: 5,
    backgroundColor: '#05B321',
    width: '45%',
    textAlign: 'right',
    color: 'white',
  },
  paidTo: {
    width: '55%',
  },
  // // // // // // // ROW 4 // // // // // // //
  row_4: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  readyToStart: {
    fontFamily:
      Platform.OS === 'android'
        ? 'Saira_Condensed-Bold'
        : 'Saira Condensed Bold',
    fontWeight: '700',
    fontSize: 10,
    color: 'black',
  },
  // // // // // // // ROW 5 // // // // // // //
  row_5: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  row_5_leftContainer: {
    width: '43.6%',
    flexDirection: 'row',
    gap: 5,
  },
  row_5_rightContainer: {
    width: '56.4%',
    flexDirection: 'row',
  },
  numberIcon: {
    fontSize: 10,
    fontFamily:
      Platform.OS === 'android'
        ? 'Saira_Condensed-Regular'
        : 'Saira Condensed Regular',
    color: 'black',
  },
  numberIconContainer: {
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
  },
  commonColorStyle: {
    fontFamily:
      Platform.OS === 'android'
        ? 'Saira_Condensed-Bold'
        : 'Saira Condensed Bold',
    fontWeight: '700',
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
  },
  green: {
    backgroundColor: '#05B321',
  },
  red: {
    backgroundColor: '#FB1001',
  },
  orange: {
    backgroundColor: '#F09825',
  },
});

export default styles;
