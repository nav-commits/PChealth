import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function ServiceTypeDetail({ route }) {
    const { serviceType } = route.params;
    console.log(serviceType);
    return (
        <View>
            <Text>welcome service area</Text>
            {serviceType.map((option, idx) => {
                return (
                    <View key={idx}>
                        <Text>{option?.title}</Text>
                        <Text>{option?.therapyDetails?.description}</Text>
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({});
