import { View, Text, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import { MainContext } from '../../../Context/MainContext';
import RadioButton from '../../Atoms/RadioButton/RadioButton';

export default function BookingType({ navigation }) {
    const { serviceType } = useContext(MainContext);
    const [chosenOption, setChosenOption] = useState('In-Person');
    console.log(serviceType);
    // const onPress = () => {
    //     navigation.navigate('Book an Appointment');
    // };
    return (
        <View>
            {serviceType.map((option, id) => (
                <View key={id}>
                    {option?.therapyDetails?.appointmentDetails.map((appointment, id) => (
                        <View
                            key={id}
                            style={{
                                borderRadius: 12,
                                padding: 12,
                                margin: 13,
                                borderColor: 'hsl(240, 25%, 25%)',
                                borderWidth: 2,
                            }}
                        >
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Text style={styles.title}>{appointment?.book}</Text>
                                <Text style={styles.title}>{appointment?.inPerson}</Text>
                            </View>
                            <Text style={styles.description}>
                                {appointment?.appointmentDetails}
                            </Text>
                            <RadioButton
                                setChosenOption={setChosenOption}
                                chosenOption={chosenOption}
                                optionValue={appointment?.inPerson}
                            />
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
