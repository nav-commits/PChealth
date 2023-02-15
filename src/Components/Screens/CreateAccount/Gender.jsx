import { View, Text, StyleSheet} from 'react-native';
import Button from '../../Atoms/Button/Button';
import React, { useState } from 'react';
import { ProgressBar } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { genderSelect } from '../../../Utils/Labels';
import Label from '../../Atoms/Label/Label';

export default function Gender({ navigation, route }) {
    const [selectedValue, setSelectedValue] = useState('');
    const [genderError, setGenderError] = React.useState('');

    const updateError = (error, stateUpdater) => {
        stateUpdater(error);
        setTimeout(() => {
            stateUpdater('');
        }, 2500);
    };

    const handleChangeOption = (val) => {
        if (val !== '0') {
            setSelectedValue(val);
        }
    };

    const isValidForm = () => {
        //check if gender is selected
        if (selectedValue !== '1' && selectedValue !== '2') {
            return updateError('Gender is required', setGenderError);
        }
        return true;
    };

    const submitHandler = () => {
        if (isValidForm()) {
            let completedProgressIncrease = progress + 0.33;
            navigation.navigate('BottomNavigation', {
                progress: completedProgressIncrease,
            });
        }
    };

    const { progress } = route.params;
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
                What's your sex and gender identity?
            </Text>
            <Text style={styles.textStyle}>
                By joining PC Health, you'll have access to virtual care providers. They'll need to
                know your sex at birth in order to give you appropriate advice.
            </Text>
            <Label
                title='Sex'
                paddingLeft={10}
                paddingTop={30}
                size={13}
                fontWeight={'bold'}
            />
            <View
                style={{
                    marginLeft: 10,
                    width: 200,
                    borderWidth: 1,
                    borderRadius: 10,
                    color: 'hsl(240, 25%, 25%)',
                }}
            >
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={handleChangeOption}
                    style={{ color: 'hsl(240, 25%, 25%)' }}
                >
                    {genderSelect.map((label, i) => (
                        <Picker.Item label={label.label} value={label.value} key={i} />
                    ))}
                </Picker>
            </View>
            {genderError ? <Text style={styles.error}>{genderError}</Text> : null}
            <Button
                title='Continue'
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
