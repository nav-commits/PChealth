import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../../Screens/Home';
import Journey from '../../Screens/Journey';

const Tab = createBottomTabNavigator();
export default function BottomNavigation() {
    return (
    
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                        } else if (route.name === 'Journey') {
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
            <Tab.Screen name="Home" options={{ headerShown: false }}  component={Home} />
            <Tab.Screen options={{ headerShown: false }} name="Journey" component={Journey} />
            </Tab.Navigator>
    );
}