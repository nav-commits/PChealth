import { View, Text, Image } from 'react-native';
import Label from '../../Atoms/Label/Label';
import Card from '../../Molecules/Card/Card';
import Button from '../../Atoms/Button/Button';

export default function GetCare() {
    return (
        <View style={{ padding: 40 }}>
            <Label
                title='Get Care'
                size={15}
                marginTop={5}
                fontWeight='bold'
                textAlign={'center'}
            />
            <Label
                title='Need to see a provider?'
                size={16}
                marginTop={30}
                fontWeight='bold'
            />
            <Card
                cardContent={
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ paddingLeft: 10, position: 'relative', marginTop: 50 }}>
                            <Text style={{ fontSize: 12, fontWeight:'bold' }}>Book an appointment</Text>
                            <Text style={{ fontSize: 12, marginRight: 120 }}>
                                Schedule a virtual or in-person visit with a healthcare provider.
                            </Text>
                        </View>
                        <Image
                            source={require('../../../../assets/nurse.png')}
                            style={{
                                width: 90,
                                height: 80,
                                position: 'absolute',
                                right: 8,
                                top: 30,
                                borderRadius: 30,
                            }}
                        />
                    </View>
                }
                button={
                    <Button
                        title='Book now'
                        backgroundColor='hsl(240, 25%, 25%)'
                        color='white'
                        width={'90%'}
                        paddingHorizontal={30}
                        paddingVertical={10}
                        borderRadius={20}
                        marginBottom={30}
                        position={'absolute'}
                        top={-120}
                        left={20}
                    />
                }
                backgroundColor='#CAE1F9'
                width={300}
            />
        </View>
    );
}
