import { View, Text } from 'react-native';
import { useContext } from 'react';
import { FormsContext } from '../../../Context/FormsContext';

export default function MyHealth() {
    const { inputs } = useContext(FormsContext);
    return (
        <View style={{ paddingLeft: 20, paddingTop: 50 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                {inputs.firstName}
            </Text>
        </View>
    );
}