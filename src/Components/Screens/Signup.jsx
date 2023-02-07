import { View, Text, StatusBar, Image } from 'react-native';
import Button from '../Atoms/Button/Button';
import TextField from '../Atoms/TextField/TextField';
import React from 'react';
import Title from '../Atoms/Title/Title';

export default function Main({ navigation }) {
    const [inputs, setInputs] = React.useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const changeHandle = (text, input) => {
        setInputs({
            ...inputs,
            [input]: text
        })
    }

    return (
        <View>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#87CEEB" translucent={true} />
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10, marginTop: 40, alignItems: 'center' }}>
                <Text >Create a PC Health id</Text>
                <Image
                    source={require('../../../assets/PcHealth.png')}
                    style={{ width: 45, height: 35, borderRadius: 10, marginLeft: 10 }}
                />
            </View>
            <Title title='Email' paddingLeft={10} paddingTop={30} size={13} />
            <TextField onChangeText={(text) => changeHandle(text, 'email')} />
            <Title title='Password' paddingLeft={10} paddingTop={30} size={13} />
            <TextField onChangeText={(text) => changeHandle(text, 'password')} />
            <Title title='Confirm Password' paddingLeft={10} paddingTop={30} size={13} />
            <TextField onChangeText={(text) => changeHandle(text, 'confirmPassword')} />
            <Button
                title='Create a PCTM-id'
                backgroundColor='black'
                width={'100%'}
                marginTop={20}
                onPress={() => navigation.navigate('PassCode')}
                paddingHorizontal={10}
                paddingVertical={15}
            />
        </View>
    );
}
