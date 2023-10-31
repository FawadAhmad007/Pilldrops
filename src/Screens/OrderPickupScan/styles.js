const {StyleSheet, Platform} = require('react-native');

const styles = StyleSheet.create({
  contentContainerStyle: {
    backgroundColor: 'transparent',
    paddingBottom: 10,
  },
  scrollView: {
    backgroundColor: 'white',
    height: '8%',
  },
  container: {
    height: '100%',
  },
  header: {
    borderColor: '#0B6699',
    borderRadius: 5,
    minHeight: '9%',
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
  time: {
    fontFamily:
      Platform.OS === 'android'
        ? 'Saira_Condensed-Bold'
        : 'Saira Condensed Bold',
    fontWeight: '700',
    fontSize: 12,
    minWidth: Platform.OS === 'ios' ? 124 : 150,
    paddingHorizontal: 10,
  },
  header_row_1: {
    borderColor: '#0B6699',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 25,
  },
  header_row_2: {
    borderTopWidth: 1,
    borderColor: '#0B6699',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 25,
  },
  pickupTxt: {
    lineHeight: 20,
    fontFamily:
      Platform.OS === 'android'
        ? 'Saira_ExtraCondensed-Regular'
        : 'Saira ExtraCondensed',
    textAlign: 'center',
    // fontSize:14
  },
  pickupBold: {
    fontFamily:
      Platform.OS === 'android'
        ? 'Saira_ExtraCondensed-Bold'
        : 'Saira ExtraCondensed Bold',
    fontWeight: '700',
    color: '#0B6699',
  },
  pickupstatContainer: {
    minWidth: Platform.OS === 'ios' ? 124 : 150,
    paddingHorizontal: 10,
  },
  horizontalScroll: {
    borderWidth: 1,
    borderColor: '#0B6699',
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
  },
  remove: {
    borderRadius: 10,
    backgroundColor: 'red',
    alignSelf: 'flex-end',
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeTxt: {
    fontFamily:
      Platform.OS === 'android'
        ? 'Saira_Condensed-Bold'
        : 'Saira Condensed Bold',
    fontWeight: '700',
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
  removeBtnContainer: {
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});

export default styles;
