import { Text} from 'react-native';

export default function Label({ title, size, paddingLeft, paddingTop, textAlign }) {
    return (
        <Text
            style={{
                fontSize: size,
                paddingLeft: paddingLeft,
                paddingTop: paddingTop,
                textAlign: textAlign
            }}
        >
            {title.toUpperCase()}
        </Text>
    );
}

