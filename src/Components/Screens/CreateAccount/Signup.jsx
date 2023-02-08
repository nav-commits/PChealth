import { View, Text, StatusBar, Image, StyleSheet } from 'react-native';
import Button from '../../Atoms/Button/Button';
import TextField from '../../Atoms/TextField/TextField';
import React from 'react';
import Label from '../../Atoms/Label/Label';
// import CheckBox from'react-native-check-box'

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
    // const [isSelected, setSelection] = React.useState(false);

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
        if (!isValidObjField(inputs)) return updateError('Require all fields', setObjectError);
        // only valid email id
        if (!isValidEmail(inputs.email)) return updateError('Invalid email', setEmailError);
        // password must have 8 ore more characters
        if (!inputs.password.trim() || inputs.password.length < 8)
            return updateError('Password is less than 8 characters', setPasswordError);
        // password and confirm password must be same
        if (inputs.password !== inputs.confirmPassword)
            return updateError('Password does not match', setMatchPasswordError);

        return true;
    };
    const submitHandler = () => {
        if (isValidForm()) {
            console.log(inputs);
            navigation.navigate('PassCode');
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
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 10,
                    marginTop: 90,
                    alignItems: 'center',
                }}
            >
                <Text>Create a PC Health id</Text>
                <Image
                    source={require('../../../../assets/PcHealth.png')}
                    style={{ width: 45, height: 35, borderRadius: 10, marginLeft: 10 }}
                />
            </View>
            <Label title='Email' paddingLeft={10} paddingTop={30} size={13} />
            <TextField onChangeText={(text) => changeHandle(text, 'email')} />
            {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

            <Label title='Password' paddingLeft={10} paddingTop={30} size={13} />
            <TextField onChangeText={(text) => changeHandle(text, 'password')} />
            {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

            <Label title='Confirm Password' paddingLeft={10} paddingTop={30} size={13} />
            <TextField onChangeText={(text) => changeHandle(text, 'confirmPassword')} />
            {matchPasswordError ? <Text style={styles.error}>{matchPasswordError}</Text> : null}

            {/* <CheckBox
                value={isSelected}
            /> */}
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
});
