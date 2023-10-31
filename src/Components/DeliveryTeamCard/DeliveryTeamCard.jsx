import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import { setContainerWidth } from '../../Utils/Helpers/Helpers';

const DeliveryTeamCard = () => {
    return (
        <View style={styles.containerStyle} >
            <View style={styles.left} >
                <Text style={styles.name}>John Smith</Text>
                <Text style={styles.stoproutes}>Stops 11250</Text>
                <Text style={styles.stoproutes}>Routes 18</Text>
            </View>
            <View style={styles.right} >
                <View style={styles.row_1} >
                    <Text style={styles.statusTxt} >
                        Done
                        <Text style={[styles.number, styles.greenClr]} >{" 10,000"}</Text>
                    </Text>
                    <Text style={styles.statusTxt} >
                        Failed
                        <Text style={[styles.number, styles.redClr]} >{" 250"}</Text>
                    </Text>
                    <Text style={styles.statusTxt} >
                        Pending
                        <Text style={[styles.number, styles.orangeClr]} >{" 1,000"}</Text>
                    </Text>
                </View>
                <View style={styles.row_2} >
                    <Text style={[styles.commonColorStyle,
                    styles["green"],
                    { width: setContainerWidth(70) }
                    ]}>
                        {"70" + "%"}
                    </Text>
                    <Text style={[styles.commonColorStyle,
                    styles["red"], {
                        width: setContainerWidth(20)
                    }]}
                    >
                        {"20" + "%"}
                    </Text>
                    <Text style={[styles.commonColorStyle,
                    styles["orange"],
                    {
                        width: setContainerWidth(10)
                    }]}>
                        {"10" + "%"}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default DeliveryTeamCard;
