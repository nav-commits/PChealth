import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import { MainContext } from '../../../Context/MainContext';
import ChoiceCard from '../../Molecules/ChoiceCard/ChoiceCard';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Location({ navigation }) {
    const { foundAppointment, setServiceLocation } = useContext(MainContext);
    const [chosenOption, setChosenOption] = useState('');
    const updateSelectedItem = (selectedItem) => {
        if (selectedItem) {
            const findItem = foundAppointment.map((item) =>
                item?.locationDetails.find((findItem) => {
                    let checkItem = findItem.name === selectedItem;
                    return checkItem;
                })
            );
            console.log(findItem)
            setServiceLocation(findItem);
        }
    };

    const onPress = (item) => {
        updateSelectedItem(item);
        setChosenOption(item)
        navigation.navigate('ServiceTime');
    };
    return (
        <View>
            <Text style={styles.title}>Choose a Location</Text>
            {foundAppointment.map((appointment, id) => (
                <View key={id}>
                    {appointment?.locationDetails.map((location, id) => (
                        <ChoiceCard
                            chosenOption={chosenOption}
                            onPress={onPress}
                            appointmentTitle={location.name}
                            appointmentDescription={
                                <View style={{ position: 'relative' }}>
                                    <Text style={styles.title}>{location.name}</Text>
                                    <Text style={styles.title}>{location.address}</Text>
                                    <View style={{ position: 'absolute', right: 5, top: 20 }}>
                                        <MaterialIcons
                                            name='keyboard-arrow-right'
                                            size={28}
                                            color='grey'
                                        />
                                    </View>
                                </View>
                            }
                            appointmentDetails={
                                <View>
                                    <Text style={styles.description}>
                                        {location.distance}Km Away
                                    </Text>
                                </View>
                            }
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
    description: {
        color: 'hsl(240, 25%, 25%)',
        padding: 2,
        fontSize: 11,
    },
});
