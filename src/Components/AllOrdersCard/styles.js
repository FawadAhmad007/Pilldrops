const {StyleSheet, Platform} = require('react-native');

const styles = StyleSheet.create({
  cardContainer: {
    position: 'relative',
    marginTop: 18,
    paddingHorizontal: 10,
  },
  containerStyle: {
    borderWidth: 1,
    borderColor: 'white',
    width: '100%',
    minHeight: 105,
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
    width: '70%',
    paddingHorizontal: 11,
  },
  pharmacyName: {
    color: 'black',
    fontFamily: 'Saira',
    fontSize: 10,
  },
  orderId: {
    fontFamily:
      Platform.OS === 'android'
        ? 'Saira_Condensed-Bold'
        : 'Saira Condensed Bold',
    fontWeight: '700',
    fontSize: 13,
    color: 'black',
  },
  name: {
    fontFamily:
      Platform.OS === 'android'
        ? 'Saira_Condensed-ExtraBold'
        : 'Saira Condensed ExtraBold',
    fontWeight: '800',
    fontSize: 13,
    color: 'black',
  },
  address: {
    fontFamily:
      Platform.OS === 'android' ? 'Saira_Condensed-Regular' : 'Saira Condensed',
    color: 'black',
    fontSize: 10,
  },
  addressBold: {
    fontFamily:
      Platform.OS === 'android'
        ? 'Saira_Condensed-Bold'
        : 'Saira Condensed Bold',
    fontWeight: '700',
  },
  deliveredBy: {
    fontFamily: 'Saira',
    fontSize: 10,
    color: 'black',
  },
  deliveredByBold: {
    fontFamily: Platform.OS === 'android' ? 'Saira-Bold' : 'Saira Bold',
    fontWeight: '700',
  },
  deliveredAt: {
    fontFamily:
      Platform.OS === 'android' ? 'Saira_Condensed-Regular' : 'Saira Condensed',
    color: 'black',
    fontSize: 10,
  },
  right: {
    width: '30%',
    justifyContent: 'space-evenly',
  },
  commonContainer: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#05B321',
    borderRadius: 2,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 3,
  },
  descTxt: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    fontFamily: Platform.OS === 'android' ? 'Saira-Bold' : 'Saira Bold',
    fontWeight: '700',
  },
  proof: {
    backgroundColor: '#0B6699',
    borderRadius: 2,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 3,
    height: 16,
    justifyContent: 'center',
    margin: 5,
  },
  proofTxt: {
    fontSize: 10,
    textAlign: 'center',
    color: 'white',
    fontFamily:
      Platform.OS === 'android'
        ? 'Saira_Condensed-Bold'
        : 'Saira Condensed Bold',
    fontWeight: '700',
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
