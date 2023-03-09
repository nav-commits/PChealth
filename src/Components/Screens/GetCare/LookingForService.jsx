import { View, Text, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import { MainContext } from '../../../Context/MainContext';

export default function LookingForService({ navigation }) {
    const { foundAppointment, serviceLocation } = useContext(MainContext);
    // const onPress = (item) => {)
    //     navigation.navigate('ServiceTypeDetail');
    // };
    console.log(serviceLocation)
    console.log(foundAppointment)
    return (
        <View>
            <Text style={styles.title}>Service Time</Text>
            {foundAppointment.some((item) => item?.type === 'Virtual') ? (
                <View>
                    {foundAppointment.map((item, i) => (
                        <View key={i}>
                            <Text>{item?.serviceDetails?.title}</Text>
                            <Text>{item?.serviceDetails?.time}</Text>
                        </View>
                    ))}

                </View>
            ) : (
                <Text>In Person</Text>
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
    description: {
        color: 'hsl(240, 25%, 25%)',
        padding: 2,
        fontSize: 11,
    },
});
