import { View, Text, StyleSheet, } from 'react-native';
import Button from '../../Atoms/Button/Button';
import Label from '../../Atoms/Label/Label';
import PhoneInput from "react-native-phone-number-input";
import React, { useState, useRef, useEffect } from "react";
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});
export default function PhoneNumber({ navigation }) {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [disable, setDisabled] = React.useState(true);
    const phoneInput = useRef < PhoneInput > (null);

    const onPressHandler = async() => {
        navigation.navigate('Verify your account', {
            phoneNumber: phoneNumber
        });
        await sendPushNotification('ExponentPushToken[NgAThBNvSuo4asHH7Eo6Vh]');
    };
    const onChangeTextHandler = (text) => {
        if (text.length >= 10) {
            setDisabled(false);
        }
        else {
            setDisabled(true); 
        }
        setPhoneNumber(text);
    }

    const [expoPushToken, setExpoPushToken] = useState('');
    async function sendPushNotification(expoPushToken) {
        const message = {
            to: expoPushToken,
            sound: 'default',
            title: 'Original Title',
            body: `code is 34578`,
            data: { someData: 'goes here' },
        };
        console.log(message)

        await fetch('https://exp.host/--/api/v2/push/send', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        });
    }
    async function registerForPushNotificationsAsync() {
        let token;
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;

        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);

        return token;
    }

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token)).catch((err) => {
            console.log(err)
        });
    }, []);
    return (
        <View style={{ marginTop: 20, padding: 20 }}>
            <Text
                style={{
                    color: 'hsl(240, 25%, 25%)',
                    padding: 5,
                    fontSize: 20,
                    fontWeight: 'bold',
                }}
            >
                What's your phone number?
            </Text>
            <Text style={{ color: 'hsl(240, 25%, 25%)', padding: 5, marginBottom: 20 }}>
                We need it to make sure only you have access to your account.We won't share your number with anyone.
            </Text>
            <Label title='Phone Number' paddingLeft={5} />

            <PhoneInput
                style={styles.phoneInput}
                initialValue={phoneNumber}
                defaultCode="CA"
                onChangeText={onChangeTextHandler}
                withShadow
                autoFocus
                layout="first"
            />

            <Button
                title='Send verification code'
                backgroundColor={disable ? 'grey' : 'hsl(240, 25%, 25%)'}
                color='white'
                width={'100%'}
                marginTop={30}
                paddingVertical={10}
                borderRadius={20}
                onPress={onPressHandler}
                disabled={disable}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    phoneInput: {
        borderWidth: 1,
        borderRadius: 25,
        width: 250,
        height: 50,
        padding: 5,
    },
});
