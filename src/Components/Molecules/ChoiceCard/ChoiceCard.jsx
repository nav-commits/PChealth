import { View} from 'react-native';
export default function ChoiceCard({ chosenOption, appointmentDescription, id, appointmentDetails, appointmentTitle }) {
    return (
        <View
            key={id}
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
    );
}


