import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../../Atoms/Button/Button';
import TextField from '../../Atoms/TextField/TextField';
import React, { useState } from 'react';
import Label from '../../Atoms/Label/Label';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { ProgressBar } from 'react-native-paper';
import { useContext } from 'react';
import { FormsContext } from '../../../Context/FormsContext';

export default function TellUsAboutYourself({ navigation }) {
    const { inputs, setInputs } = useContext(FormsContext);
    // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    // const [date, setDate] = useState('');
    const [firstNameError, setFirstNameError] = React.useState('');
    const [lastNameError, setLastNameError] = React.useState('');
    // const [dateError, setDateError] = React.useState('');
    let progress = 0.33

    const changeHandle = (text, input) => {
        setInputs({
            ...inputs,
            [input]: text,
        });
    };

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setDate(date);
        hideDatePicker();
    };

    // const getDate = () => {
    //     let tempDate = date.toString().split(' ');
    //     let fullDate = `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`;
    //     return date !== '' ? fullDate : '';
    // };

    const updateError = (error, stateUpdater) => {
        stateUpdater(error);
        setTimeout(() => {
            stateUpdater('');
        }, 2500);
    };

    const isValidForm = () => {
        // first name is there
        if (!inputs.firstName.length > 0)
            return updateError('FirstName Required', setFirstNameError);
        // Last name is there
        if (!inputs.lastName.length > 0) return updateError('LastName Required', setLastNameError);

        // // Date
        // if (!date) return updateError('Date Required', setDateError);

        return true;
    };

    const submitHandler = () => {
        if (isValidForm()) {
           let completedProgressIncrease = progress + 0.33
            navigation.navigate('Sex and gender identity', {
                progress: completedProgressIncrease
            });
        }
    };

    return (
        <View >
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
                    padding: 10
                }}
            >
                Tell us about yourself
            </Text>
            <Text style={styles.textStyle}>
                Our Care Team needs this information to provide health advice and to support you in
                case of medical emergency
            </Text>

            <Label
                title='First name'
                paddingLeft={10}
                paddingTop={30}
                size={13}
                fontWeight={'bold'}
                color={'hsl(240, 25%, 25%)'}
            />
            <TextField onChangeText={(text) => changeHandle(text, 'firstName')} borderRadius={5} />
            {firstNameError ? <Text style={styles.error}>{firstNameError}</Text> : null}

            <Label
                title='Last name'
                paddingLeft={10}
                paddingTop={30}
                size={13}
                fontWeight={'bold'}
                color={'hsl(240, 25%, 25%)'}
            />
            <TextField onChangeText={(text) => changeHandle(text, 'lastName')} borderRadius={5} />
            {lastNameError ? <Text style={styles.error}>{lastNameError}</Text> : null}

            {/* <Label
                title='Date of birth'
                fontWeight={'bold'}
                paddingLeft={10}
                paddingTop={30}
                size={13}
                color={'hsl(240, 25%, 25%)'}
            />
            <TouchableOpacity onPress={showDatePicker}>
                <TextField value={getDate()} borderRadius={5} editable={false} selectTextOnFocus={false} color='black' />
            </TouchableOpacity> */}

            <Text style={styles.textStyle}>You must be at least 16 years old to proceed</Text>
            {/* {dateError ? <Text style={styles.error}>{dateError}</Text> : null} */}

            {/* <DateTimePickerModal
                minimumDate={new Date('1950-01-01')}
                maximumDate={new Date('2007-12-31')}
                isVisible={isDatePickerVisible}
                mode='date'
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            /> */}
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
                color="white"
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
        padding: 10
    },
});
