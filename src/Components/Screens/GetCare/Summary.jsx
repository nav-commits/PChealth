import { View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { MainContext } from '../../../Context/MainContext';
import Button from '../../Atoms/Button/Button';
import { FormsContext } from '../../../Context/FormsContext';

export default function Summary({ navigation }) {
    const { foundAppointment } = useContext(MainContext);
    const { inputs } = useContext(FormsContext);

    const onPress = () => {
        navigation.navigate('Booked');
    };
    return (
        <View>
            <Text style={styles.mainTitle}>Your Summary</Text>

            {foundAppointment.map(
                (item, idx) =>
                    item && (
                        <View style={styles.container} key={idx}>
                            <View>
                                <Text style={styles.label}>Service</Text>
                                <Text style={styles.title}>{item?.serviceDetails?.title}</Text>
                            </View>
                            <View>
                                <Text style={styles.label}>Patient</Text>
                                <Text style={styles.title}>{inputs.firstName}</Text>
                            </View>

                            <View>
                                <Text style={styles.label}>Date and Time</Text>
                                <Text style={styles.title}>{item?.title}</Text>
                            </View>

                            <View>
                                <Text style={styles.label}>Appointment</Text>
                                <Text style={styles.title}>{item?.serviceDetails?.type}</Text>
                            </View>

                            <View>
                                <Text style={styles.label}>Service Cost</Text>
                                <Text style={styles.title}>${item?.serviceDetails?.cost}.00</Text>
                            </View>
                        </View>
                    )
            )}
         
            <Button
                title='Book'
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
        padding: 10,
        fontSize: 13,
    },
    mainTitle: {
        textAlign: 'center',
        color: 'hsl(240, 25%, 25%)',
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 20
    },
    container: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        paddingTop: 10,
        paddingLeft: 10
    },
    label: {
        color: 'hsl(240, 25%, 25%)',
        padding: 5,
        fontSize: 13,
        fontWeight: 'bold',
    },
});
