import { View, Text, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import { MainContext } from '../../../Context/MainContext';
import ChoiceCard from '../../Molecules/ChoiceCard/ChoiceCard';

export default function Location({ navigation }) {
    const { foundAppointment } = useContext(MainContext);
    // const onPress = () => {

    // };
    return (
        <View>
            <Text style={styles.title}>Choose a Location</Text>
            {foundAppointment.map((appointment, id) => (
                <View key={id}>
                    {appointment?.locationDetails.map((location, id) => (
                        <ChoiceCard
                            appointmentTitle={false}
                            appointmentDescription={
                                <View>
                                    <Text style={styles.title}>{location.name}</Text>
                                    <Text style={styles.title}>{location.address}</Text>
                                </View>
                            }
                            appointmentDetails={
                                <View>
                                    <Text style={styles.description}>{location.distance}Km</Text>
                                </View>
                            }
                            id={id}
                        />
                    ))}
                </View>
            ))}
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
