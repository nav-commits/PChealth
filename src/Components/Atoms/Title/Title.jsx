import { Text} from 'react-native';

export default function Title({ title, size, paddingLeft, paddingTop, textAlign }) {
    return (
        <Text
            style={{
                fontSize: size,
                fontWeight: 'bold',
                paddingLeft: paddingLeft,
                paddingTop: paddingTop,
                textAlign: textAlign
            }}
        >
            {title}
        </Text>
    );
}

