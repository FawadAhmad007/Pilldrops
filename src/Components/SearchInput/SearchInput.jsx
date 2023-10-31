import React, { forwardRef } from 'react';
import { Input } from '@rneui/base';
import styles from './styles';
import ICONS from '../Icons';

const SearchInput = (
    {
        value,
        onChangeText,
        icon,
    },
    ref,
) => {
    return (
        <Input
            errorStyle={styles.errorStyle}
            containerStyle={styles.containerStyle}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            leftIcon={icon ? icon : ICONS.SearchIcon}
            placeholder='Search Order ID, Name, number, address,pharmacy'
            value={value}
            onChangeText={onChangeText}
        />
    );
};

export default forwardRef(SearchInput);
