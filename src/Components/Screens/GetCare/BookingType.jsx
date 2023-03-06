import { View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { MainContext } from '../../../Context/MainContext';

export default function BookingType({ navigation }) {
    const { serviceType } = useContext(MainContext);
    console.log(serviceType)
    // const onPress = () => {
    //     navigation.navigate('Book an Appointment');
    // };
    return (
        <View>
           <Text>Booking Type</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: 'hsl(240, 25%, 25%)',
        fontWeight: 'bold',
        padding: 12,
        fontSize: 18,
    },
    titleDescription: {
        color: 'hsl(240, 25%, 25%)',
        padding: 10,
    },
    alignContentOnPage: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
});
