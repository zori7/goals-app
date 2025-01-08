import {Button, StyleSheet, TextInput, View, Modal, Image} from "react-native";
import {useState} from "react";

const GoalInput = ({ isOpen, onClose, onAddGoal }) => {
    const [newGoal, setNewGoal] = useState('')

    return (
        <Modal visible={isOpen} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/goal.png')} />
                <TextInput placeholder="Type your goal" style={styles.textInput} value={newGoal} onChangeText={setNewGoal} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='cancel' color="#f31282" onPress={() => {
                            setNewGoal('')
                            onClose()
                        }} />
                    </View>
                    <View style={styles.button}>
                        <Button title='add goal' color="#b180f0" disabled={!newGoal.length} onPress={() => {
                            onAddGoal(newGoal)
                            setNewGoal('')
                            onClose()
                        }} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        padding: 32,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#311b6b'
    },
    image: {
        width: 100,
        height: 100,
        margin: 24,
    },
    textInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
        color: '#120438',
        padding: 8,
        marginBottom: 16
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
})
