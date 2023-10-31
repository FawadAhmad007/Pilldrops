const {StyleSheet, Platform} = require('react-native');

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderColor: 'white',
    width: '100%',
    minHeight: 82,
    marginTop: 5,
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
    flexDirection: 'row',
  },
  left: {
    width: '26%',
    backgroundColor: '#0B6699',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  right: {
    width: '74%',
    paddingHorizontal: 11,
    justifyContent: 'space-evenly',
  },
  row_1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row_2: {
    flexDirection: 'row',
    justifyContent: 'center',
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
    paddingVertical: 4,
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
  greenClr: {
    color: '#05B321',
  },
  redClr: {
    color: '#FB1001',
  },
  orangeClr: {
    color: '#F09825',
  },
  statusTxt: {
    fontFamily:
      Platform.OS === 'android' ? 'Saira_Condensed-Regular' : 'Saira Condensed',
    fontSize: 12,
    color: 'black',
  },
  number: {
    fontWeight: '700',
    fontFamily:
      Platform.OS === 'android'
        ? 'Saira_Condensed-Bold'
        : 'Saira_Condensed Bold',
  },
  name: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: Platform.OS === 'android' ? 'Saira-Bold' : 'Saira Bold',
  },
  stoproutes: {
    color: 'white',
    fontSize: 14,
    fontFamily:
      Platform.OS === 'android' ? 'Saira_Condensed-Regular' : 'Saira Condensed',
  },
});

export default styles;
