import { View, Text } from 'react-native';
import Button from '../../Atoms/Button/Button';

export default function PassCode({navigation}) {
    return (
        <View style={{marginTop: 90}}>
            <Text>Passcode</Text>
            <Button
                title='Create a PCTM-id'
                backgroundColor='black'
                width={'100%'}
                marginTop={20}
                onPress={() => navigation.navigate('BottomNavigation')}
                paddingHorizontal={10}
                paddingVertical={15}
            />
        </View>
    );
}
