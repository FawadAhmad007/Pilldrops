import { Text, ScrollView } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { AllRoutesCard, Header } from '../../Components'
import styles from './styles'
import { formatDate } from '../../Utils/Helpers/Helpers'

const AllRoutes = ({ navigation }) => {
    const today = new Date();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            header: () => <Header title={"All Routes"} />,
        })
    }, [navigation])
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
            style={{ flex: 1, backgroundColor: "white" }}
        >
            <Text style={styles.dateTxt} >{formatDate(today)}</Text>
            <AllRoutesCard />
            <AllRoutesCard />
            <AllRoutesCard />
            <AllRoutesCard />
            <AllRoutesCard />
            <AllRoutesCard />
            <AllRoutesCard />
            <AllRoutesCard />
            <AllRoutesCard />
        </ScrollView>
    )
}

export default AllRoutes