import { View, Text, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';

export default function ChoiceCard({
    chosenOption,
    appointmentTitle,
    radioButton,
    id,
    appointmentType,
    appointmentDetails,
}) {
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
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={styles.title}>{appointmentTitle}</Text>
                <Text style={styles.title}>{appointmentType}</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={styles.description}>{appointmentDetails}</Text>
                {radioButton}
            </View>
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
