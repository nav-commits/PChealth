import { View, Text } from 'react-native';
import { useContext } from 'react';

export default function MyHealth() {
    return (
        <View style={{ paddingLeft: 20, paddingTop: 50 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
               My Health Page
            </Text>
        </View>
    );
}