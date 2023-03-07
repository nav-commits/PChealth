import { View, Text, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import { MainContext } from '../../../Context/MainContext';
import RadioButton from '../../Atoms/RadioButton/RadioButton';

export default function BookingType({ navigation }) {
    const { serviceType, setFoundAppointment, foundAppointment } = useContext(MainContext);
    const [chosenOption, setChosenOption] = useState('Book for later');

    const updateSelectedItem = (selectedItem) => {
        if (selectedItem) {
            const findItem = serviceType.map((item) =>
                item?.therapyDetails?.appointmentDetails.find((findItem) => {
                    let checkItem = findItem.title === selectedItem;
                    return checkItem;
                })
            );
            setFoundAppointment(findItem);
        }
    };
    console.log(foundAppointment);
    // const onPress = () => {
    //     navigation.navigate('Book an Appointment');
    // };
    return (
        <View>
            <Text
                style={{
                    padding: 12,
                    color: 'hsl(240, 25%, 25%)',
                    fontWeight: 'bold',
                    fontSize: 15,
                }}
            >
                When do you want to have your appointment?
            </Text>
            {serviceType.map((option, id) => (
                <View key={id}>
                    {option?.therapyDetails?.appointmentDetails.map((appointment, id) => (
                        <View
                            key={id}
                            style={{
                                borderRadius: 12,
                                padding: 12,
                                margin: 13,
                                borderColor:
                                    appointment?.title === chosenOption
                                        ? 'hsl(240, 25%, 25%)'
                                        : 'grey',
                                borderWidth: 2,
                            }}
                        >
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Text style={styles.title}>{appointment?.title}</Text>
                                <Text style={styles.title}>{appointment?.type}</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Text style={styles.description}>
                                    {appointment?.appointmentDetails}
                                </Text>
                                <RadioButton
                                    setChosenOption={setChosenOption}
                                    chosenOption={chosenOption}
                                    optionValue={appointment?.title}
                                    updateSelectedItem={updateSelectedItem}
                                />
                            </View>
                        </View>
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
        paddingLeft: 2,
        paddingRight: 10,
        paddingTop: 5,
        fontSize: 13,
    },
});
