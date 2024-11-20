import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';
import ScreenWrapper from '../components/ScreenWrapper'; 

const GoalsList = () => {
  const goals = [
    { id: '1', title: 'Objetivo 1', description: 'Descripción 1' },
    { id: '2', title: 'Objetivo 2', description: 'Descripción 2' },
  ];

  return (
    <ScreenWrapper>
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
        contentContainerStyle={styles.listContainer} 
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 20, 
  },
  goal: {
    borderWidth: 1,
    borderColor: '#6200EE',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GoalsList;