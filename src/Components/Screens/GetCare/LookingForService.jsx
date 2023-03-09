import { View, Text, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import { MainContext } from '../../../Context/MainContext';
import ChoiceCard from '../../Molecules/ChoiceCard/ChoiceCard';
import RadioButton from '../../Atoms/RadioButton/RadioButton';

export default function LookingForService({ navigation }) {
    const { foundAppointment, serviceLocation } = useContext(MainContext);
    // const onPress = (item) => {)
    //     navigation.navigate('ServiceTypeDetail');
    // };
    console.log(serviceLocation);
    console.log(foundAppointment);
    return (
        <View>
            <Text style={styles.title}>What service are you looking for?</Text>
            {foundAppointment.some((item) => item?.type === 'Virtual') ? (
                <View>
                    {foundAppointment.map(
                        (item, i) =>
                            item && (
                                <View key={i}>
                                    <ChoiceCard
                                        appointmentTitle={item?.serviceDetails?.title}
                                        appointmentDescription={
                                            <View>
                                                <Text>{item?.serviceDetails?.title}</Text>
                                                <Text>${item?.serviceDetails?.cost}</Text>
                                                <Text>{item?.serviceDetails?.time}min</Text>

                                                <View
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        justifyContent: 'space-evenly',
                                                    }}
                                                >
                                                    <Text>{item?.serviceDetails?.type}</Text>
                                                    <RadioButton
                                                        optionValue={item?.serviceDetails?.title}
                                                    />
                                                </View>
                                            </View>
                                        }
                                    />
                                </View>

                            )
                    )}
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
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 15,
    },
    description: {
        color: 'hsl(240, 25%, 25%)',
        padding: 2,
        fontSize: 11,
    },
});
