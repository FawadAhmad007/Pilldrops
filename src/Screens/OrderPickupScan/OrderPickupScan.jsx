import { ActivityIndicator, ScrollView, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { ButtonPD, Header, OrderPickupScanCard } from '../../Components'
import { Text } from '@rneui/base'
import styles from './styles'
import { SwipeListView } from 'react-native-swipe-list-view'

const OrderPickupScan = ({ navigation }) => {
    const DATA = [{ key: 0 }, { key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }, { key: 7 }, { key: 8 }, { key: 9 }]
    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            header: () => <Header
                title={"Order Pickup Scan"}
                showBtn={true}
            />,
        })
    }, [navigation])

    return (
        <View style={styles.container}  >
            <View style={styles.header} >
                <ScrollView style={styles.horizontalScroll} horizontal={true} showsHorizontalScrollIndicator={false} >
                    <View style={{ justifyContent: "space-between", }} >
                        <View style={styles.header_row_1} >
                            <Text style={styles.time} >Same Day 2PM TO 6PM</Text>
                            <Text style={styles.time} >Same Day 2PM TO 6PM</Text>
                            <Text style={styles.time} >Same Day 2PM TO 6PM</Text>
                            <Text style={styles.time} >Same Day <Text style={{ color: "#FE9604" }} >2PM TO 6PM</Text></Text>
                            <Text style={styles.time} >Same Day <Text style={{ color: "#FE9604" }} >2PM TO 6PM</Text></Text>
                            <Text style={styles.time} >Same Day <Text style={{ color: "#FE9604" }} >2PM TO 6PM</Text></Text>
                        </View>
                        <View style={styles.header_row_2} >
                            <View style={styles.pickupstatContainer} >
                                <Text style={styles.pickupTxt} >Ready for Pickup <Text style={[styles.pickupTxt, styles.pickupBold]} >: 0</Text></Text>
                                <Text style={styles.pickupTxt} >Picked UP : {25}</Text>
                            </View>
                            <View style={styles.pickupstatContainer} >
                                <Text style={styles.pickupTxt} >Ready for Pickup <Text style={[styles.pickupTxt, styles.pickupBold]} >: 0</Text></Text>
                                <Text style={styles.pickupTxt} >Picked UP : {25}</Text>
                            </View>
                            <View style={styles.pickupstatContainer} >
                                <Text style={styles.pickupTxt} >Ready for Pickup <Text style={[styles.pickupTxt, styles.pickupBold]} >: 0</Text></Text>
                                <Text style={styles.pickupTxt} >Picked UP : {25}</Text>
                            </View>
                            <View style={styles.pickupstatContainer} >
                                <Text style={styles.pickupTxt} >Ready for Pickup <Text style={[styles.pickupTxt, styles.pickupBold]} >: 0</Text></Text>
                                <Text style={styles.pickupTxt} >Picked UP : {25}</Text>
                            </View>
                            <View style={styles.pickupstatContainer} >
                                <Text style={styles.pickupTxt} >Ready for Pickup <Text style={[styles.pickupTxt, styles.pickupBold]} >: 0</Text></Text>
                                <Text style={styles.pickupTxt} >Picked UP : {25}</Text>
                            </View>
                            <View style={styles.pickupstatContainer} >
                                <Text style={styles.pickupTxt} >Ready for Pickup <Text style={[styles.pickupTxt, styles.pickupBold]} >: 0</Text></Text>
                                <Text style={styles.pickupTxt} >Picked UP : {25}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainerStyle}
                style={styles.scrollView}
            >
                <SwipeListView
                    data={DATA}
                    renderItem={(data, rowMap) => {
                        return (
                            <OrderPickupScanCard />
                        );
                    }}
                    renderHiddenItem={(data, rowMap) =>
                        <TouchableOpacity style={styles.removeBtnContainer} >

                            <View style={styles.remove} >
                                <Text style={styles.removeTxt} >
                                    Remove
                                </Text>
                            </View>
                        </TouchableOpacity>
                    }
                    rightOpenValue={-75}
                    disableRightSwipe={true}
                    onRowOpen={(rowKey, rowMap) => rowKey !== 0 && rowMap[0].closeRow()}
                />

            </ScrollView>
            <View style={styles.footer} >
                <ButtonPD title={"Back"} />
                <ButtonPD title={"Cancel"} />
                <ButtonPD title={"Scan Complete"} />
            </View>
        </View>
    )
}

export default OrderPickupScan