import { View, Text, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import ChoiceCard from '../../Molecules/ChoiceCard/ChoiceCard';
import { MainContext } from '../../../Context/MainContext';
import RadioButton from '../../Atoms/RadioButton/RadioButton';
import Button from '../../Atoms/Button/Button';

export default function AppointmentFor({ navigation }) {
    const { foundAppointment } = useContext(MainContext);
    const [chosenOption, setChosenOption] = useState('Myself');

    const updateSelectedItem = (selectedItem) => {
        console.log(selectedItem, 'found item');
    };

    const onPress = () => {
        navigation.navigate('LookingForService');
    };

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
                                            updateSelectedItem={updateSelectedItem}
                                        />
                                    </View>
                                }
                            />
                        </View>
                    )
            )}
            <Button
                title='Continue'
                backgroundColor='hsl(240, 25%, 25%)'
                color='white'
                paddingVertical={10}
                borderRadius={20}
                borderWidth={2}
                marginLeft={15}
                marginRight={15}
                marginTop={50}
                borderColor='hsl(240, 25%, 25%)'
                onPress={onPress}
            />
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
