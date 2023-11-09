import { Text, ScrollView, FlatList, Vibration, View, StatusBar } from 'react-native'
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
import { Constants } from '../../Utils'

const Design = () => {
    const today = new Date();
    const { logout } = useContext(AuthContext)
    const { SCREEN_NAME } = Constants;
    const navigation = useNavigation()
    const data = [{
        id: "lad9d9d",
        name: "SERRANO, MARIA",
        MEDISERV: "MEDISERV PHARMACY",
        phone: "(718) 955 4856",
        cell: "(718) 955 4856",
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
            header: () => <Header title={"Pharmacy Chats"} showBtn />,
        })
    }, [navigation])

    const renderItem = ({ item, index }) => {
        return (
            <PharmacyChatsCard
                item={item}
                index={index}
                onPress={() => navigation.navigate(SCREEN_NAME.ClientChat)}
            />
        )
    }

    return (
        <>
            <StatusBar backgroundColor={'#0B6699'} />
            <ChatFilter />

            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.container}
                style={{ flex: 1, backgroundColor: "white" }}
                data={data}
                renderItem={renderItem}
            />

        </>

    )
}
export default Design