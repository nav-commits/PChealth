import { View, TouchableOpacity, StyleSheet } from 'react-native';

export default function RadioButton({ setChosenOption, chosenOption, optionValue }) {
    return (
        <TouchableOpacity
            style={styles.radioCircle}
            onPress={() => {
                setChosenOption(optionValue);
            }}
        >
            {chosenOption === optionValue && <View style={styles.selectedRb} />}
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    radioCircle: {
        height: 30,
        width: 30,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'hsl(240, 25%, 25%)',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
    },
    selectedRb: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: 'hsl(240, 25%, 25%)',
    },
});
