import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../../Atoms/Button/Button';
import React, { useState } from 'react';
import { ProgressBar } from 'react-native-paper';

export default function GenderPage({ navigation, route }) {
    const submitHandler = () => {
        navigation.navigate('BottomNavigation');
    };

    const {progress } = route.params;
    return (
        <View>
            <View style={{ marginTop: 1 }}>
                <ProgressBar progress={progress} color={'hsl(240, 25%, 25%)'} visible={true} />
            </View>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'hsl(240, 25%, 25%)',
                    marginBottom: 10,
                    marginTop: 20,
                    padding: 10,
                }}
            >
                Tell us about yourself
            </Text>
            <Text style={styles.textStyle}>
                Our Care Team needs this information to provide health advice and to support you in
                case of medical emergency
            </Text>
            <Button
                title='Continue & Accept'
                backgroundColor='hsl(240, 25%, 25%)'
                width={'100%'}
                marginTop={20}
                onPress={submitHandler}
                paddingHorizontal={10}
                paddingVertical={15}
                borderRadius={20}
                padding={10}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        marginLeft: 10,
    },
    textStyle: {
        color: 'hsl(240, 25%, 25%)',
        padding: 10,
    },
});
