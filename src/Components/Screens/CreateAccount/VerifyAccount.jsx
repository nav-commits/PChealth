import { View, Text, StyleSheet } from 'react-native';
import Button from '../../Atoms/Button/Button';
import PhoneInput from 'react-native-phone-number-input';
import React from 'react';
import Label from '../../Atoms/Label/Label';
export default function VerifyAccount({ navigation }) {
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const phoneInput = React.useRef(null);
    const [disable, setDisabled] = React.useState(true);
    console.log(phoneNumber)

    const onPressHandler = () => {
        if (phoneNumber.length > 0) {
            setDisabled(false)
            navigation.navigate('BottomNavigation')
        } 
    }
    return (
        <View style={{ marginTop: 20, padding: 20 }}>
            <Text style={{ color: 'hsl(240, 25%, 25%)', padding: 5, fontSize: 20, fontWeight: 'bold' }}>
                What's your phone number?
            </Text>
            <Text style={{ color: 'hsl(240, 25%, 25%)', padding: 5, marginBottom: 40 }}>
                We need to make sure you only have access to your account.We won't share your number
                with anyone
            </Text>
            <Label title='Phone number' />
            <PhoneInput
                ref={phoneInput}
                defaultValue={phoneNumber}
                containerStyle={styles.phoneContainer}
                textContainerStyle={styles.textInput}
                onChangeFormattedText={text => {
                    setPhoneNumber(text);
                }}
                defaultCode="CA"
                layout='first'
                withShadow
                autoFocus
            />

            <Button
                onPress={onPressHandler}
                title='Send verification code'
                backgroundColor={disable ? 'grey' : 'hsl(240, 25%, 25%)'}
                color='white'
                width={'100%'}
                marginTop={80}
                paddingVertical={10}
                borderRadius={20}
                disable={disable}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    phoneContainer: {
        width: '100%',
        height: 50,
    },

    textInput: {
        paddingVertical: 0,
    },
    text: {
        color: 'black',
        fontWeight: '600',
    },
});