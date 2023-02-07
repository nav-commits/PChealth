import { StyleSheet, View } from 'react-native';
import Home from './src/Components/Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/Components/Screens/Signup';
import BottomNavigation from './src/Components/Organisms/BottomNavigation/BottomNavigation';
import PassCodePage from './src/Components/Screens/Passcode';

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Signup' options={{ headerShown: false }} component={Signup} />
                <Stack.Screen
                    name='BottomNavigation'
                    options={{ headerShown: false }}
                    component={BottomNavigation}
                />
                <Stack.Screen name='PassCode' component={PassCodePage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
