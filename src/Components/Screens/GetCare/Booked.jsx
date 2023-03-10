
import React, { useContext, useState } from 'react';
import ChoiceCard from '../../Molecules/ChoiceCard/ChoiceCard';
import { MainContext } from '../../../Context/MainContext';
import RadioButton from '../../Atoms/RadioButton/RadioButton';
import Button from '../../Atoms/Button/Button';
import { View, Text, StyleSheet } from 'react-native';

export default function Booked({ navigation }) {
    const { foundAppointment } = useContext(MainContext);
    return (
        <View>
            <Text style={styles.appointmentTitle}>Congratulations you're booked!</Text>
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
    appointmentTitle: {
        padding: 12,
        color: 'hsl(240, 25%, 25%)',
        fontWeight: 'bold',
        fontSize: 15,
    },
});
