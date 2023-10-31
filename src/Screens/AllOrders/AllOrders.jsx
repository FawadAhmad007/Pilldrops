import { ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { AllOrdersCard, Header } from '../../Components'
import styles from './styles'

const AllOrders = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            header: () => <Header
                title={"All Orders"}
                showBtn={true}
            />,
        })
    }, [navigation])

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
            style={styles.scrollView}
        >
            <AllOrdersCard />
            <AllOrdersCard backgroundColor='#FB1001' status='Failed' />
            <AllOrdersCard backgroundColor='#FF8B03' status='Pending' />
            <AllOrdersCard />
            <AllOrdersCard />
            <AllOrdersCard />
            <AllOrdersCard />
        </ScrollView>
    )
}

export default AllOrders