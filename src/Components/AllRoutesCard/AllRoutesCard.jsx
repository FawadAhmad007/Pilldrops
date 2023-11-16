import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import { setContainerWidth } from '../../Utils/Helpers/Helpers';
import ICONS from '../Icons';

import moment from 'moment';

const AllRoutesCard = ({ item, onPressItem }) => {

    const valueInPercentage = (value) => (value / (item.totalDelivered + item.totalFailed + item.totalPending)) * 100;
    return (
        <TouchableOpacity onPress={() => onPressItem(item)}>
            <View style={styles.containerStyle} >
                {/* Row 1 */}
                <View style={styles.row_1} >
                    <Text style={styles.routeName} >
                        Route Name
                    </Text>
                    <View style={styles.statusZoneContainer} >
                        <View style={[styles.statusContainer, { backgroundColor: "#0094FF" }]} >
                            <Text style={styles.statusTxt} >
                                {item.routeStatus}
                            </Text>
                        </View>
                        <Text style={styles.borroughTxt} >
                            {item.name}
                        </Text>
                    </View>
                    <Text style={styles.time} >
                        {moment(item.createdAt).format('l LT')}
                    </Text>
                </View>

                {/* Row 2 */}
                <View style={styles.row_2} >
                    <Text style={styles.coPay} >
                        COPAY'S
                        <Text style={{ color: "#169E3A" }} >
                            {" $189.90"}
                        </Text>
                    </Text>
                    <Text style={styles.stops} >
                        {`${item.totalOrderStop} Stops ${item.distanceCal} Miles`}
                    </Text>
                    <Text style={styles.stops} >
                        {`ETC ${item.estimatedTimeCal}`}
                    </Text>
                </View>

                {/* Row 3 */}
                <View style={styles.row_3} >
                    <Text style={[styles.coPay, styles.paidTo, { paddingLeft: 5 }]} >
                        Paid to Pharmacy $0.00
                    </Text>
                    <Text style={[styles.coPay, styles.collected]} >
                        Collected 0.00
                    </Text>
                </View>

                {/* Row 4 */}
                <View style={styles.row_4}>
                    <Text style={styles.stops} >
                        {item?.driver + ''}
                    </Text>
                    <Text style={styles.readyToStart} >
                        Ready To Start
                    </Text>
                </View>

                {/* Row 5 */}
                <View style={styles.row_5}>
                    <View style={styles.row_5_leftContainer} >
                        <View style={styles.numberIconContainer} >
                            <ICONS.CheckedIcon />
                            <Text style={styles.numberIcon} >{item.totalDelivered}</Text>
                        </View>
                        <View style={styles.numberIconContainer} >
                            <ICONS.CrossIcon />
                            <Text style={styles.numberIcon} >{item.totalFailed}</Text>
                        </View>
                        <View style={styles.numberIconContainer} >
                            <ICONS.WarningIcon />
                            <Text style={styles.numberIcon} >{item.totalPending}</Text>
                        </View>
                    </View>
                    <View style={styles.row_5_rightContainer} >
                        <Text style={[styles.commonColorStyle,
                        styles["green"],
                        { width: setContainerWidth(valueInPercentage(item.totalDelivered)) }
                        ]}>
                            {valueInPercentage(item.totalDelivered) + "%"}
                        </Text>
                        <Text style={[styles.commonColorStyle,
                        styles["red"], {
                            width: setContainerWidth(valueInPercentage(item.totalFailed))
                        }]}
                        >
                            {valueInPercentage(item.totalFailed) + "%"}
                        </Text>
                        <Text style={[styles.commonColorStyle,
                        styles["orange"],
                        {
                            width: setContainerWidth(valueInPercentage(item.totalPending))
                        }]}>
                            {valueInPercentage(item.totalPending) + "%"}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default AllRoutesCard;
