import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido al Gestor de OKR</Text>
      <AppButton title="Ir a Agregar Objetivo" onPress={() => navigation.navigate('AddGoal')} />
      <AppButton title="Ir a Lista de Objetivos" onPress={() => navigation.navigate('GoalsList')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Home;
