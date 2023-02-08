import { View, Text, Image } from 'react-native';
import Button from '../Atoms/Button/Button';

export default function MainPage({ navigation }) {
    return (
        <View>
            <Image
                source={require('../../../assets/PcHealth.png')}
                style={{ width: 45, height: 35, borderRadius: 10, marginLeft: 10 }}
            />
            <Text
                style={{
                    color: 'hsl(240, 25%, 25%)',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontSize: 20,
                }}
            >
                Welcome to the Pc Health App{' '}
            </Text>
            <Text style={{ color: 'hsl(240, 25%, 25%)', padding: 5, textAlign: 'center' }}>
                Get Care. Get Healthy.{' '}
            </Text>
            <Text style={{ color: 'hsl(240, 25%, 25%)', padding: 2, textAlign: 'center' }}>
                Get Pc Optimum Points{' '}
            </Text>
            <Text style={{ color: 'hsl(240, 25%, 25%)', padding: 20, textAlign: 'center' }}>
                Use existing Pc id to sign in(the same login you use to access PC Optimum){' '}
            </Text>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text style={{ color: 'hsl(240, 25%, 25%)' }}>don't have an account? </Text>
                <Text
                    style={{ color: 'hsl(240, 25%, 25%)', fontWeight: 'bold' }}
                    onPress={() => navigation.navigate('Signup')}
                >
                    Sign up
                </Text>
            </View>
        </View>
    );
}
