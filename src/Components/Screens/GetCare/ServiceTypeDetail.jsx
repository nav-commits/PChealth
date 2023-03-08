import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useContext } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../.././Atoms/Button/Button';
import { MainContext } from '../../../Context/MainContext';

export default function ServiceTypeDetail({ navigation }) {
    const { serviceType } = useContext(MainContext);
    const onPress = () => {
        navigation.navigate('BookingType');
    };
    return (
        <View>
            {serviceType.map((option, idx) => {
                return (
                    <View key={idx}>
                        <Image
                            source={{ uri: option?.Image }}
                            resizeMode='contain'
                            style={{
                                width: 400,
                                height: 180,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 20,
                            }}
                        />
                        <Text style={styles.title}>{option?.therapyDetails?.therapyTitle}</Text>
                        <Text style={styles.titleDescription}>
                            {option?.therapyDetails?.description}
                        </Text>
                        <View style={{ paddingLeft: 12 }}>
                            <View style={styles.alignContentOnPage}>
                                <Ionicons
                                    name={option?.therapyDetails?.booking?.img}
                                    size={12}
                                    color={'hsl(240, 25%, 25%)'}
                                />
                                <Text style={{ paddingLeft: 10 }}>
                                    {option?.therapyDetails?.booking?.booking}
                                </Text>
                            </View>

                            <View style={styles.alignContentOnPage}>
                                <Ionicons
                                    name={option?.therapyDetails?.type?.img}
                                    size={12}
                                    color={'hsl(240, 25%, 25%)'}
                                />
                                <Text style={{ paddingLeft: 10 }}>
                                    {option?.therapyDetails?.type?.type}
                                </Text>
                            </View>
                            <View style={styles.alignContentOnPage}>
                                <Ionicons
                                    name={option?.therapyDetails?.priceDetail?.img}
                                    size={12}
                                    color={'hsl(240, 25%, 25%)'}
                                />
                                <Text style={{ paddingLeft: 10 }}>
                                    {option?.therapyDetails?.priceDetail?.priceDetail}
                                </Text>
                            </View>
                        </View>
                        <Button
                            title='Continue'
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
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: 'hsl(240, 25%, 25%)',
        fontWeight: 'bold',
        padding: 12,
        fontSize: 18,
    },
    titleDescription: {
        color: 'hsl(240, 25%, 25%)',
        padding: 10,
    },
    alignContentOnPage: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
});
