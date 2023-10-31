const {StyleSheet, Platform} = require('react-native');

const styles = StyleSheet.create({
  cardContainer: {
    position: 'relative',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  containerStyle: {
    borderWidth: 1,
    borderColor: 'white',
    width: '100%',
    minHeight: 100,
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
    padding: 5,
  },
  left: {
    width: '74%',
    paddingHorizontal: 11,
  },
  row_1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pharmacyName: {
    fontFamily: 'Saira',
    fontSize: 10,
    color: 'black',
  },
  orderId: {
    color: 'black',
    fontSize: 12,
    fontFamily:
      Platform.OS === 'android'
        ? 'Saira_Condensed-Bold'
        : 'Saira Condensed Bold',
    fontWeight: '700',
  },
  sairaCondensedRegular: {
    fontFamily:
      Platform.OS === 'android' ? 'Saira_Condensed-Regular' : 'Saira Condensed',
    fontWeight: '400',
  },
  refrigerated: {
    fontSize: 10,
    fontFamily: Platform.OS === 'android' ? 'Saira-SemiBold' : 'Saira SemiBold',
    textAlign: 'center',
    fontWeight: '600',
  },
  refrigeratedContainer: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  copayContainer: {
    minWidth: 83,
    backgroundColor: '#05B321',
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: '#FFF9F9',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: {
      height: 3,
      width: 0,
    },
    elevation: 3,
  },
  r1c2: {
    gap: 5,
  },
  row_2: {
    flexDirection: 'row',
  },
  row_3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  right: {
    width: '26%',
    backgroundColor: '#0B6699',
    borderRadius: 8,
    alignItems: 'center',
    paddingTop: 10,
    borderWidth: 1,
    borderColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 3,
  },
  deliveryNote: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    textDecorationLine: 'underline',
    fontFamily: Platform.OS === 'android' ? 'Saira-Bold' : 'Saira Bold',
  },
  notesDesc: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
    fontFamily:
      Platform.OS === 'android' ? 'Saira_Condensed-Regular' : 'Saira Condensed',
  },
  countContainer: {
    position: 'absolute',
    width: 25,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B6699',
    borderRadius: 15,
    top: -5,
    left: 3,
  },
  countTxt: {
    fontFamily: 'Saira Condensed Bold',
    fontWeight: '700',
    color: 'white',
    fontSize: 12,
  },
});

export default styles;
