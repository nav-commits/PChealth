import { Text } from 'react-native';

export default function Label({ title, size, paddingLeft, paddingTop, textAlign, fontWeight, color, paddingBottom }) {
    return (
        <Text
            style={{
                fontSize: size,
                paddingLeft: paddingLeft,
                paddingTop: paddingTop,
                textAlign: textAlign,
                fontWeight: fontWeight,
                color: color,
                paddingBottom: paddingBottom
            }}
        >
            {title}
        </Text>
    );
}

