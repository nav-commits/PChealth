import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Button from '../../Atoms/Button/Button';
import { useContext, useState } from 'react';
import { FormsContext } from '../../../Context/FormsContext';
import CardContent from '../../Organisms/CardsContent/CardsContent';
import { data } from '../../../data/data.json';
import SuggestedItemContent from '../../Organisms/SuggestedItemContent/SuggestedItemContent';
import { suggestedItems } from '../../../Utils/SuggestedItemLabels';
import React from 'react';
import PopupModal from '../../Molecules/PopupModal/PopupModal';
import Icon from 'react-native-vector-icons/Ionicons';
import { SuggestedItemData } from '../../../data/SuggestedItem.json';
import { MainContext } from '../../../Context/MainContext';

export default function Home() {
    const { inputs } = useContext(FormsContext);
    const { modalVisible, setModalVisible, filteredItems, setFilteredItems } =
        useContext(MainContext);

    const onPressHandler = (item) => {
        if (suggestedItems.includes(item)) {
            const filterItemsArray = SuggestedItemData.filter((data) => data.title === item);
            setFilteredItems(filterItemsArray);
        }
        setModalVisible(true);
    };
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
        >
            <View style={{ position: 'relative' }}>
                <Image
                    source={require('../../../../assets/Account.png')}
                    style={{
                        width: 410,
                        height: 300,
                        borderBottomRightRadius: 50,
                        borderBottomLeftRadius: 50,
                    }}
                />
                <Button
                    title='Get Care'
                    top={250}
                    left={40}
                    backgroundColor='hsl(240, 25%, 25%)'
                    color='white'
                    width={100}
                    paddingHorizontal={10}
                    paddingVertical={10}
                    borderRadius={20}
                    position={'absolute'}
                    marginBottom={30}
                />
                <Text style={{ position: 'absolute', bottom: 100, left: 45, fontWeight: 'bold' }}>
                    {inputs.firstName}, How can we help?
                </Text>
                <Text style={{ position: 'absolute', bottom: 60, left: 45, fontSize: 12 }}>
                    Health advice and support to help{'\n'}meet your needs.
                </Text>
            </View>

            <View>
                <PopupModal
                    modalVisible={modalVisible}
                    icon={
                        <Icon
                            name={'close'}
                            size={25}
                            style={{ paddingTop: 5 }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        />
                    }
                    info={filteredItems}
                />
                <SuggestedItemContent
                    suggestedItems={suggestedItems}
                    onPressHandler={onPressHandler}
                />
            </View>
            <CardContent
                data={data}
                contain={'contain'}
                width={280}
                backgroundColor='#fff'
                height={250}
            />
            <Button
                title='View All Programs'
                left={20}
                backgroundColor='white'
                color='hsl(240, 25%, 25%)'
                width={350}
                paddingHorizontal={10}
                paddingVertical={10}
                borderRadius={20}
                borderWidth={2}
                borderColor='hsl(240, 25%, 25%)'
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20,
    },
});
