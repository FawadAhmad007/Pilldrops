import React, { useContext, useState } from 'react';
import {
    DrawerContentScrollView,
} from '@react-navigation/drawer';

import { Pressable, TouchableOpacity, View } from 'react-native';
import { Image, Text } from '@rneui/base';
//import { LogoFullImg, UserImg } from '../../Assets/images';
import styles from './styles';
import { getGreeting } from '../../Utils/Helpers/Helpers';
import ICONS from '../Icons';
import { useNavigation } from '@react-navigation/native';
import { DRAWER_DATA } from '../../Utils/Constants/Constants';

const DrawerPD = props => {
    const navigation = useNavigation();
    const [expand, setExpand] = useState({
        1: !false,
        2: !false,
        3: !false
    })

    const handlePressTitle = (item, index) => {
        if (item?.data) {
            setExpand({ ...expand, [index]: !expand[index] })
            return;
        }
        navigation.navigate(item?.route)
    }
    return (
        <DrawerContentScrollView contentContainerStyle={{ minHeight: "100%" }} {...props} showsVerticalScrollIndicator={false}  >
            <View style={{ width: "100%", height: "100%" }} >
                <View style={styles.logoImgContainer}>
                    {/* <Image
                        source={LogoFullImg}
                        resizeMode="contain"
                        style={styles.logoImg}
                    /> */}
                </View>
                <View style={styles.userInfoContainer} >
                    {/* <Image
                        source={UserImg}
                        resizeMode="contain"
                        style={styles.userImg}
                        borderRadius={40}
                    /> */}
                    <View >
                        <Text style={styles.greetingTxt} >
                            {getGreeting()}
                        </Text>
                        <Text style={styles.nameTxt} >
                            Talha bin Kafeel
                        </Text>
                    </View>
                </View>

                {
                    DRAWER_DATA.map((item, i) =>
                        <View key={item + i} style={{ borderWidth: 0, }} >
                            <View style={[styles.drawerTitleContainer, { borderTopWidth: i === 0 ? 0 : 1 }]} >
                                <Pressable
                                    // onPress={item.title === "Logout" ? logout : () => handlePressTitle(item, i)}
                                    style={{ flexDirection: "row", alignItems: "center" }}
                                >
                                    <View style={styles.filler} />
                                    <Text style={styles.itemTitleTxt} >{item.title}</Text>
                                    {item.data ? <ICONS.DropdownIcon rotate={expand[i] ? "0deg" : "-90deg"} /> : <View style={styles.filler} />}
                                </Pressable>
                                <View style={{ width: "100%", display: expand[i] ? "flex" : "none" }} >
                                    {
                                        item?.data?.map((subItem, i) =>
                                            <TouchableOpacity
                                                key={subItem + i}
                                                onPress={() => navigation.navigate(subItem.route)}
                                                style={styles.subRoutes}
                                            >
                                                <Text style={styles.subRoutesTxt} >
                                                    {subItem.title}
                                                    {subItem?.changeColor &&
                                                        <Text style={{ color: "#A20000" }} > ( Urgent only )</Text>
                                                    }
                                                </Text>
                                            </TouchableOpacity>
                                        )
                                    }
                                </View>
                            </View>
                        </View>
                    )
                }
            </View>
        </DrawerContentScrollView >
    );
};

export default DrawerPD;
