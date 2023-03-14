import { View, Text, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import { MainContext } from '../../../Context/MainContext';
import ChoiceCard from '../../Molecules/ChoiceCard/ChoiceCard';
import RadioButton from '../../Atoms/RadioButton/RadioButton';
import Button from '../../Atoms/Button/Button';

export default function LookingForService({ navigation }) {
    const { foundAppointment, serviceLocation, setSelectedTherapy } =
        useContext(MainContext);
    const [chosenOption, setChosenOption] = useState('Mental Health Counseling');
    const [chosenTherapy, setTherapy] = useState('');

    const onPress = () => {
        let findKey = foundAppointment.some((e) => e?.title === 'Meet now');
        console.log(findKey)
        if (findKey) {  
            navigation.navigate('Summary');
        }
        else {
            navigation.navigate('Clinician'); 
        }  
    };
    const selectTherapyVirtual = (selectedItem) => {
        console.log(selectedItem, 'selected item');
    };
    const selectTherapyInPerson = (selectedItem) => {
        if (selectedItem) {
            const findItem = serviceLocation.map((item) =>
                item?.costDetails.find((findItem) => {
                    let checkItem = findItem.id === selectedItem;
                    return checkItem;
                })
            );
            setSelectedTherapy(findItem);
        }
    };

    return (
        <View>
            <Text style={styles.mainTitle}>What service are you looking for?</Text>
            {foundAppointment.some((item) => item?.type === 'Virtual') ? (
                <View>
                    {foundAppointment.map(
                        (item, i) =>
                            item && (
                                <View key={i}>
                                    <ChoiceCard
                                        appointmentTitle={item?.serviceDetails?.title}
                                        chosenOption={chosenOption}
                                        appointmentDescription={
                                            <View>
                                                <Text style={styles.mainTitle}>
                                                    {item?.serviceDetails?.title}
                                                </Text>
                                                <Text style={styles.description}>
                                                    {item?.serviceDetails?.description}
                                                </Text>
                                                <Text style={styles.subTitle}>
                                                    ${item?.serviceDetails?.cost}.00
                                                </Text>
                                                <Text style={styles.subTitle}>
                                                    {item?.serviceDetails?.time}min
                                                </Text>
                                                <Text style={styles.description}>
                                                    {item?.serviceDetails?.type}
                                                </Text>

                                                <View
                                                    style={{
                                                        position: 'absolute',
                                                        right: 10,
                                                        top: 90,
                                                    }}
                                                >
                                                    <RadioButton
                                                        optionValue={item?.serviceDetails?.title}
                                                        setChosenOption={setChosenOption}
                                                        chosenOption={chosenOption}
                                                        updateSelectedItem={selectTherapyVirtual}
                                                    />
                                                </View>
                                            </View>
                                        }
                                    />
                                </View>
                            )
                    )}
                </View>
            ) : (
                <View>
                    {serviceLocation.map((service, id) => (
                        <View key={id}>
                            {service?.costDetails.map((therapy, idx) => (
                                <View key={idx}>
                                    <ChoiceCard
                                        chosenOption={chosenTherapy}
                                        appointmentTitle={therapy?.id}
                                        appointmentDescription={
                                            <View>
                                                <View
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        paddingTop: 10,
                                                        paddingLeft: 10,
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            color: 'hsl(240, 25%, 25%)',
                                                            fontWeight: 'bold',
                                                        }}
                                                    >
                                                        {therapy?.title}
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            color: 'hsl(240, 25%, 25%)',
                                                            fontWeight: 'bold',
                                                            paddingLeft: 4,
                                                        }}
                                                    >
                                                        -{therapy?.time}mins
                                                    </Text>
                                                </View>
                                                <Text style={styles.subTitle}>
                                                    ${therapy?.cost}
                                                </Text>
                                                <Text style={styles.subTitle}>
                                                    {therapy?.time}min
                                                </Text>
                                            </View>
                                        }
                                        appointmentDetails={
                                            <View
                                                style={{
                                                    position: 'absolute',
                                                    right: 10,
                                                    top: 50,
                                                }}
                                            >
                                                <RadioButton
                                                    setChosenOption={setTherapy}
                                                    chosenOption={chosenTherapy}
                                                    optionValue={therapy?.id}
                                                    updateSelectedItem={selectTherapyInPerson}
                                                />
                                            </View>
                                        }
                                    />
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
            )}
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
}

const styles = StyleSheet.create({
    mainTitle: {
        color: 'hsl(240, 25%, 25%)',
        fontWeight: 'bold',
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 15,
    },
    subTitle: {
        paddingLeft: 10,
        paddingTop: 5,
        fontSize: 12,
        fontWeight: 'bold',
        color: 'hsl(240, 25%, 25%)',
    },
    description: {
        color: 'hsl(240, 25%, 25%)',
        paddingTop: 5,
        paddingLeft: 10,
        fontSize: 11,
    },
});
