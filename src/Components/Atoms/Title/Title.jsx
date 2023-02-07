import { Text} from 'react-native';

export default function Title({ title, size, paddingLeft, paddingTop, textAlign }) {
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

