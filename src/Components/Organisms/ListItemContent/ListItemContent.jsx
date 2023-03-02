import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import RadioButton from '../../Atoms/RadioButton/RadioButton';

export default function ListItemContent({ data, setChosenOption, chosenOption }) {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {data.map((option) => {
                return (
                    <View key={option.label} style={styles.container}>
                        <Text style={styles.radioText}>{option.value}</Text>
                        <RadioButton
                            setChosenOption={setChosenOption}
                            chosenOption={chosenOption}
                            optionValue={option.value}
                        />
                    </View>
                );
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 35,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    radioText: {
        marginRight: 50,
        fontSize: 16,
        color: 'hsl(240, 25%, 25%)',
    },
    radioCircle: {
        height: 30,
        width: 30,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'hsl(240, 25%, 25%)',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
    },
    selectedRb: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: 'hsl(240, 25%, 25%)',
    },
    result: {
        marginTop: 10,
        color: 'white',
        fontWeight: '600',
        backgroundColor: 'hsl(240, 25%, 25%)',
    },
});
