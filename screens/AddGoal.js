import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import Navbar from '../components/Navbar';

const AddGoal = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    what_to_do: '',
    how_much_to_do: '',
    check_date: '',
  });

  return (
    <View style={styles.container}>
      <Navbar title="Agregar Objetivo" />
      <TextInput
        style={styles.input}
        placeholder="Título"
        onChangeText={(text) => setFormData({ ...formData, title: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        onChangeText={(text) => setFormData({ ...formData, description: text })}
      />
      <AppButton title="Guardar Objetivo" onPress={() => alert('Objetivo Guardado')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default AddGoal;
