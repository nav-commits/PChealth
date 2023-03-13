import { View, Text, StyleSheet } from 'react-native';
import React, { useContext} from 'react';
import { MainContext } from '../../../Context/MainContext';

export default function Summary({ navigation }) {
    const { foundAppointment } = useContext(MainContext);
    console.log(foundAppointment)
    return (
        <View>
            <Text style={styles.appointmentTitle}>Your Summary</Text>
            {foundAppointment.map((item, idx) => {
                <View key={idx}>
                    <Text>{item?.serviceDetails?.title}</Text>
                    <Text>{item?.serviceDetails?.description}</Text>
                    <Text>{item?.serviceDetails?.time}</Text>
                    <Text>{item?.serviceDetails?.cost}</Text>
                </View>;
            })}
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
