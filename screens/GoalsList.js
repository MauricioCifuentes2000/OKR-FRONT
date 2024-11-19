import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar'; 
const GoalsList = () => {
  const goals = [
    { id: '1', title: 'Objetivo 1', description: 'Descripción 1' },
    { id: '2', title: 'Objetivo 2', description: 'Descripción 2' },
  ];

  return (
    <View style={styles.container}>
      <Navbar title="Lista de Objetivos" />
      <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.goal}>
            <Text style={styles.goalTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  goal: {
    borderWidth: 1,
    borderColor: '#6200EE',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GoalsList;
