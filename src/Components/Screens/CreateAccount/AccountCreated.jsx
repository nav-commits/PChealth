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
                    width: 410,
                    height: 290,
                    borderBottomRightRadius: 80,
                    borderBottomLeftRadius: 80,
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
