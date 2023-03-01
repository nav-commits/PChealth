import { View, Text, StyleSheet, Image } from 'react-native';
export default function Card({ img, content, contain, width, cardContent, backgroundColor,button, height}) {
    return (
        <View style={{ paddingTop: 25, paddingLeft: 10 }}>
            <View
                style={{
                    borderRadius: 5,
                    elevation: 2,
                    backgroundColor: backgroundColor,
                    shadowColor: 0.5,
                    shadowOpacity: 0.3,
                    shadowRadius: 2,
                    width: width,
                    marginBottom: 5,
                    height: height,
                }}
            >
                <View>{cardContent}</View>
                <Image
                    source={{ uri: img }}
                    resizeMode={contain}
                    style={{ width: width, height: 140, borderRadius: 3 }}
                />
                <Text style={styles.title}>{content}</Text>
                <View>{button}</View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 13,
        fontWeight: 'bold',
        padding: 5,
        color: 'hsl(240, 25%, 25%)',
    },
});
