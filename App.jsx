/** @format */

import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/Navigation/Routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persister, store } from './src/redux/store';
//import { persistor, store } from './src/Utils/Redux/store/Store';
import Toast from 'react-native-toast-message';

const App = () => {
	// useEffect(() => {
	//   if (Platform.OS === 'android') {
	//     SplashScreen.hide();
	//   }
	// }, []);

	return (
		<Provider store={store}>
			<PersistGate
				loading={null}
				persistor={persister}>
				<StatusBar barStyle={'dark-content'} />
				<Routes />
				<Toast />
			</PersistGate>
		</Provider>
	);
};

export default App;
