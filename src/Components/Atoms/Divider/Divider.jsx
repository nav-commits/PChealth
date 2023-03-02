import { Text } from 'react-native';

export default function Divider({ backgroundColor, position, bottom, width, height }) {
    return (
        <Text
            style={{
                height: height,
                width: width,
                backgroundColor: backgroundColor,
                position: position,
                bottom: bottom,
            }}
        />
    );
}
