import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/Components/Screens/CreateAccount/Signup';
import BottomNavigation from './src/Components/Organisms/BottomNavigation/BottomNavigation';
import PassCode from './src/Components/Screens/CreateAccount/Passcode';
import MainPage from './src/Components/Screens/MainPage';

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='MainPage'
                    component={MainPage}
                />
                <Stack.Screen name='Signup' options={{ headerShown: false }} component={SignUp} />
                <Stack.Screen
                    name='BottomNavigation'
                    options={{ headerShown: false }}
                    component={BottomNavigation}
                />
                <Stack.Screen name='PassCode' component={PassCode} />
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
