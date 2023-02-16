import { View, Text } from 'react-native';
import Button from '../../Atoms/Button/Button';

export default function Home() {
    return (
        <View>
            <Button
                title='Get Care'
                top={100}
                left={10}
                backgroundColor='hsl(240, 25%, 25%)'
                color='white'
                width={100}
                paddingHorizontal={10}
                paddingVertical={10}
                borderRadius={20}
            />
        </View>
    );
}


