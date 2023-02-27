import { StyleSheet, StatusBar, Text } from 'react-native';
import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';

export default function TabContent({ index, routes, renderScene, renderTabBar, setIndex }) {
    const layout = useWindowDimensions();
    return (
        <TabView
            renderTabBar={renderTabBar}
            style={styles.container}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
    },
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
