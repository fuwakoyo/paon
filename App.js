import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';

export default function App() {
  const [count, setCount] = useState(1);
  //test
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ぞうさん</Text>
      <Text style={styles.count}>{count}頭</Text>

      <ScrollView contentContainerStyle={styles.elephants}>
        {Array.from({ length: count }).map((_, i) => (
          <TouchableOpacity key={i} onPress={() => setCount(count + 1)}>
            <Text style={styles.elephant}>🐘</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.hint}>ぞうさんをタップすると増えるよ</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    paddingTop: 80,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  count: {
    fontSize: 24,
    color: '#666',
    marginBottom: 20,
  },
  elephants: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 16,
    gap: 8,
  },
  elephant: {
    fontSize: 48,
  },
  hint: {
    position: 'absolute',
    bottom: 40,
    color: '#aaa',
    fontSize: 14,
  },
});
