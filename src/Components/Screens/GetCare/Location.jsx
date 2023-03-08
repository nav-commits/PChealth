import { View, Text, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import { MainContext } from '../../../Context/MainContext';
import RadioButton from '../../Atoms/RadioButton/RadioButton';
import Button from '../../Atoms/Button/Button';

export default function Location({ navigation }) {
    // const onPress = () => {
    
    // };
    return (
        <View>
            <Text>Location</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: 'hsl(240, 25%, 25%)',
        fontWeight: 'bold',
        padding: 2,
        fontSize: 13,
    },
    description: {
        paddingLeft: 2,
        paddingRight: 10,
        paddingTop: 5,
        fontSize: 13,
    },
});
