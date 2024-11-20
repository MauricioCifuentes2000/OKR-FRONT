import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import ScreenWrapper from '../components/ScreenWrapper';

const Home = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido al Gestor de OKR</Text>
        <AppButton title="Ir a Agregar Objetivo" onPress={() => navigation.navigate('AddGoal')} />
        <AppButton title="Ir a Lista de Objetivos" onPress={() => navigation.navigate('GoalsList')} />
      </View>
    </ScreenWrapper>
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
    color: '#000', 
  },
});

export default Home;
