import { View, TouchableOpacity, StyleSheet } from 'react-native';

export default function RadioButton({ setChosenOption, chosenOption, optionValue, updateSelectedItem}) {
    return (
        <TouchableOpacity
            style={styles.radioCircle}
            onPress={() => {
                setChosenOption(optionValue);
                updateSelectedItem(optionValue);
            }}
        >
            {chosenOption === optionValue && (
                <View
                    style={{
                        width: 10,
                        height: 10,
                        borderRadius: 10,
                        borderWidth: 5,
                        borderColor: chosenOption === optionValue ? 'hsl(240, 25%, 25%)' : 'grey',
                    }}
                />
            )}
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    radioCircle: {
        height: 25,
        width: 25,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'hsl(240, 25%, 25%)',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
    },
});
