import { View, Text, ImageBackground, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import React, {  useEffect, useState } from 'react';
//import { LoginBg, LogoFullImg } from '../../Assets/images';
import { Image } from '@rneui/base';
import styles from './styles';
import { InputPD } from '../../Components';

const Login = () => {
    const [state, setState] = useState({
        userName: null,
        password: null,
        loading: false
    })
    const [error, setError] = useState({
        userName: "",
        password: ""
    })
    const allGood = () => {
        return state.password && state.userName
    }
    const handleChange = (key, value) => {
        setState({ ...state, [key]: value })
    }
    const handleOnPressLogin = async () => {
        if (allGood()) {
            setState({ ...state, loading: true })
            setTimeout(() => {
                setState({ ...state, loading: !true })
            }, 1000);
            return;
        }
        setState({ ...state, loading: !true })
        setErrorMessage()
    }

    const setErrorMessage = () => {
        setError({
            userName: state.userName?.length > 0 ? "" : "User Name cannot be empty!",
            password: state.password?.length > 0 ? "" : "Password cannot be empty"
        })
    }

    useEffect(() => {
        !(state.userName === null && state.password === null) &&
            setErrorMessage()
    }, [state])
    return (
        <View style={styles.container}>
            <View style={styles.logoImgContainer}>
                <Image
                    source={require('./../../assets/images/Logo_Full.png')}
                    resizeMode="contain"
                    style={styles.logoImg}
                />
            </View>
            <Text style={styles.loginTitle}>Login</Text>
            <View style={styles.loginFormContainer}>
                <InputPD
                    label={'User Name'}
                    value={state.userName}
                    onChangeText={userName => handleChange('userName', userName)}
                    keyboardType={'email-address'}
                    placeholder={'Enter    Email/User Name/Phone Number'}
                    errorMessage={error.userName}
                    animateError={true}
                />
                <InputPD
                    label={'Password'}
                    value={state.password}
                    onChangeText={password => handleChange('password', password)}
                    placeholder={'Enter your Password'}
                    errorMessage={error.password}
                    secureTextEntry={true}
                    animateError={true}
                />
                <View style={styles.RememberForget}>
                    <Text style={styles.bottomTxtStyle}>Remember Me</Text>
                    <TouchableOpacity>
                        <Text style={styles.bottomTxtStyle}>Forget Password?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ marginTop: 43, }} onPress={handleOnPressLogin} disabled={state.loading} >
                    <View style={styles.loginBtn}>
                        {state.loading
                            ? <ActivityIndicator color={"white"} />
                            : <Text style={styles.loginBtnTxt}>Login</Text>
                        }
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;
