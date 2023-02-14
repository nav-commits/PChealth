import { Text } from 'react-native';

export default function Label({ title, size, paddingLeft, paddingTop, textAlign, fontWeight, color }) {
    return (
        <Text
            style={{
                fontSize: size,
                paddingLeft: paddingLeft,
                paddingTop: paddingTop,
                textAlign: textAlign,
                fontWeight: fontWeight,
                color: color
            }}
        >
            {title}
        </Text>
    );
}

