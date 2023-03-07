import { View, Text, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';


export default function AppointmentFor({ navigation }) {
    // const onPress = () => {
    //     if (foundAppointment.title.includes('Virtual')) {
    //         navigation.navigate('Book an Appointment');
    //     }
    //     else {
    //         navigation.navigate('Book an Appointment');
    //     }
    // };
    return (
        <View>
            <Text>Appointment for</Text>
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