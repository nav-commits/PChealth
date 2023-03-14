import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Divider from '../../Atoms/Divider/Divider';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function ServiceTypeContent({ filterData, onPress }) {
    return (
        <View>
            {filterData.map((option) => {
                return (
                    <View key={option.id}>
                        <Text style={styles.title}>{option.popular}</Text>
                        {option.PopularServices.map((item) => {
                            return (
                                <View style={styles.parentContainer} key={item?.id}>
                                    <TouchableOpacity onPress={() => onPress(item?.title)}>
                                        <View style={styles.childContainer}>
                                            <Text style={styles.labelTitle}>{item?.title}</Text>
                                            <SimpleLineIcons
                                                name='arrow-right'
                                                size={13}
                                                color='hsl(240, 25%, 25%)'
                                            />
                                        </View>
                                    </TouchableOpacity>

                                    <Divider backgroundColor='grey' width='100%' height={0.5} />
                                </View>
                            );
                        })}

                        <Text style={styles.title}>{option.moreCareService}</Text>
                        {option.moreCareServices.map((item) => {
                            return (
                                <View style={styles.parentContainer} key={item?.id}>
                                    <TouchableOpacity onPress={() => onPress(item?.title)}>
                                        <View style={styles.childContainer}>
                                            <Text style={styles.labelTitle}>{item?.title}</Text>
                                            <SimpleLineIcons
                                                name='arrow-right'
                                                size={13}
                                                color='hsl(240, 25%, 25%)'
                                            />
                                        </View>
                                    </TouchableOpacity>

                                    <Divider backgroundColor='grey' width='100%' height={0.5} />
                                </View>
                            );
                        })}
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'hsl(240, 25%, 25%)',
        paddingLeft: 10,
        marginTop: 12,
    },
    labelTitle: {
        fontWeight: 'bold',
        color: 'hsl(240, 25%, 25%)',
        paddingBottom: 8,
    },
    childContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    parentContainer: {
        padding: 12,
    },
});
