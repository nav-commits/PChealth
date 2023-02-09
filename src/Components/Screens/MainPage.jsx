import { View, Text, Image, StyleSheet } from 'react-native';
export default function MainPage({ navigation }) {
    return (
        <View>
            <Image
                resizeMode={'contain'}
                source={require('../../../assets/PcHealth.png')}
                style={{
                    width: 410,
                    height: 290,
                    borderBottomRightRadius: 80,
                    borderBottomLeftRadius: 80,
                }}
            />
            <Text
                style={{
                    color: 'hsl(240, 25%, 25%)',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontSize: 20,
                    marginTop: 50,
                }}
            >
                Welcome to the Pc Health App
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
                style={styles.textStyle}
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

const styles = StyleSheet.create({
    textStyle: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 2,
        alignItems: 'center',
        justifyContent: 'center',  
    }
});