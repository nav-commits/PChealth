import { View, Text, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import ChoiceCard from '../../Molecules/ChoiceCard/ChoiceCard';
import { MainContext } from '../../../Context/MainContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ClinicianType({ navigation }) {
    const { foundAppointment, selectedTherapy, setClinicianVirtual, setClinicianInPerson } = useContext(MainContext);

    const [chosenOption, setChosenOption] = useState('');
    const selectedVirtual = (selectedItem) => {
        if (selectedItem) {
            const findItem = foundAppointment.map((service) =>
                service?.serviceDetails?.clinician.find((findItem) => {
                    let checkItem = findItem.id === selectedItem;
                    return checkItem;
                })
            );
            setClinicianVirtual(findItem);
        }
    };

    const selectedInPerson = (selectedItem) => {
        if (selectedItem) {
            const findItem = selectedTherapy.map((service) =>
                service?.clinician.find((findItem) => {
                    let checkItem = findItem.id === selectedItem;
                    return checkItem;
                })
            );
            setClinicianInPerson(findItem);
        }
    };

    const onPress = (item) => {
        selectedInPerson(item)
        setChosenOption(item);
        selectedVirtual(item);
        navigation.navigate('ClinicianBooking');
    };
    return (
        <View>
            {foundAppointment.some((item) => item?.type === 'Virtual') ? (
                <View>
                    {foundAppointment.map((service, id) => (
                        <View key={id}>
                            {service?.serviceDetails?.clinician.map((clinic, idx) => (
                                <View key={idx}>
                                    <ChoiceCard
                                        chosenOption={chosenOption}
                                        onPress={onPress}
                                        appointmentTitle={clinic.id}
                                        appointmentDescription={
                                            <View style={{ position: 'relative' }}>
                                                <Text style={styles.title}>
                                                    {clinic.profession}
                                                </Text>
                                                <Text style={styles.title}>{clinic.name}</Text>
                                                <Text style={styles.title}>{clinic.time}</Text>
                                                <View
                                                    style={{
                                                        position: 'absolute',
                                                        right: 5,
                                                        top: 20,
                                                    }}
                                                >
                                                    <MaterialIcons
                                                        name='keyboard-arrow-right'
                                                        size={28}
                                                        color='grey'
                                                    />
                                                </View>
                                            </View>
                                        }
                                    />
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
            ) : (
                <View>
                    {selectedTherapy.map((service, id) => (
                        <View key={id}>
                            {service?.clinician.map((selectedClinic, idx) => (
                                <View key={idx}>
                                    <ChoiceCard
                                        chosenOption={chosenOption}
                                        onPress={onPress}
                                        appointmentTitle={selectedClinic.id}
                                        appointmentDescription={
                                            <View style={{ position: 'relative' }}>
                                                <Text style={styles.title}>
                                                    {selectedClinic.profession}
                                                </Text>
                                                <Text style={styles.title}>
                                                    {selectedClinic.name}
                                                </Text>
                                                <Text style={styles.title}>
                                                    {selectedClinic.time}
                                                </Text>
                                                <View
                                                    style={{
                                                        position: 'absolute',
                                                        right: 5,
                                                        top: 20,
                                                    }}
                                                >
                                                    <MaterialIcons
                                                        name='keyboard-arrow-right'
                                                        size={28}
                                                        color='grey'
                                                    />
                                                </View>
                                            </View>
                                        }
                                    />
                                </View>
                            ))}
                        </View>
                    ))}
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
    appointmentTitle: {
        padding: 12,
        color: 'hsl(240, 25%, 25%)',
        fontWeight: 'bold',
        fontSize: 15,
    },
});
