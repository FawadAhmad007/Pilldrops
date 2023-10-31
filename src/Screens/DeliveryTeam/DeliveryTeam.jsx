import { ScrollView } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { DeliveryTeamCard, Header } from '../../Components'
import styles from './styles'

const DeliveryTeam = ({ navigation }) => {
    const today = new Date();
    const { logout } = useContext(AuthContext)

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            header: () => <Header title={"Delivery Team"} />,
        })
    }, [navigation])
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
            style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 10 }}
        >
            <DeliveryTeamCard />
            <DeliveryTeamCard />
            <DeliveryTeamCard />
            <DeliveryTeamCard />
            <DeliveryTeamCard />
            <DeliveryTeamCard />
            <DeliveryTeamCard />
            <DeliveryTeamCard />
            <DeliveryTeamCard />
            <DeliveryTeamCard />
            <DeliveryTeamCard />
            <DeliveryTeamCard />
        </ScrollView>
    )
}

export default DeliveryTeam