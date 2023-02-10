import { Text, TouchableOpacity} from 'react-native';

export default function Button({
    position,
    top,
    left,
    title,
    backgroundColor,
    width,
    onPress,
    marginLeft,
    border,
    borderRadius,
    marginTop,
    paddingHorizontal,
    paddingVertical,
    color,
    disabled,
}) {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={{
                backgroundColor: backgroundColor,
                elevation: 8,
                borderRadius: borderRadius,
                paddingHorizontal: paddingHorizontal,
                paddingVertical: paddingVertical,
                position: position,
                left: left,
                backgroundColor: backgroundColor,
                top: top,
                width: width,
                marginLeft: marginLeft,
                border: border,
                marginTop: marginTop,
                color: color,
            }}
        >
                <Text style={{fontSize: 13, alignSelf: 'center', color:'white', fontWeight:'bold'}}>{title}</Text>
            
        </TouchableOpacity>
    );
}


