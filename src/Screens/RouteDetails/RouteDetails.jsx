import { Dimensions, ScrollView, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { ButtonPD, Header, ICONS, OrderPickupScanCard } from '../../Components'
import styles from './styles'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { Constants } from '../../Utils'
import { Text } from '@rneui/base'

const IconDataField = ({ name, icon, reg = false, }) => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }} >
            {icon}
            <Text style={[styles.orderId, !reg && styles.sairaCondensedRegular]} >{name}</Text>
        </View>
    )
}

const RouteDetails = ({ navigation }) => {

    const handlePressGoback = () => {
        navigation.navigate(Constants.SCREEN_NAME.AllRoutes)
    }

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            header: () => <Header
                type={"routeDetails"}
                title={"Brooklyn/Zone 2"}
                time={"Monday 10-16-2023"}
            />,
        })
    }, [navigation])

    return (
        <ScrollView
            horizontal={true}
            contentContainerStyle={{ width: Dimensions.get("screen").width * 2 }}
        >
            <View style={{ height: "100%", width: "50%" }} >
                <View style={styles.container}  >
                    <View style={styles.header} >
                        <View style={styles.header_r1} >
                            <Text style={styles.editRouteTxt}>35 Stops</Text>
                            <TouchableOpacity style={styles.header_r1_c2} >
                                <Text style={styles.editRouteTxt} >Edit Route</Text>
                                <ICONS.PencilIcon />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.header_r2} >
                            <View style={styles.headCardContainer} >
                                <View style={styles.headContainerStyle} >
                                    <View style={styles.headCardr1} >
                                        <Text style={styles.headCardr1Txt} >PillDrop Facility</Text>
                                        <Text style={styles.headCardr1Txt} >Starting Location</Text>
                                    </View>

                                    <View style={{ flexDirection: "row", paddingHorizontal: 10, paddingLeft: 20, gap: 35 }} >
                                        <IconDataField name={"(909) 000 9999 "} icon={<ICONS.TelephoneIcon color='white' />} />
                                        <IconDataField name={"(909) 000 9999 "} icon={<ICONS.LandlineIcon color='white' />} />
                                    </View>

                                    <View style={{ flexDirection: "row", paddingHorizontal: 10, paddingLeft: 20, gap: 35, alignItems: "center", justifyContent: "space-between" }} >
                                        <IconDataField name={"24-07 94th street, first floor east elmhurst, Forest Hills"} icon={<ICONS.AddressIcon color='white' />} />
                                        <ICONS.PencilIcon color="white" />
                                    </View>



                                </View>


                                <View style={styles.countContainer} >
                                    <ICONS.AddressIcon color="white" />
                                </View>
                            </View>
                        </View>
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.contentContainerStyle}
                        style={styles.scrollView}
                    >
                        <OrderPickupScanCard showIcon={true} />
                        <OrderPickupScanCard showIcon={true} />
                        <OrderPickupScanCard showIcon={true} />
                        <OrderPickupScanCard showIcon={true} />
                        <OrderPickupScanCard showIcon={true} />
                        <OrderPickupScanCard showIcon={true} />
                        <OrderPickupScanCard showIcon={true} />
                        <OrderPickupScanCard showIcon={true} />
                        <OrderPickupScanCard showIcon={true} />
                        <OrderPickupScanCard showIcon={true} />
                        <OrderPickupScanCard showIcon={true} />
                        <OrderPickupScanCard showIcon={true} />

                    </ScrollView>
                    <View style={styles.footer} >
                        <ButtonPD plain={true} title={"Re-optimize Route "} />
                        <View style={{ flexDirection: "row", gap: 10 }} >
                            <ButtonPD onPress={handlePressGoback} routeDetail={true} title={"Go Back"} rightIcon={<ICONS.ChevronIcon />} bgClr="black" />
                            <ButtonPD routeDetail={true} title={"Start Route"} rightIcon={<ICONS.PaperPlaneIcon />} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ height: "100%", width: "50%" }} >
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{ height: "90%", width: Dimensions.get("screen").width }}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        </ScrollView>
    )
}

export default RouteDetails