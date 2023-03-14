import { View, Text, Image, StyleSheet } from 'react-native';
import Label from '../../Atoms/Label/Label';
import Card from '../../Molecules/Card/Card';
import Button from '../../Atoms/Button/Button';

export default function GetCare({navigation}) {
      const submitHandler = () => {
          navigation.navigate('Book an Appointment');
     };
    return (
        <View style={{ padding: 40 }}>
            <Label
                title='Get Care'
                size={15}
                marginTop={5}
                fontWeight='bold'
                textAlign={'center'}
            />
            <Label title='Need to see a provider?' size={16} marginTop={30} fontWeight='bold' />
            <Card
                cardContent={
                    <View style={styles.parentContainer}>
                        <View style={styles.innerContainer}>
                            <Text style={styles.mainTitle}>Book an appointment</Text>
                            <Text style={styles.textContent}>
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
                        top={-130}
                        left={20}
                        onPress={submitHandler}
                    />
                }
                backgroundColor='#CAE1F9'
                width={300}
                height={220}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    parentContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    innerContainer: {
        paddingLeft: 10,
        position: 'relative',
        marginTop: 50,
    },
    mainTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    textContent: {
        fontSize: 12,
        marginRight: 120,
    },
});
