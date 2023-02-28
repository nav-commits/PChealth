import { StyleSheet, Text, Image } from 'react-native';
import * as React from 'react';
import { View } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import TabContent from '../../Organisms/TabContent/TabContent';
import SuggestedItem from '../../Molecules/SuggestedItem/SuggestedItem';
import { suggestedItems } from '../../../Utils/SuggestedItemLabels';
import { SuggestedItemData } from '../../../data/SuggestedItem.json';
import { tabs } from '../../../Utils/Tabs';
import { MainContext } from '../../../Context/MainContext';
import { useContext } from 'react';
import Label from '../../Atoms/Label/Label';


export default function Journey() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState(tabs);
    const { setModalVisible, setFilteredItems } =
        useContext(MainContext);

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
                    <View style={{ marginTop: 30 }}>

                        <Label
                            title='SUGGESTED FOR YOU'
                            paddingLeft={35}
                            size={12}
                            marginTop={20}
                            fontWeight='bold'
                            marginBottom={15}
                        />
                        <SuggestedItem
                            suggestedItems={suggestedItems}
                            onPressHandler={onPressHandler}
                        />
                    </View>
                );
            case 'Progress':
                return (
                    <View>
                        <View
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'row',
                            }}
                        >
                            <Image
                                source={require('../../../../assets/pncDoc.jpeg')}
                                style={{
                                    marginTop: 50,
                                    width: 280,
                                    height: 290,
                                    borderBottomRightRadius: 10,
                                    borderBottomLeftRadius: 10,
                                }}
                            />
                        </View>
                        <Text
                            style={styles.styleText}
                        >
                            You Haven't Stared any health programs
                        </Text>
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
            <Label
                title='Journey'
                size={15}
                marginTop={50}
                fontWeight='bold'
                textAlign={'center'}
            />
            <TabContent
                index={index}
                routes={routes}
                renderScene={renderScene}
                renderLabel={renderLabel}
                renderTabBar={renderTabBar}
                setIndex={setIndex}
                swipeEnabled={false}
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
        color: 'grey',
        fontWeight: 'bold',
    },
    styleText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'hsl(240, 25%, 25%)',
        textAlign: 'center',
        marginTop: 12,

    }
});
