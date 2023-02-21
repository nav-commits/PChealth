import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Button from '../../Atoms/Button/Button';
import { useContext } from 'react';
import { FormsContext } from '../../../Context/FormsContext';
import CardContent from '../../Organisms/CardsContent/CardsContent';
import { data } from '../../../data/data.json';

export default function Home() {
    const { inputs } = useContext(FormsContext);
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
        >
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

            <CardContent data={data} />
            <Button
                title='View All Programs'
                left={20}
                backgroundColor='white'
                color='hsl(240, 25%, 25%)'
                width={350}
                paddingHorizontal={10}
                paddingVertical={10}
                borderRadius={20}
                borderWidth={2}
                borderColor='hsl(240, 25%, 25%)'
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20,
    },
});
