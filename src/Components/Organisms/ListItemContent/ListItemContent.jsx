import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import RadioButton from '../../Atoms/RadioButton/RadioButton';
import Divider from '../../Atoms/Divider/Divider';

export default function ListItemContent({ data, setChosenOption, chosenOption, filterByProvince }) {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {data.map((option,idx) => {
                return (
                    <View>
                        <View key={idx} style={styles.container}>
                            <Text style={styles.radioText}>{option.value}</Text>
                            <RadioButton
                                setChosenOption={setChosenOption}
                                chosenOption={chosenOption}
                                optionValue={option.value}
                                filterByProvince={filterByProvince}
                            />
                        </View>
                        <Divider
                            backgroundColor='grey'
                            position='relative'
                            bottom={20}
                            width='100%'
                            height={0.5}
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
        marginRight: 30,
        fontSize: 16,
        color: 'hsl(240, 25%, 25%)',
    },
});
