import { StyleSheet, StatusBar} from 'react-native';
import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView} from 'react-native-tab-view';

export default function TabContent({ index, routes, renderScene, renderTabBar, setIndex, swipeEnabled }) {
    const layout = useWindowDimensions();
    return (
        <TabView
            renderTabBar={renderTabBar}
            style={styles.container}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            swipeEnabled={swipeEnabled}
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
