import { View, StyleSheet, FlatList } from 'react-native';
import Card from '../../Molecules/Card/Card';
export default function CardContent({ data }) {
    return (
        <FlatList
            style={styles.listStyle}
            keyExtractor={(key) => {
                return key.id;
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => {
                return (
                    <View>
                        <Card img={item.img} content={item.content} />
                    </View>
                );
            }}
        />
    );
}

const styles = StyleSheet.create({
    listStyle: {
        textAlign: 'center',
        margin: 5,
        paddingBottom: 10,
    },
});
