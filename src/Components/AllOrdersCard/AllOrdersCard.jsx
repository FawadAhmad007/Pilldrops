import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';

const AllOrdersCard = ({ backgroundColor = "#05B321", status = "Done" }) => {
    return (
        <View style={styles.cardContainer} >
            <View style={styles.containerStyle} >
                <View style={styles.left} >
                    <Text style={styles.pharmacyName} >
                        Pharmacy Name
                    </Text>
                    <Text style={styles.orderId} >
                        Order ID : 01-00064
                    </Text>
                    <Text style={styles.name} >
                        Name : Ceballos Natividad
                    </Text>
                    <Text style={styles.address} >
                        <Text style={styles.addressBold} >Address</Text> : 24-07 94th street, first floor east elmhurst, Forest Hills, Queens, NY 11369
                    </Text>
                    <Text style={styles.deliveredBy} >
                        Delivered By: <Text style={styles.deliveredByBold} >Jose Arturo</Text>
                    </Text>
                    <Text style={styles.deliveredAt} >
                        Delivered At :     09-19-2023     09:42:25AM
                    </Text>
                </View>
                <View style={styles.right} >
                    <View style={styles.commonContainer} >
                        <Text style={[styles.descTxt, { backgroundColor }]} >{status}</Text>
                    </View>
                    <View style={styles.commonContainer} >
                        <Text style={styles.descTxt} >Copay: $14.99 Driver</Text>
                    </View>
                    <View style={styles.proof} >
                        <Text style={styles.proofTxt} >Proof Of Delivery</Text>
                    </View>
                </View>
            </View>
            <View style={styles.countContainer} >
                <Text style={styles.countTxt} >08</Text>
            </View>
        </View>
    );
};

export default AllOrdersCard;
