import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GetCare from '../../Screens/TabScreens/GetCare';
import Home from '../../Screens/TabScreens/Home';
import Journey from '../../Screens/TabScreens/Journey';
import MyHealth from '../../Screens/TabScreens/MyHealth';
import Pharmacy from '../../Screens/TabScreens/Pharmacy';

const Tab = createBottomTabNavigator();
export default function BottomNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'Home':
                            iconName = focused ? 'home' : 'home-outline';
                            break;
                        case 'Journey':
                            iconName = focused ? 'checkmark-circle' : 'checkmark-circle-outline';
                            break;
                        case 'GetCare':
                            iconName = focused ? 'heart-circle' : 'heart-circle-outline';
                            break;
                        case 'Pharmacy':
                            iconName = focused ? 'bandage' : 'bandage-outline';
                            break;
                        case 'MyHealth':
                            iconName = focused ? 'heart' : 'heart-outline';
                            break;
                        default:
                            break;
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'hsl(240, 25%, 25%)',
                tabBarInactiveTintColor: 'grey',
            })}
        >
            <Tab.Screen name='Home' options={{ headerShown: false }} component={Home} />
            <Tab.Screen name='Journey' options={{ headerShown: false }} component={Journey} />
            <Tab.Screen options={{ headerShown: false }} name='GetCare' component={GetCare} />
            <Tab.Screen options={{ headerShown: false }} name='Pharmacy' component={Pharmacy} />
            <Tab.Screen options={{ headerShown: false }} name='MyHealth' component={MyHealth} />
        </Tab.Navigator>
    );
}
