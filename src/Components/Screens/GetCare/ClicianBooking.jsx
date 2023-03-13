import React, { useContext, useState } from 'react';
import { MainContext } from '../../../Context/MainContext';
import { View, Text, StyleSheet } from 'react-native';

export default function ClinicianBooking({ navigation }) {
    const { clinicianVirtual, clinicianInPerson } = useContext(MainContext);
    console.log(clinicianInPerson);
    console.log(clinicianVirtual)
    console.log(clinicianVirtual.some((item) => item?.meetingType === 'Virtual'));
    return (
        <View>
            {clinicianVirtual.some((item) => item?.meetingType === 'Virtual') ? (
                <View>
                    {clinicianVirtual.map((service, idx) => {
                        <View key={idx}>
                            <Text>{service?.id}</Text>
                            <Text>{service?.profession}</Text>
                            <Text>{service?.name}</Text>
                            <Text>{service?.time}</Text>
                        </View>;
                    })}
                </View>
            ) : (
                <View>
                    {clinicianInPerson.map((service, idx) => {
                        <View key={idx}>
                            <Text style={styles.title}>{service?.profession}</Text>
                            <Text style={styles.title}>{service?.name}</Text>
                            <Text style={styles.title}>{service?.time}</Text>
                        </View>;
                    })}
                </View>
            )}
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
});
