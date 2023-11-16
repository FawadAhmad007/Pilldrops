import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useCallback, useContext, useEffect } from 'react'
import styles from './styles'

import { Image, Input } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import ICONS from '../Icons'
import SearchInput from '../SearchInput'
import { Constants } from '../../Utils'
import { AuthContext } from '../../Context/AuthContext'
import images from '../../assets/images'
import { mvs } from '../../config/metrices'

const RouteNameHeader = ({ onPress, title, value, onChangeText, showBtn = false, type, time }) => {
    const navigation = useNavigation();
    // const { getCameraPermission } = useContext(AuthContext)

    const handleClickScanner = async () => {
        const hasPermission = await getCameraPermission()
        if (hasPermission) {
            navigation.navigate(Constants.SCREEN_NAME.CameraScanner);
            return;
        }
    }

    return (
        <View style={{ paddingHorizontal: 5, backgroundColor: "#fff" }} >
            <SafeAreaView style={styles.container} >
                <TouchableOpacity
                    onPress={onPress ? onPress : () => navigation.toggleDrawer()}
                    style={styles.logoImgContainer}
                >
                    <Image
                        placeholderStyle={{ backgroundColor: "#0B6699" }}
                        source={images.LogoMiniBlue}
                        resizeMode="contain"
                        style={styles.logoImg}
                    />
                </TouchableOpacity>
                <View style={{ width: "95%", justifyContent: "center", }} >

                    <View style={{ flexDirection: "row", width: "90%", justifyContent: "space-between" }}>
                        <View />
                        <Text style={styles.titleTxt} >{title}</Text>
                        {
                            showBtn
                                ? <View style={{ flexDirection: "row", alignItems: "center", gap: mvs(10) }} >
                                    <TouchableOpacity onPress={handleClickScanner} >
                                        <Image
                                            source={images.CameraBlue}
                                            resizeMode="contain"
                                            style={{ width: mvs(20), height: mvs(16) }}

                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image
                                            source={images.PlusBlue}
                                            resizeMode="contain"
                                            style={{ width: mvs(16), height: mvs(16) }}

                                        />
                                    </TouchableOpacity>
                                </View>
                                : <View style={{ width: 47 }} />

                        }
                    </View>
                    <View style={{ width: "90%", alignItems: "center" }} >
                        <SearchInput
                            onChangeText={onChangeText}
                            value={value}
                            icon={images.Map}
                        />
                    </View>
                </View>

            </SafeAreaView>
        </View>
    )
}

export default RouteNameHeader