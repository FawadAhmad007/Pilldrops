const {StyleSheet, Platform} = require('react-native');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 30,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontFamily:
      Platform.OS === 'android'
        ? 'Saira_Condensed-Bold'
        : 'Saira Condensed Bold',
    fontWeight: '700',
    fontSize: 15,
  },

  containerRouteDetail: {
    height: 30,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: {
      height: 3,
      width: 0,
    },
    elevation: 3,
  },

  containerPlain: {
    height: 30,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'white',
  },
  titlePlain: {
    color: 'black',
    fontSize: 12,
  },
});

export default styles;
