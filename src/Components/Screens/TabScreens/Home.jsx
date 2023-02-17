import { View, Text } from 'react-native';
import Button from '../../Atoms/Button/Button';
import { useContext } from 'react';
import { FormsContext } from '../../../Context/FormsContext';

export default function Home() {
    const { inputs } = useContext(FormsContext);
    return (
        <View style={{ margin: 10 }}>
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
            <Text>{inputs.firstName}</Text>
        </View>
    );
}


