import { View, Text, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';

export default function ChoiceCard({ chosenOption, appointmentDescription, id, appointmentDetails, appointmentTitle }) {
    return (
        <View
            key={id}
            style={{
                borderRadius: 12,
                padding: 12,
                margin: 13,
                borderColor: appointmentTitle === chosenOption ? 'hsl(240, 25%, 25%)' : 'grey',
                borderWidth: 2,
            }}
        >
            {appointmentDescription}
            {appointmentDetails}
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
