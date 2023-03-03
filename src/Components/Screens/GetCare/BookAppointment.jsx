import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../Atoms/Button/Button';
import Label from '../../Atoms/Label/Label';
import { provinceOptions } from '../../../Utils/Provinces';
import ListItemContent from '../../Organisms/ListItemContent/ListItemContent';
import { serviceData } from '../../../data/Service.json';

export default function BookAppointment({ navigation }) {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [chosenOption, setChosenOption] = useState('Ontario');
    const [filterData, setFilterData] = useState([]);
    const submitHandler = () => {
        setModalVisible(true);
    };
    const filterByProvince = (province) => {
        if (serviceData.includes(province.location)) {
            const filterItemsArray = serviceData.filter((data) => data.location === province);
            setFilterData(filterItemsArray);
        }
    };
    console.log(filterData);
    return (
        <View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalView}>
                    <Label
                        title='Location'
                        size={15}
                        marginTop={10}
                        fontWeight='bold'
                        textAlign={'center'}
                    />
                    <ListItemContent
                        data={provinceOptions}
                        setChosenOption={setChosenOption}
                        chosenOption={chosenOption}
                        filterByProvince={filterByProvince}
                    />
                    <Button
                        title={'Save'}
                        backgroundColor='hsl(240, 25%, 25%)'
                        color='white'
                        width={280}
                        paddingHorizontal={10}
                        paddingVertical={10}
                        borderRadius={20}
                        borderWidth={2}
                        borderColor='hsl(240, 25%, 25%)'
                        marginTop={40}
                        marginLeft={40}
                        onPress={() => setModalVisible(!modalVisible)}
                    />
                </View>
            </Modal>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Button
                    title={chosenOption.toUpperCase()}
                    backgroundColor='white'
                    color='hsl(240, 25%, 25%)'
                    paddingHorizontal={10}
                    paddingVertical={10}
                    borderRadius={20}
                    borderWidth={2}
                    borderColor='hsl(240, 25%, 25%)'
                    marginTop={30}
                    Icon={<Icon name={'location-sharp'} size={14} color={'hsl(240, 25%, 25%)'} />}
                    onPress={submitHandler}
                />
            </View>
            <Text style={styles.locationText}>
                Select a specialist to view available on-demand, virtual, {'\n'} and in-person
                appointments.Offerings are based on location
            </Text>
            <View>
                {filterData.map((option) => {
                    return (
                        <View key={option.id}>
                            <Text>{option.popular}</Text>
                            <Text>{option.location}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: 'white',
        shadowColor: '#000',
        height: '100%',
        width: '100%',
        padding: 10,
    },
    locationText: {
        textAlign: 'center',
        marginTop: 20,
        paddingLeft: 40,
        paddingRight: 40,
        fontSize: 12.5,
    },
});
