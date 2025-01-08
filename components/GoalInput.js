import {Button, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";

const GoalInput = ({ onAddGoal }) => {
    const [newGoal, setNewGoal] = useState('')

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Type your goal" style={styles.textInput} value={newGoal} onChangeText={setNewGoal} />
            <Button title='add goal' onPress={() => {
                onAddGoal(newGoal)
                setNewGoal('')
            }} />
        </View>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cecece',
        // justifyContent: 'center',
        flexDirection: 'row'
    },
    textInput: {
        width: '60%',
        borderWidth: 1,
        borderColor: '#cecece',
        borderRadius: 6,
        padding: 4,
        marginRight: 16
    },
})
