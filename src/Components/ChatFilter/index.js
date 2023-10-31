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

import SairaCondensedRegular from '../../typography/SairaCondensedRegular-text';

const ChatFilter = ({ item }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.containerStyle}>

            <View style={styles.innerContainer}>
                <Image
                    source={images.CalenderIcon}
                    resizeMode="contain"
                    style={{ width: mvs(24), height: mvs(18) }}

                />
                <SairaCondensedRegular label={'09-02-2023'} ml={mvs(16)} size={mvs(16)} lh={mvs(20)} />
                <Image
                    source={images.Arrow}
                    resizeMode="contain"
                    style={{ width: mvs(18), height: mvs(20), marginLeft: mvs(10) }}

                />
                <SairaCondensedRegular label={'09-02-2023'} ml={mvs(16)} size={mvs(16)} lh={mvs(20)} />
            </View>
            <View style={styles.innerContainer}>
                <SairaCondensedRegular label={'09-02-2023'} size={mvs(16)} lh={mvs(20)} />

                <Image
                    source={images.DropdownIcon}
                    resizeMode="contain"
                    style={{ width: mvs(16), height: mvs(16), marginLeft: mvs(10), borderRadius: mvs(16 / 2) }}

                />

            </View>

        </View>
    );
};

export default ChatFilter;
