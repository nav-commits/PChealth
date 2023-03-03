import { View, Text, StyleSheet,} from 'react-native';
import React, { useState } from 'react';


export default function ServiceTypeDetail({route}) {
    const { serviceType } = route.params;
    console.log(serviceType)
    return (
        <View>
            <Text>ServiceType</Text>
        </View>
    );
}

const styles = StyleSheet.create({
});
