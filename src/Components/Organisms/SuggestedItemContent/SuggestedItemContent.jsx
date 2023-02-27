import { View, StyleSheet, Text} from 'react-native';
import SuggestedItem from '../../Molecules/SuggestedItem/SuggestedItem';
import Label from '../../Atoms/Label/Label';

export default function SuggestedItemContent({ suggestedItems, onPressHandler, SuggestedItemData }) {
    return (
        <View style={styles.container}>
            <Label
                title='SUGGESTED FOR YOU'
                paddingLeft={35}
                size={12}
                marginTop={20}
                fontWeight='bold'
                marginBottom={15}
            />
            <SuggestedItem suggestedItems={suggestedItems} onPressHandler={onPressHandler} SuggestedItemData={SuggestedItemData} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
     marginTop: 10
    },
});