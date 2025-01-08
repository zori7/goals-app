import {Button, FlatList, StyleSheet, View} from 'react-native';
import {useState} from 'react'
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import {StatusBar} from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([])
  const [isNewGoalOpen, setIsNewGoalOpen] = useState(false)

  const onAddGoal = (newGoal) => {
    setGoals((prev) => [{text: newGoal, id: Math.random().toString()}, ...prev])
  }

  const onDeleteGoal = (id) => {
    setGoals((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <>
      {/*<StatusBar style='auto' />*/}
      <StatusBar style='dark' />
      <View style={styles.appContainer}>
        <Button title="New goal" color="#35a" onPress={() => setIsNewGoalOpen(true)} />
        <GoalInput onAddGoal={onAddGoal} isOpen={isNewGoalOpen} onClose={() => setIsNewGoalOpen(false)} />
        <View style={styles.goalsContainer}>
          <FlatList data={goals} keyExtractor={(item) => item.id} renderItem={({item}) => (
              <GoalItem item={item} onDeleteItem={onDeleteGoal} />
          )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: '#eae5ff'
  },
  goalsContainer: {
    flex: 5
  }
});
