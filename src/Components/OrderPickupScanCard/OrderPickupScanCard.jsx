import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import { setContainerWidth } from '../../Utils/Helpers/Helpers';
import ICONS from '../Icons';

const IconDataField = ({ name, icon, reg = false, }) => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }} >
            {icon}
            <Text style={[styles.orderId, !reg && styles.sairaCondensedRegular]} >{name}</Text>
        </View>
    )
}

const OrderPickupScanCard = ({ showIcon = false, item, index }) => {
    let order = item.order
    return (
        <View style={styles.cardContainer} >
            <View style={styles.containerStyle} >
                <View style={styles.left} >
                    <View style={styles.row_1} >
                        <View style={styles.r1c1} >
                            <Text style={styles.pharmacyName} >{order.pharmacy_name}</Text>
                            <Text style={styles.orderId} >Order ID : {order.id}</Text>
                            <IconDataField name={order.name} icon={<ICONS.UserIcon />} reg={true} />
                        </View>
                        <View style={styles.r1c2} >
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }} >
                                {showIcon && <ICONS.ExclamationIcon />}
                                <View style={styles.copayContainer} >
                                    <Text style={[styles.orderId, { color: "white" }]} >
                                        Copay : $ {order.totalcopay}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ paddingLeft: 21 }} >
                                <View style={[styles.refrigeratedContainer, { borderColor: "#1FA1FF" }]} >
                                    <Text style={[styles.refrigerated, { color: "#1FA1FF" }]} >
                                        Refrigerated
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.row_2} >
                        <IconDataField name={order.contact} icon={<ICONS.TelephoneIcon />} />
                        <IconDataField name={"(909) 000 9999 "} icon={<ICONS.MobileIcon />} />
                        <IconDataField name={order.workNumber} icon={<ICONS.LandlineIcon />} />
                    </View>
                    <View style={styles.row_2} >
                        <IconDataField name={order.address} icon={<ICONS.AddressIcon />} />
                    </View>
                    <View style={styles.row_3} >
                        <IconDataField name={"Queens, NY 11369"} />
                        <IconDataField name={"Apt # 45 C"} reg={true} />
                    </View>
                </View>
                <View style={styles.right} >
                    <Text style={styles.deliveryNote}>Delivery Note</Text>
                    <Text style={styles.notesDesc}>Attempt and get New number</Text>
                </View>
            </View>
            <View style={styles.countContainer} >
                <Text style={styles.countTxt} >{index + 1}</Text>
            </View>
        </View>
    );
};

export default OrderPickupScanCard;
