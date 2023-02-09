import { StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/Components/Screens/CreateAccount/Signup';
import BottomNavigation from './src/Components/Organisms/BottomNavigation/BottomNavigation';
import VerifyAccount from './src/Components/Screens/CreateAccount/VerifyAccount';
import MainPage from './src/Components/Screens/MainPage';


const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'White',
    },
};
const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator>
                <Stack.Screen
                    name='MainPage'
                    component={MainPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name='Signup' options={{ headerShown: false }} component={SignUp} />
                <Stack.Screen
                    name='BottomNavigation'
                    options={{ headerShown: false }}
                    component={BottomNavigation}
                />
                <Stack.Screen name='Verify your account' component={VerifyAccount} />
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
