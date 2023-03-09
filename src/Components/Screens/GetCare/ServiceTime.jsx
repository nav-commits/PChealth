import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
// import { MainContext } from '../../../Context/MainContext';
// import ChoiceCard from '../../Molecules/ChoiceCard/ChoiceCard';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ServiceTime({ navigation }) {
    // const { foundAppointment, setServiceLocation } = useContext(MainContext);
    // const updateSelectedItem = (selectedItem) => {
    //     if (selectedItem) {
    //         const findItem = foundAppointment.map((item) =>
    //             item?.locationDetails.find((findItem) => {
    //                 let checkItem = findItem.name === selectedItem;
    //                 return checkItem;
    //             })
    //         );
    //         console.log(findItem)
    //         setServiceLocation(findItem);
    //     }
    // };

    // const onPress = (item) => {)
    //     navigation.navigate('ServiceTypeDetail');
    // };
    return (
        <View>
            <Text style={styles.title}>Service Time</Text>
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