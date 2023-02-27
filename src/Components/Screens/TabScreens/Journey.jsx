import { StyleSheet, StatusBar, Text } from 'react-native';
import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';


export default function Journey() {
    const renderScene = ({ route }) => {
        switch (route.key) {
            case 'Activities':
                return (
                    <View style={{ flex: 1, backgroundColor: 'white' }}>
                        <Text>Activities</Text>
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
    const renderLabel = ({ route, focused}) => {
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

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'Activities', title: 'Activities' },
        { key: 'Progress', title: 'Progress' },
    ]);
    console.log(index);

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
