import { TextInput, StyleSheet } from 'react-native';

export default function TextField({ value, onChangeText }) {
    return (
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={value}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});