import { View, StyleSheet, FlatList, Text } from 'react-native';
import Card from '../../Molecules/Card/Card';
import Label from '../../Atoms/Label/Label';
export default function CardContent({ data, contain, width, backgroundColor }) {
    return (
        <View>
            <View
                style={{
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                }}
            >
                <Label
                    title='New & Noteworthy'
                    paddingLeft={20}
                    marginBottom={-20}
                    size={15}
                    marginTop={50}
                    fontWeight='bold'
                />
                <Text style={styles.textStyle}>View All</Text>
            </View>

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
                            <Card img={item.img} content={item.content} contain={contain} width={width} backgroundColor={backgroundColor} />
                        </View>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    listStyle: {
        textAlign: 'center',
        margin: 10,
        paddingBottom: 10,
    },
    textStyle: {
        paddingLeft: 20,
        paddingRight: 10,
        size: 13,
        marginTop: 50,
        marginBottom: -20,
    },
});
