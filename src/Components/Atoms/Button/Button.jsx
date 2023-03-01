import { Text, TouchableOpacity } from 'react-native';

export default function Button({
    position,
    top,
    left,
    title,
    backgroundColor,
    width,
    onPress,
    marginLeft,
    borderRadius,
    marginTop,
    paddingHorizontal,
    paddingVertical,
    color,
    disabled,
    bottomPos,
    borderWidth,
    borderColor,
    Icon,
}) {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={{
                backgroundColor: backgroundColor,
                borderRadius: borderRadius,
                paddingHorizontal: paddingHorizontal,
                paddingVertical: paddingVertical,
                position: position,
                left: left,
                backgroundColor: backgroundColor,
                top: top,
                width: width,
                marginLeft: marginLeft,
                marginTop: marginTop,
                color: color,
                bottom: bottomPos,
                borderWidth: borderWidth,
                borderColor: borderColor,
            }}
        >
            <Text style={{ fontSize: 13, alignSelf: 'center', color: color, fontWeight: 'bold' }}>
                {Icon ? Icon : null} {title}
            </Text>
        </TouchableOpacity>
    );
}
