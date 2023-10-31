import { useIsFocused } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import CloseIcon from '../../Components/Icons/CloseIcon';
import styles from './styles';
import { Constants } from '../../Utils';
import { Text } from '@rneui/base';

const CameraScanner = ({ navigation }) => {
    const { SCREEN_NAME } = Constants;
    const isFocused = useIsFocused();
    const [scanned, setScanned] = useState(false);
    const [hideMessage, setHideMessage] = useState(false);

    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
        try {
            Alert.alert('Scan result', data, [
                { text: 'OK', onPress: () => setScanned(false) },
            ]);
        } catch (e) {
            Alert.alert('Scan Error', e.message, [
                { text: 'OK', onPress: () => setScanned(false) },
            ]);
        }
    };

    const handlePressCross = () => {
        navigation.navigate(SCREEN_NAME.OrderPickupScan);
    };

    useEffect(() => {
        setHideMessage(false);
        setTimeout(() => {
            setHideMessage(true);
        }, 3000);
    }, [isFocused]);

    if (!isFocused) {
        return (
            <View style={styles.loadingScanner}>
                <Text style={styles.loadingTxt}>Loading Scanner</Text>
                <ActivityIndicator color={'black'} />
            </View>
        );
    }
    return (
        <>
            <Camera
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={[StyleSheet.absoluteFill]}>
                <SafeAreaView style={{}}>
                    <TouchableOpacity style={styles.closeIcon} onPress={handlePressCross}>
                        <CloseIcon />
                    </TouchableOpacity>
                </SafeAreaView>

            </Camera>
            <View style={styles.msgContainer} >
                <Text
                    style={[
                        styles.commonColorStyle,
                        { display: hideMessage ? 'none' : 'flex' },
                    ]}
                >
                    {"Position the QR code before the camera to scan your pickup order."}
                </Text>
            </View>
        </>
    );
};

export default CameraScanner;
