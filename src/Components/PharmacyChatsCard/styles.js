import { mvs } from '../../config/metrices';

const { StyleSheet, Platform } = require('react-native');

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderColor: '#EDEDED',
    paddingHorizontal: mvs(8),
    width: '100%',
    height: mvs(110),
    marginBottom: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: mvs(5),
    shadowOffset: {
      height: 3,
      width: 0,
    },
    elevation: 3,
    justifyContent: 'space-evenly',
  },
  row_1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  row_2: {
    marginTop: mvs(5),
    flexDirection: 'row',
    alignItems: 'center',

  },

});

export default styles;
