import React from 'react';
import { Text } from '@rneui/base';
import styles from './styles';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';

const ButtonPD = (
    {
        onPress,
        title,
        loading,
        width,
        rightIcon,
        routeDetail = false,
        bgClr = "#05B321",
        plain = false,
    },
) => {
    if (plain) {
        return (
            <TouchableOpacity
                onPress={onPress}
                disabled={loading}
                style={styles.containerPlain}
            >
                {
                    loading
                        ? <ActivityIndicator color={"black"} />
                        : <Text style={styles.titlePlain} >
                            {title}
                        </Text>
                }
            </TouchableOpacity >
        )
    }
    if (routeDetail) {
        return (
            <TouchableOpacity
                onPress={onPress}
                disabled={loading}
                style={[styles.containerRouteDetail, { backgroundColor: bgClr }]}
            >
                {
                    loading
                        ? <ActivityIndicator color={"black"} />
                        : <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }} >
                            <Text style={[styles.title, { color: "white" }]} >
                                {title}
                            </Text>
                            {rightIcon}
                        </View>
                }
            </TouchableOpacity>
        )
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={loading}
            style={styles.container}
        >
            {
                loading
                    ? <ActivityIndicator color={"black"} />
                    : <Text style={styles.title} >{title}</Text>
            }
        </TouchableOpacity>
    );
};

export default ButtonPD;
