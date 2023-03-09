import { View, TouchableWithoutFeedback } from 'react-native';
export default function ChoiceCard({
    chosenOption,
    appointmentDescription,
    appointmentDetails,
    appointmentTitle,
    onPress,
}) {
    return (
        <TouchableWithoutFeedback
            onPress={() => onPress(appointmentTitle)}
        >
            <View
                style={{
                    borderRadius: 12,
                    padding: 12,
                    margin: 13,
                    borderColor: appointmentTitle === chosenOption ? 'hsl(240, 25%, 25%)' : 'grey',
                    borderWidth: 2,
                }}
            >
                {appointmentDescription}
                {appointmentDetails}
            </View>
        </TouchableWithoutFeedback>
    );
}
