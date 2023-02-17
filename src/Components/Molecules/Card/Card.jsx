import { View, Text, StyleSheet, Image } from 'react-native';
export default function Card({ img, content }) {
    return (
        <View style={{ padding: 15 }}>
            <View style={styles.container}>
                <Image
                    source={{ uri: img }}
                    resizeMode='contain'
                    style={{ width: '100%', height: '60%', borderRadius: 3 }}
                />
                <Text style={styles.title}>{content}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 13,
        fontWeight: 'bold',
        padding: 5,
        color:'hsl(240, 25%, 25%)'
    },
    container: {
        borderRadius: 5,
        elevation: 2,
        backgroundColor: '#fff',
        shadowColor: 0.5,
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
});
