import { View, Modal, Text, StyleSheet } from 'react-native';
import Button from '../../Atoms/Button/Button';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
export default function PopupModal({ modalVisible, icon, info }) {
    return (
        <Modal animationType='slide' transparent={true} visible={modalVisible}>
            <View style={styles.modalView}>
                {info.map((item, i) => (
                    <View>
                        <View key={i} style={styles.contentContainer}>
                            <View style={styles.imgDirection}>{icon}</View>
                            <Text style={styles.textStyle}>{item.title}</Text>
                            <View style={styles.innerContainer}>
                                <View style={styles.img}>
                                    <SimpleLineIcons
                                        name='pin'
                                        size={15}
                                        color='hsl(240, 25%, 25%)'
                                    />
                                </View>
                            </View>
                        </View>
                        <Text style={styles.contentTitleStyle}>{item?.content?.contentTitle}</Text>
                        <Text style={styles.contentStyle}>{item?.content?.mainContent}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Button
                                title='Next'
                                backgroundColor='hsl(240, 25%, 25%)'
                                color='white'
                                width={300}
                                paddingHorizontal={10}
                                paddingVertical={10}
                                borderRadius={20}
                                marginTop={50}
                            />
                        </View>
                    </View>
                ))}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: 'white',
        shadowColor: '#000',
        height: '100%',
        width: '100%',
    },
    textStyle: {
        color: 'hsl(240, 25%, 25%)',
        fontWeight: 'bold',
        marginTop: 50,
        padding: 10,
        fontSize: 17,
    },
    modalText: {
        paddingTop: 30,
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    contentStyle: {
        color: 'hsl(240, 25%, 25%)',
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 10,
    },
    contentTitleStyle: {
        color: 'hsl(240, 25%, 25%)',
        fontWeight: 'bold',
        paddingLeft: 15,
        paddingTop: 12,
        fontSize: 15,
    },
    innerContainer: {
        borderRadius: 20,
        elevation: 2,
        backgroundColor: 'white',
        shadowColor: 0.5,
        shadowOpacity: 0.3,
        shadowRadius: 2,
        width: 45,
        marginBottom: 5,
        height: 40,
        paddingTop: 12,
        position: 'absolute',
        top: 50,
        right: 20,
        zIndex: 2,
    },
    img: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    contentContainer: {
        height: 120,
        backgroundColor: '#CAE1F9',
        borderBottomRightRadius: 7,
        borderBottomLeftRadius: 7,
    },
    imgDirection: {
        position: 'absolute',
        top: 8,
        right: 20,
    },
});
