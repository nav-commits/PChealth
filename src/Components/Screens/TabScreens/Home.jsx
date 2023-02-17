import { View, Text, Image } from 'react-native';
import Button from '../../Atoms/Button/Button';
import { useContext } from 'react';
import { FormsContext } from '../../../Context/FormsContext';
import Card from '../../Molecules/Card/Card';

export default function Home() {
    const { inputs } = useContext(FormsContext);
    return (

        <View>
            <View style={{ position: 'relative' }}>
                <Image
                    resizeMode={'contain'}
                    source={require('../../../../assets/Account.png')}
                    style={{
                        width: 410,
                        height: 300,
                        borderBottomRightRadius: 50,
                        borderBottomLeftRadius: 50,
                    }}
                />
                <Button
                    title='Get Care'
                    top={250}
                    left={40}
                    backgroundColor='hsl(240, 25%, 25%)'
                    color='white'
                    width={100}
                    paddingHorizontal={10}
                    paddingVertical={10}
                    borderRadius={20}
                    position={'absolute'}
                    marginBottom={30}
                />
                <Text style={{ position: 'absolute', bottom: 100, left: 45, fontWeight: 'bold' }}>
                    {inputs.firstName}, How can we help?
                </Text>
                <Text style={{ position: 'absolute', bottom: 60, left: 45, fontSize: 12 }}>
                    Health advice and support to help{'\n'}meet your needs.
                </Text>
            </View>
            <Card
                img={
                    'https://images.ctfassets.net/y9kx4mbdq4n2/6l4vF6zWdtRUDVPDms3xsz/a04420cdb41be20a71c23bd7a8ccca29/Roadrunner_OGImage_EN.jpg'
                }
                content={'Skin Care 101: Build your Routine'}
            />
        </View>
    );
}
