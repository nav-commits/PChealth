import { View, Text, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import ChoiceCard from '../../Molecules/ChoiceCard/ChoiceCard';
import { MainContext } from '../../../Context/MainContext';
import RadioButton from '../../Atoms/RadioButton/RadioButton';

export default function AppointmentFor({ navigation }) {
    const { foundAppointment } = useContext(MainContext);
    const [chosenOption, setChosenOption] = useState('Myself');
    // const onPress = () => {
    // };

    return (
        <View>
            <Text style={styles.appointmentTitle}>Who is the appointment for?</Text>
            {foundAppointment.map(
                (appointment, id) =>
                    appointment?.attendingPerson && (
                        <View key={id}>
                            <ChoiceCard
                                chosenOption={chosenOption}
                                appointmentTitle={appointment?.attendingPerson}
                                appointmentDescription={
                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Text style={styles.title}>
                                            {appointment?.attendingPerson}
                                        </Text>
                                        <RadioButton
                                            setChosenOption={setChosenOption}
                                            chosenOption={chosenOption}
                                            optionValue={appointment?.attendingPerson}
                                        />
                                    </View>
                                }
                            />
                        </View>
                    )
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
