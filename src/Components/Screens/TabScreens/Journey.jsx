import { StyleSheet, StatusBar, Text } from 'react-native';
import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import TabContent from '../../Organisms/TabContent/TabContent';
import SuggestedItem from '../../Molecules/SuggestedItem/SuggestedItem';
import { suggestedItems } from '../../../Utils/SuggestedItemLabels';
import { tabs } from '../../../Utils/Tabs';

export default function Journey() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState(tabs);

    const onPressHandler = (item) => {
        console.log(item);
    };

    const renderScene = ({ route }) => {
        switch (route.key) {
            case 'Activities':
                return (
                    <SuggestedItem
                        suggestedItems={suggestedItems}
                        onPressHandler={onPressHandler}
                    />
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
