import { Text, View,FlatList } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { AllRoutesCard, Header } from '../../Components'
import styles from './styles'
import { formatDate } from '../../Utils/Helpers/Helpers'
import { useSelector } from 'react-redux'

const AllRoutes = ({ navigation }) => {
    const { routes } = useSelector((state) => state.routes);
    console.log("routes...", routes)

    const today = new Date();

    const data=[
        {
            "id": 3,
            "driver": null,
            "totalDelivered": 0,
            "totalRescheduled": 0,
            "totalPending": 2,
            "totalFailed": 0,
            "totalOrderStop": 2,
            "totalRouteOrderTotalCopay": 0.0,
            "totalDeliveredTotalCopay": 0,
            "name": "B1Z2",
            "address": "214 BEACH 3RD ST, Far Rockaway, NY 11691",
            "driver_status": "Start",
            "distanceCal": 0.0,
            "estimatedTimeCal": 0.0,
            "completedTimeCal": 0.0,
            "startTime": null,
            "endTime": null,
            "routeStatus": "Pending",
            "createdAt": "2023-11-10T14:41:45.214575-05:00",
            "createdby": null
        },
        {
            "id": 4,
            "driver": null,
            "totalDelivered": 0,
            "totalRescheduled": 0,
            "totalPending": 2,
            "totalFailed": 0,
            "totalOrderStop": 2,
            "totalRouteOrderTotalCopay": 0.0,
            "totalDeliveredTotalCopay": 0,
            "name": "B1Z1",
            "address": "214 BEACH 3RD ST, Far Rockaway, NY 11691",
            "driver_status": "Start",
            "distanceCal": 0.0,
            "estimatedTimeCal": 0.0,
            "completedTimeCal": 0.0,
            "startTime": null,
            "endTime": null,
            "routeStatus": "Pending",
            "createdAt": "2023-11-10T14:41:45.277416-05:00",
            "createdby": null
        },
        {
            "id": 5,
            "driver": null,
            "totalDelivered": 0,
            "totalRescheduled": 0,
            "totalPending": 7,
            "totalFailed": 0,
            "totalOrderStop": 7,
            "totalRouteOrderTotalCopay": 93.0,
            "totalDeliveredTotalCopay": 0,
            "name": "B1",
            "address": "214 BEACH 3RD ST, Far Rockaway, NY 11691",
            "driver_status": "Start",
            "distanceCal": 0.0,
            "estimatedTimeCal": 256.0,
            "completedTimeCal": 0.0,
            "startTime": null,
            "endTime": null,
            "routeStatus": "Pending",
            "createdAt": "2023-11-10T14:49:23.573073-05:00",
            "createdby": null
        },
        {
            "id": 6,
            "driver": null,
            "totalDelivered": 0,
            "totalRescheduled": 0,
            "totalPending": 3,
            "totalFailed": 0,
            "totalOrderStop": 3,
            "totalRouteOrderTotalCopay": 3.0,
            "totalDeliveredTotalCopay": 0,
            "name": "B1Z1",
            "address": "214 BEACH 3RD ST, Far Rockaway, NY 11691",
            "driver_status": "Start",
            "distanceCal": 0.0,
            "estimatedTimeCal": 0.0,
            "completedTimeCal": 0.0,
            "startTime": null,
            "endTime": null,
            "routeStatus": "Pending",
            "createdAt": "2023-11-10T14:52:19.697602-05:00",
            "createdby": null
        },
        {
            "id": 7,
            "driver": null,
            "totalDelivered": 0,
            "totalRescheduled": 0,
            "totalPending": 4,
            "totalFailed": 0,
            "totalOrderStop": 4,
            "totalRouteOrderTotalCopay": 0.0,
            "totalDeliveredTotalCopay": 0,
            "name": "Merge Route 1 and 2",
            "address": "214 BEACH 3RD ST, Far Rockaway, NY 11691",
            "driver_status": "Start",
            "distanceCal": 0.0,
            "estimatedTimeCal": 0.0,
            "completedTimeCal": 0.0,
            "startTime": null,
            "endTime": null,
            "routeStatus": "Pending",
            "createdAt": "2023-11-11T02:18:25.377817-05:00",
            "createdby": null
        }
    ]

    useEffect(()=>{

    },[])

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            header: () => <Header title={"All Routes"} />,
        })
    }, [navigation])
    return (
        <View
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
            style={{ flex: 1, backgroundColor: "white" }}
        >
            <Text style={styles.dateTxt} >{formatDate(today)}</Text>
            <FlatList
        data={data}
        bounces={false}
        renderItem={
            ({item})=> <AllRoutesCard routeName={item?.name} driverStatus={item?.driver_status} />
        }
        keyExtractor={(item, index) => index.toString()}
      />
          
        </View>
    )
}

export default AllRoutes