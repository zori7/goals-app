import {FlatList, StyleSheet, View} from 'react-native';
import {useState} from 'react'
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([])

  const onAddGoal = (newGoal) => {
    setGoals((prev) => [{text: newGoal, id: Math.random().toString()}, ...prev])
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={onAddGoal} />
      <View style={styles.goalsContainer}>
        <FlatList data={goals} keyExtractor={(item) => item.id} renderItem={({item}) => (
            <GoalItem item={item} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  }
});
