import { Text, ScrollView, FlatList, Vibration, View, StatusBar, Dimensions } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { AllOrdersCard, AllRoutesCard, DeliveryTeamCard, Header, OrderPickupScanCard } from '../../Components'
import { formatDate } from '../../Utils/Helpers/Helpers'
import { styles } from "./style";
import { useNavigation } from '@react-navigation/native'
import PharmacyChatsCard from '../../Components/PharmacyChatsCard'
import { Image } from '@rneui/themed'
import images from '../../assets/images'
import { mvs } from '../../config/metrices'
import SairaCondensedRegular from '../../typography/SairaCondensedRegular-text'
import ChatFilter from '../../Components/ChatFilter'
import RouteNameHeader from '../../Components/RouteNameHeader/Header'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import RouteNameCard from '../../Components/RouteNameCard'

const Design = () => {
    const today = new Date();
    const { logout } = useContext(AuthContext)
    const navigation = useNavigation()
    const data = [{
        id: "lad9d9d",
        PharmacyName: "Pharmacy Name",
        name: "Name: Ceballos Natividad",
        OrderID: "01-00064",
        phone: "(718) 955 4856",
        cell: "(718) 955 4856",
        tel: "(718) 955 4856",
        Address: "2611 Webster avenue, bronx, ny 10453",

        chatType: "Chat Open",
        StartedAt: "10-12-2023  11:45 pm",
        By: "Leticia Hernandez",
        delivered: 'sent'

    },
    {
        id: "lad9d9d",
        name: "SERRANO, MARIA",
        MEDISERV: "MEDISERV PHARMACY",
        phone: "(718) 955 4856",
        cell: "(718) 955 4856",
        Address: "2611 Webster avenue, bronx, ny 10453",

        chatType: "Chat Open",
        StartedAt: "10-12-2023  11:45 pm",
        By: "Leticia Hernandez",
        delivered: 'read'

    }

    ]

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            header: () => <RouteNameHeader title={"Route Name"} showBtn />,
        })
    }, [navigation])

    const renderItem = ({ item, index }) => {
        return (
            <RouteNameCard
                item={item}
                index={index}
            />
        )
    }

    return (
        <>
            <StatusBar backgroundColor={'#fff'} />
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

            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.container}
                style={{ width: "100%", bottom: 0, backgroundColor: "white", position: "absolute", }}
                data={data}
                renderItem={renderItem}
            />

        </>

    )
}
export default Design