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

const OrderPickupScanCard = ({ showIcon = false }) => {
    return (
        <View style={styles.cardContainer} >
            <View style={styles.containerStyle} >
                <View style={styles.left} >
                    <View style={styles.row_1} >
                        <View style={styles.r1c1} >
                            <Text style={styles.pharmacyName} >Pharmacy Name</Text>
                            <Text style={styles.orderId} >Order ID : 01-00064</Text>
                            <IconDataField name={"Ceballos Natividad"} icon={<ICONS.UserIcon />} reg={true} />
                        </View>
                        <View style={styles.r1c2} >
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }} >
                                {showIcon && <ICONS.ExclamationIcon />}
                                <View style={styles.copayContainer} >
                                    <Text style={[styles.orderId, { color: "white" }]} >
                                        Copay : $ 19.99
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
                        <IconDataField name={"(909) 000 9999 "} icon={<ICONS.TelephoneIcon />} />
                        <IconDataField name={"(909) 000 9999 "} icon={<ICONS.MobileIcon />} />
                        <IconDataField name={"(909) 000 9999 "} icon={<ICONS.LandlineIcon />} />
                    </View>
                    <View style={styles.row_2} >
                        <IconDataField name={"24-07 94th street, first floor east elmhurst, Forest Hills"} icon={<ICONS.AddressIcon />} />
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
                <Text style={styles.countTxt} >08</Text>
            </View>
        </View>
    );
};

export default OrderPickupScanCard;
