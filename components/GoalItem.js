import {Text, View, StyleSheet} from "react-native";

const GoalItem = ({ item }) => {
    return (
        <View style={styles.goal}>
            <Text style={styles.goalText}>{item.text}</Text>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goal: {
        backgroundColor: '#defaff',
        paddingVertical: 4,
        paddingHorizontal: 8,
        minWidth: 120,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        marginBottom: 8
    },
    goalText: {
        color: '#225'
    }
})
