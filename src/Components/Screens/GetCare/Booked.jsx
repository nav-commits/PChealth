import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../Atoms/Button/Button';

export default function Booked({ navigation }) {
    const onPress = () => {
        navigation.navigate('Book an Appointment');
    };
    return (
        <View>
            <Text style={styles.title}>Congratulations you're booked!</Text>
            <Button
                title='Return'
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
        padding: 10,
        fontSize: 13,
    },
});
