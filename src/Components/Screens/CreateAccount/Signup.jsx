import { View, Text, StatusBar, Image, StyleSheet } from 'react-native';
import Button from '../../Atoms/Button/Button';
import TextField from '../../Atoms/TextField/TextField';
import React from 'react';
import Label from '../../Atoms/Label/Label';
import Checkbox from 'expo-checkbox';

export default function SignUp({ navigation }) {
    const [inputs, setInputs] = React.useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [objectError, setObjectError] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const [matchPasswordError, setMatchPasswordError] = React.useState('');
    const [isSelected, setSelection] = React.useState(false);
    const [privacy, setPrivacy] = React.useState('');

    const isValidObjField = (obj) => {
        return Object.values(obj).every((value) => value.trim());
    };
    const isValidEmail = (value) => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(value);
    };
    const updateError = (error, stateUpdater) => {
        stateUpdater(error);
        setTimeout(() => {
            stateUpdater('');
        }, 2500);
    };

    const changeHandle = (text, input) => {
        setInputs({
            ...inputs,
            [input]: text,
        });
    };
    const isValidForm = () => {
        // We accept only all fields have value
        if (!isValidObjField(inputs)) return updateError('All fields required', setObjectError);
        // only valid email id
        if (!isValidEmail(inputs.email)) return updateError('Invalid email', setEmailError);
        // password must have 8 ore more characters
        if (!inputs.password.trim() || inputs.password.length < 8)
            return updateError('Password is less than 8 characters', setPasswordError);
        // password and confirm password must be same
        if (inputs.password !== inputs.confirmPassword)
            return updateError('Password does not match', setMatchPasswordError);
        // checkbox checked
        if (!isSelected)
            return updateError(
                'You must agree to the privacy policy and terms to continue',
                setPrivacy
            );

        return true;
    };
    const submitHandler = () => {
        if (isValidForm()) {
            console.log(inputs);
            navigation.navigate('PhoneNumber');
        }
    };

    return (
        <View style={{ padding: 10 }}>
            <StatusBar
                barStyle='dark-content'
                hidden={false}
                backgroundColor='#87CEEB'
                translucent={true}
            />
            <View style={styles.textAndPCHealthImage}>
                <Text>Create a PC Health id</Text>
                <Image
                    source={require('../../../../assets/PcHealth.png')}
                    style={{ width: 45, height: 35, borderRadius: 10, marginLeft: 10 }}
                />
            </View>
            <Label title='EMAIL' paddingLeft={10} paddingTop={30} size={13} />
            <TextField
                emailError={emailError}
                onChangeText={(text) => changeHandle(text, 'email')}
            />
            {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

            <Label title='PASSWORD' paddingLeft={10} paddingTop={30} size={13} />
            <TextField
                passwordError={passwordError}
                onChangeText={(text) => changeHandle(text, 'password')}
                password={inputs.password}
            />
            {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

            <Label title='CONFIRM PASSWORD' paddingLeft={10} paddingTop={30} size={13} />
            <TextField
                matchPasswordError={matchPasswordError}
                onChangeText={(text) => changeHandle(text, 'confirmPassword')}
                confirmPassword={inputs.confirmPassword}
            />
            {matchPasswordError ? <Text style={styles.error}>{matchPasswordError}</Text> : null}

            <View style={styles.privacyPolicy}>
                <Checkbox
                    style={styles.checkbox}
                    value={isSelected}
                    onValueChange={() => setSelection(!isSelected)}
                    backgroundColor='white'
                    color='hsl(240, 25%, 25%)'
                />
                <Text style={{ padding: 10 }}>
                    I agree to Privacy policy and PC Health Terms and Conditions
                </Text>
            </View>

            {privacy ? <Text style={styles.error}>{privacy}</Text> : null}
            {objectError ? <Text style={styles.error}>{objectError}</Text> : null}
            <Button
                title='Create a PCTM-id'
                backgroundColor='black'
                width={'100%'}
                marginTop={20}
                onPress={submitHandler}
                paddingHorizontal={10}
                paddingVertical={15}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        marginLeft: 10,
    },
    textAndPCHealthImage: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginTop: 90,
        alignItems: 'center',
    },
    privacyPolicy: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        marginLeft: 10,
    },
});
