import React, { forwardRef } from 'react';
import { Input } from '@rneui/base';
import styles from './styles';

const InputPD = (
    {
        label,
        placeholder,
        value,
        onChangeText,
        errorMessage,
        keyboardType,
        secureTextEntry,
        animateError = false
    },
    ref,
) => {
    return (
        <Input
            ref={ref}
            placeholder={placeholder}
            label={label}
            value={value}
            onChangeText={onChangeText}
            errorMessage={errorMessage}
            errorStyle={[styles.errorStyle, animateError && { height: errorMessage ? "auto" : 0 }]}
            labelStyle={styles.labelStyle}
            inputStyle={styles.inputStyle}
            inputContainerStyle={styles.inputContainerStyle}
            containerStyle={styles.containerStyle}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
        />
    );
};

export default forwardRef(InputPD);
