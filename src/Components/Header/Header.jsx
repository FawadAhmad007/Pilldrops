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

const Header = ({ onPress, title, value, onChangeText, showBtn = false, isSearch = true, type, time, title2 = "", profile }) => {
    const navigation = useNavigation();

    const handleClickScanner = async () => {
        const hasPermission = await getCameraPermission()
        if (hasPermission) {
            navigation.navigate(Constants.SCREEN_NAME.CameraScanner);
            return;
        }
    }

    if (type === "routeDetails") {
        return (
            <View style={{ paddingHorizontal: 5, backgroundColor: "#0B6699" }} >
                <SafeAreaView style={styles.container} >
                    <TouchableOpacity
                        onPress={onPress ? onPress : () => navigation.toggleDrawer()}
                        style={[styles.logoImgContainer, { width: "25%", }]}
                    >
                        <Image
                            placeholderStyle={{ backgroundColor: "#0B6699" }}
                            source={images.LogoMini}
                            resizeMode="contain"
                            style={{ width: 41.95, height: "100%" }}
                        />
                    </TouchableOpacity>
                    <View style={{ width: "50%", alignItems: "center" }} >
                        <Text style={styles.titleTxt} >{title}</Text>
                        <Text style={styles.titleTxt} >{time}</Text>
                    </View>
                    <View style={{ alignItems: "center", width: "25%" }} >
                        <Image
                            source={profile?.profilefile ? { uri: profile?.profilefile } : images.UserImg}
                            resizeMode="contain"
                            style={{ width: 33, height: 33, borderRadius: 17 }}
                        />
                        <Text style={styles.userName} >{profile?.name}</Text>
                    </View>
                </SafeAreaView>
            </View>
        )
    }

    return (
        <View style={{ paddingHorizontal: 5, backgroundColor: "#0B6699" }} >
            <SafeAreaView style={styles.container} >
                <TouchableOpacity
                    onPress={onPress ? onPress : () => navigation.toggleDrawer()}
                    style={styles.logoImgContainer}
                >
                    <Image
                        placeholderStyle={{ backgroundColor: "#0B6699" }}
                        source={images.LogoMini}
                        resizeMode="contain"
                        style={styles.logoImg}
                    />
                </TouchableOpacity>
                <View style={{ width: "80%", alignItems: "center" }} >
                    <Text style={styles.titleTxt} >{title}</Text>
                    {isSearch ? <SearchInput
                        onChangeText={onChangeText}
                        value={value}
                    /> : title2 ? <Text style={styles.titleTxt} >{title2}</Text> : null}
                </View>
                {
                    showBtn
                        ? <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }} >
                            <TouchableOpacity onPress={handleClickScanner} >
                                <ICONS.CameraIcon />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <ICONS.PlusIcon />
                            </TouchableOpacity>
                        </View>
                        : <View style={{ width: 47 }} />

                }
            </SafeAreaView>
        </View>
    )
}

export default Header