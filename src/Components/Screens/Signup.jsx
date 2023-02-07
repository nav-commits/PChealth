import { View, Text } from 'react-native';
import Button from '../Atoms/Button/Button';
import TextField from '../Atoms/TextField/TextField';
import React from 'react';
import Title from '../Atoms/Title/Title';

export default function Main({ navigation }) {
    const [text, onChangeText] = React.useState('');
    return (
        <View >
            <Text style={{ marginTop: 50 }}>Create PC Health id</Text>
            <Title title='Email' paddingLeft={10} paddingTop={30} size={15} />
            <TextField onChangeText={onChangeText} value={text} />
            <Title title='Password' paddingLeft={10} paddingTop={30} size={15} />
            <TextField onChangeText={onChangeText} value={text} />
            <Title title='Confirm Password' paddingLeft={10} paddingTop={30} size={15} />
            <TextField onChangeText={onChangeText} value={text} />
            <Button
                title='Create a PC-id'
                backgroundColor='hsl(240, 25%, 25%)'
                width={'100%'}
            
                onPress={() => navigation.navigate('BottomNavigation')}
                paddingHorizontal={10}
                paddingVertical={10}
            />
        </View>
    );
}
