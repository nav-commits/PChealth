import { StyleSheet, StatusBar, Text } from 'react-native';
import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import TabContent from '../../Organisms/TabContent/TabContent';
import SuggestedItem from '../../Molecules/SuggestedItem/SuggestedItem';
import { suggestedItems } from '../../../Utils/SuggestedItemLabels';
import {SuggestedItemData} from '../../../data/SuggestedItem.json'
import { tabs } from '../../../Utils/Tabs';
import { MainContext } from '../../../Context/MainContext';
import { useContext } from 'react';
import PopupModal from '../../Molecules/PopupModal/PopupModal';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Journey() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState(tabs);
    const { modalVisible, setModalVisible, filteredItems, setFilteredItems } = useContext(MainContext);

    const onPressHandler = (item) => {
        if (suggestedItems.includes(item)) {
            const filterItemsArray = SuggestedItemData.filter((data) => data.title === item);
            setFilteredItems(filterItemsArray);
        }
        setModalVisible(true);
    };

    const renderScene = ({ route }) => {
        switch (route.key) {
            case 'Activities':
                return (
                    <View>
                        <PopupModal
                            modalVisible={modalVisible}
                            setModalVisible={setModalVisible}
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
                        <SuggestedItem
                            suggestedItems={suggestedItems}
                            onPressHandler={onPressHandler}
                        />
                    </View>
                );
            case 'Progress':
                return (
                    <View style={{ flex: 1, backgroundColor: 'white' }}>
                        <Text>Progress</Text>
                    </View>
                );
            default:
                return null;
        }
    };
    const renderLabel = ({ route, focused }) => {
        return (
            <View>
                <Text style={[focused ? styles.activeTabTextColor : styles.tabTextColor]}>
                    {route.title}
                </Text>
            </View>
        );
    };
    const renderTabBar = (props) => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'hsl(240, 25%, 25%)' }}
            style={{ backgroundColor: 'white', paddingTop: 5 }}
            renderLabel={renderLabel}
        />
    );
    return (
        <View style={styles.scene}>
            <TabContent
                index={index}
                routes={routes}
                renderScene={renderScene}
                renderLabel={renderLabel}
                renderTabBar={renderTabBar}
                setIndex={setIndex}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    activeTabTextColor: {
        color: 'hsl(240, 25%, 25%)',
        fontWeight: 'bold',
    },
    tabTextColor: {
        color: 'hsl(240, 25%, 25%)',
        fontWeight: 'bold',
    },
});
