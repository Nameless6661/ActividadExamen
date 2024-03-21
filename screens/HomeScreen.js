import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import ListaMaterias from '../components/ListaMaterias';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Lista de materias</Text>
      </View>
      <ListaMaterias carrera={1} />
      <ListaMaterias carrera={2} />
    </SafeAreaView>
  );
};

export default HomeScreen;
