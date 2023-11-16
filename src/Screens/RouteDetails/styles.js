const { StyleSheet, Platform } = require('react-native');

const styles = StyleSheet.create({
  contentContainerStyle: {
    // backgroundColor: 'transparent',
    paddingBottom: 10,
  },
  scrollView: {
    //backgroundColor: 'green',
    flex: 1,
  },
  container: {
    height: '100%',
  },
  header: {
    paddingHorizontal: 10,
  },
  header_r1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    backgroundColor: '#D9D9D9',
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  header_r1_c2: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  editRouteTxt: {
    color: '#225187',
    fontFamily:
      Platform.OS === 'android'
        ? 'Saira_ExtraCondensed-Bold'
        : 'Saira ExtraCondensed Bold',
    fontWeight: '700',
    fontSize: 18,
  },
  header_r2: {
    marginTop: 5,
  },
  headCardContainer: {
    position: 'relative',
    // marginTop: 10,
    // paddingHorizontal: 10,
  },
  headContainerStyle: {
    borderWidth: 1,
    borderColor: 'white',
    width: '100%',
    minHeight: 52,
    backgroundColor: '#0B6699',
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
    padding: 5,
  },
  countContainer: {
    borderWidth: 1,
    borderColor: 'white',
    position: 'absolute',
    width: 25,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B6699',
    borderRadius: 15,
    top: -10,
    left: 3,
  },
  headCardr1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    paddingLeft: 20,
  },
  headCardr1Txt: {
    fontFamily:
      Platform.OS === 'android'
        ? 'Saira_Condensed-Bold'
        : 'Saira Condensed Bold',
    fontWeight: '700',
    color: 'white',
    fontSize: 12,
  },
  orderId: {
    color: 'white',
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
});

export default styles;
