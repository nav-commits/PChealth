import { StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/Components/Screens/CreateAccount/Signup';
import BottomNavigation from './src/Components/Organisms/BottomNavigation/BottomNavigation';
import VerifyAccount from './src/Components/Screens/CreateAccount/VerifyAccount';
import MainPage from './src/Components/Screens/MainPage/MainPage';
import PhoneNumber from './src/Components/Screens/CreateAccount/PhoneNumber';
import TellUsAboutYourself from './src/Components/Screens/CreateAccount/TellUsAboutYourself';
import Gender from './src/Components/Screens/CreateAccount/Gender';
import AccountCreated from './src/Components/Screens/CreateAccount/AccountCreated';
import FormsContextProvider from './src/Context/FormsContext';
import React from 'react';
import MainContextProvider from './src/Context/MainContext';
import BookAppointment from './src/Components/Screens/GetCare/BookAppointment';
import ServiceTypeDetail from './src/Components/Screens/GetCare/ServiceTypeDetail';
import BookingType from './src/Components/Screens/GetCare/BookingType';
import Location from './src/Components/Screens/GetCare/Location';
import AppointmentFor from './src/Components/Screens/GetCare/AppointmentFor';
import LookingForService from './src/Components/Screens/GetCare/LookingForService';
import ClinicianType from './src/Components/Screens/GetCare/ClicianType';
import Summary from './src/Components/Screens/GetCare/Summary';
import ClinicianBooking from './src/Components/Screens/GetCare/ClicianBooking';
import Booked from './src/Components/Screens/GetCare/Booked';

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
        <FormsContextProvider>
            <MainContextProvider>
                <NavigationContainer theme={MyTheme}>
                    <Stack.Navigator>
                        <Stack.Screen
                            name='MainPage'
                            component={MainPage}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name='Signup'
                            options={{ headerShown: false }}
                            component={SignUp}
                        />
                        <Stack.Screen name='PhoneNumber' component={PhoneNumber} />
                        <Stack.Screen
                            name='Verify your account'
                            options={{ headerShown: true }}
                            component={VerifyAccount}
                        />
                        <Stack.Screen
                            name='TellUsAboutYourself'
                            options={{ headerShown: true }}
                            component={TellUsAboutYourself}
                        />
                        <Stack.Screen
                            name='Sex and gender identity'
                            options={{ headerShown: true }}
                            component={Gender}
                        />
                        <Stack.Screen
                            name='Account Created'
                            options={{ headerShown: false }}
                            component={AccountCreated}
                        />
                        <Stack.Screen
                            name='BottomNavigation'
                            options={{ headerShown: false }}
                            component={BottomNavigation}
                        />
                        <Stack.Screen name='Book an Appointment' component={BookAppointment} />
                        <Stack.Screen name='ServiceTypeDetail' component={ServiceTypeDetail} />
                        <Stack.Screen name='BookingType' component={BookingType} />
                        <Stack.Screen name='Location' component={Location} />
                        <Stack.Screen name='AppointmentFor' component={AppointmentFor} />
                        <Stack.Screen name='LookingForService' component={LookingForService} />
                        <Stack.Screen name='Clinician' component={ClinicianType} />
                        <Stack.Screen name='Summary' component={Summary} />
                        <Stack.Screen name='ClinicianBooking' component={ClinicianBooking} />
                        <Stack.Screen name='Booked' component={Booked} />
                    </Stack.Navigator>
                </NavigationContainer>
            </MainContextProvider>
        </FormsContextProvider>
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
