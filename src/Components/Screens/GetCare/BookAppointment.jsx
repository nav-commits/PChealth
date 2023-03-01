import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import React, { useState, useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../Atoms/Button/Button';
import RadioForm from 'react-native-simple-radio-button';
import Label from '../../Atoms/Label/Label';

export default function BookAppointment({ navigation }) {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [chosenOption, setChosenOption] = useState('ONTARIO'); //will store our current user options
    const options = [
        { label: 'ONTARIO', value: 'ONTARIO' },
        { label: 'Samsung', value: 'samsung' },
        { label: 'Apple', value: 'apple' },
        { label: 'Samsung', value: 'samsung' },
        { label: 'Apple', value: 'apple' },
        { label: 'Samsung', value: 'samsung' },
    ];
    const submitHandler = () => {
        setModalVisible(true);
    };

    return (
        <View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
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
                    <RadioForm
                        radio_props={options}
                        initial={0}
                        onPress={(value) => {
                            setChosenOption(value);
                        }}
                        style={{marginTop: 30, padding: 10 }}
                        labelColor='hsl(240, 25%, 25%)'
                        selectedButtonColor='hsl(240, 25%, 25%)'
                        selectedLabelColor='hsl(240, 25%, 25%)'
                        buttonColor='hsl(240, 25%, 25%)'
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
                        onPress={() => setModalVisible(!modalVisible)}
                    />
                </View>
            </Modal>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Button
                    title={chosenOption}
                    backgroundColor='white'
                    color='hsl(240, 25%, 25%)'
                    width={120}
                    paddingHorizontal={10}
                    paddingVertical={10}
                    borderRadius={20}
                    borderWidth={2}
                    borderColor='hsl(240, 25%, 25%)'
                    marginTop={40}
                    Icon={<Icon name={'location-sharp'} size={14} color={'hsl(240, 25%, 25%)'} />}
                    onPress={submitHandler}
                />
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
    },
});
