import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { setContainerWidth } from '../../Utils/Helpers/Helpers';
import ICONS from '../Icons';
import { useNavigation } from '@react-navigation/native';
import { Constants } from '../../Utils';
import styles from './styles';
import { Image } from '@rneui/base';
import images from '../../assets/images';
import { mvs } from '../../config/metrices';
import SairaText from '../../typography/saira-text';
import SairaCondensedRegular from '../../typography/SairaCondensedRegular-text';
import SairaBold from '../../typography/SairaBold-text';
import SairaCondensedBold from '../../typography/SairaCondensedBold-text';

const RouteNameCard = ({ item }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => { }}>
            <View style={styles.containerStyle} >
                {/* Row 1 */}
                <View style={{ width: "75%", backgroundColor: "green" }}>
                    <View style={styles.row_1} >
                        <View style={{}}>

                            <SairaText label={item.PharmacyName} />
                            <SairaCondensedBold label={'Order ID: ' + item.OrderID} fw={'700'} />
                        </View>
                        <View style={{ alignItems: "flex-end" }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                <Image
                                    source={images.UiwInformation}
                                    resizeMode="contain"
                                    style={{ width: mvs(15), height: mvs(15) }}

                                />
                                <View style={{ backgroundColor: "red", paddingRight: mvs(8), marginStart: mvs(10) }}>
                                    <SairaBold label={" Copay : $ 19.99"} fw={'700'} color={'#fff'} />
                                </View>
                            </View>
                            <View style={{ borderColor: "#1FA1FF", marginRight: mvs(5), marginTop: mvs(2), borderWidth: mvs(1), justifyContent: "center", width: mvs(75), borderRadius: mvs(5), }}>
                                <SairaCondensedRegular label={'Register'} color={'#1FA1FF'} fw={'400'} />
                            </View>

                        </View>
                    </View>

                    {/* Row 2 */}
                    <View style={styles.row_1} >
                        <SairaBold label={"Name:" + item.name} fw={'600'} isUnderLine />
                    </View>

                    {/* Row 3 */}
                    <View style={styles.row_2} >
                        <Image
                            source={images.Phone}
                            resizeMode="contain"
                            style={{ width: mvs(10), height: mvs(10) }}

                        />
                        <SairaText label={item.phone} fw={'400'} ml={mvs(5)} />
                        <Image
                            source={images.Cell}
                            resizeMode="contain"
                            style={{ width: mvs(10), height: mvs(10), marginLeft: mvs(20) }}

                        />
                        <SairaText label={item.cell} fw={'400'} ml={mvs(5)} />
                    </View>

                    {/* Row 4 */}
                    <View style={styles.row_1}>
                        <View style={styles.row_2}>
                            <Image
                                source={images.HomeAdressIcon}
                                resizeMode="contain"
                                style={{ width: mvs(10), height: mvs(10) }}

                            />
                            <SairaText label={item.Address} fw={'400'} ml={mvs(5)} />
                        </View>
                        <View style={styles.row_2}>
                            <Image
                                source={item.delivered == 'read' ? images.Read : images.Sent}
                                resizeMode="contain"
                                style={{ width: mvs(10), height: mvs(10) }}

                            />
                            <SairaText label={item.delivered} fw={'400'} ml={mvs(10)} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ width: "25%" }}>

            </View>
        </TouchableOpacity>
    );
};

export default RouteNameCard;
