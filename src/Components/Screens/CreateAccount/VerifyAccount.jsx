import { View, Text} from 'react-native';
import Button from '../../Atoms/Button/Button';
import React from 'react';
import Label from '../../Atoms/Label/Label';
import TextField from '../../Atoms/TextField/TextField';

export default function VerifyAccount({ navigation}) {
    const [code, setCode] = React.useState('');
    const [disable, setDisabled] = React.useState(true);

    const onPressHandler = () => {
        navigation.navigate('TellUsAboutYourself');
    };
    const onChangeTextHandler = (text) => {
        if (text.length >= 5) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
        setCode(text);
    };

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
                Enter your verification code
            </Text>
            <Text style={{ color: 'hsl(240, 25%, 25%)', padding: 5, marginBottom: 40 }}>
                A verification code has been sent to your phone number
            </Text>
            <Label title='5-digit code' paddingLeft={15} />
            <TextField value={code} onChangeText={onChangeTextHandler} borderRadius={10} />
            <Button
                onPress={onPressHandler}
                title='Continue'
                backgroundColor={disable ? 'grey' : 'hsl(240, 25%, 25%)'}
                color='white'
                width={'100%'}
                marginTop={30}
                paddingVertical={10}
                borderRadius={20}
                disabled={disable}
            />
        </View>
    );
}


