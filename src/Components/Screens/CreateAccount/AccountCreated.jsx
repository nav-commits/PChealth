import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import Button from '../../Atoms/Button/Button';

export default function AccountCreated({ navigation }) {
    const submitHandler = () => {
        navigation.navigate('BottomNavigation');
    };
    return (
        <View>
            <Image
                resizeMode={'contain'}
                source={require('../../../../assets/Account.png')}
                style={{
                    height: 199,
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 10,
                }}
            />
            <Text style={styles.textStyle}>Congratulations! your Account is Created!</Text>
            <View style={{ padding: 10 }}>
                <Button
                    title='Continue'
                    backgroundColor='hsl(240, 25%, 25%)'
                    width={'100%'}
                    marginTop={20}
                    onPress={submitHandler}
                    paddingHorizontal={10}
                    paddingVertical={15}
                    borderRadius={20}
                    color="white"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        color: 'hsl(240, 25%, 25%)',
        paddingTop: 30,
        paddingLeft: 10
    },
});
