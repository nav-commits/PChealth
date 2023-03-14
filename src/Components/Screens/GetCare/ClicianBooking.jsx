import React, { useContext, useState } from 'react';
import { MainContext } from '../../../Context/MainContext';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../../Atoms/Button/Button';

export default function ClinicianBooking({ navigation }) {
    const { clinicianVirtual, clinicianInPerson } = useContext(MainContext);
    const onPress = () => {
        navigation.navigate('Booked');
    };
    return (
        <View>
            {clinicianVirtual.some((item) => item?.meetingType === 'Virtual') ? (
                <View>
                    {clinicianVirtual.map((service, idx) => {
                        return (
                          service &&(  <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: 40 }} key={idx}>
                                <Text style={styles.title}>{service?.profession}</Text>
                                <Image
                                    source={{ uri: service?.img }}
                                    resizeMode='contain'
                                    style={{
                                        width: 150,
                                        height: 150,
                                        borderRadius: 80
                                    }}
                                />
                                <Text style={styles.title}>{service?.name}</Text>
                                <Text style={styles.title}>{service?.time}</Text>
                            </View>
                        ));
                    })}
                </View>
            ) : (
                <View>
                    {clinicianInPerson.map((service, idx) => {
                        return (
                            service && (<View style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: 40 }} key={idx}>
                                <Text style={styles.title}>{service?.profession}</Text>
                                <Image
                                    source={{ uri: service?.img }}
                                    resizeMode='contain'
                                    style={{
                                        width: 120,
                                        height: 120,
                                        borderRadius: 80,
                                        marginTop: 10
                                    }}
                                />
                                <Text style={styles.title}>{service?.name}</Text>
                                <Text style={styles.title}>{service?.time}</Text>
                            </View>
                        ));
                    })}
                </View>
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
        fontSize: 13,
        paddingTop: 10
    },
});
