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

const PharmacyChatsCard = ({ item, onPress }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.containerStyle} >
                {/* Row 1 */}
                <View style={styles.row_1} >
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <Image
                            source={images.Profile}
                            resizeMode="contain"
                            style={{ width: mvs(33), height: mvs(33), borderRadius: mvs(33 / 2) }}

                        />
                        <SairaBold label={item.name} fw={'700'} ml={mvs(10)} />
                    </View>
                    <View >
                        <SairaBold label={item.chatType} fw={'700'} color={'#FB1001'} textAlign />
                        <SairaCondensedRegular label={item.StartedAt} lh={mvs(12)} fw={'400'} mt={(2)} textAlign />
                        <SairaCondensedRegular label={item.By} fw={'400'} textAlign lh={mvs(12)} />
                        <SairaCondensedRegular label={'Pill Drop'} fw={'400'} textAlign lh={mvs(12)} />
                    </View>
                </View>

                {/* Row 2 */}
                <View style={styles.row_1} >
                    <SairaBold label={item.MEDISERV} fw={'600'} isUnderLine />
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
        </TouchableOpacity>
    );
};

export default PharmacyChatsCard;
