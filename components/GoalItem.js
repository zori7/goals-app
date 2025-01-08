import {Text, View, StyleSheet, Pressable} from "react-native";

const GoalItem = ({ item, onDeleteItem }) => {
    return (
        <View style={styles.goal}>
            <Pressable
                android_ripple={{color: '#c5e5ea'}}
                style={({ pressed }) => pressed && styles.pressedItem}
                onPress={onDeleteItem.bind(null, item.id)}>
                <Text style={styles.goalText}>{item.text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goal: {
        backgroundColor: '#defaff',
        minWidth: 120,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        marginBottom: 8
    },
    pressedItem: {
        opacity: 0.7
    },
    goalText: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        color: '#225'
    }
})
