import { TextInput, StyleSheet } from 'react-native';

export default function TextField({
    value,
    onChangeText,
    emailError,
    passwordError,
    matchPasswordError,
    password,
    confirmPassword,
}) {
    return (
        <TextInput
            onChangeText={onChangeText}
            value={value}
            secureTextEntry={password || confirmPassword ? true : null}
            style={{
                borderColor: emailError || passwordError || matchPasswordError ? 'red' : null,
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
            }}
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
