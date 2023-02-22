import { View, StyleSheet, Text } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function SuggestedItem({ suggestedItems }) {
    return (
        <View style={{ position: 'relative' }}>
            {suggestedItems.map((label, i) => (
                <View style={styles.container}>
                    <View style={styles.innerContainer}>
                        <View style={styles.img}>
                            <SimpleLineIcons name='pin' size={15} color='hsl(240, 25%, 25%)' />
                        </View>
                    </View>
                    <Text
                        key={i}
                        style={{
                            color: 'hsl(240, 25%, 25%)',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginTop: 17,
                        }}
                    >
                        {label}
                    </Text>
                </View>
            ))}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        elevation: 2,
        backgroundColor: '#CAE1F9',
        shadowColor: 0.5,
        shadowOpacity: 0.3,
        shadowRadius: 2,
        width: 300,
        marginBottom: 5,
        height: 53,
        marginLeft: 50,
        paddingLeft: 12,
        marginTop: 5
    },
    innerContainer: {
        borderRadius: 5,
        elevation: 2,
        backgroundColor: 'white',
        shadowColor: 0.5,
        shadowOpacity: 0.3,
        shadowRadius: 2,
        width: 40,
        marginBottom: 5,
        height: 34,
        paddingTop: 8,
        position: 'absolute',
        top: 8,
        left: -15,
        zIndex: 2,
    },
    img: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
