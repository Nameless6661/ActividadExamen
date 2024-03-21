import React from 'react';
import { View, Text, FlatList } from 'react-native';
import MateriasViewModel from '../viewmodels/MateriaViewModel';


const ListaMaterias = ({ carrera }) => {
  const listaMaterias = MateriasViewModel.obtenerMaterias(carrera);

  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>Carrera {carrera}</Text>
      <FlatList
        data={listaMaterias}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text>{item.nombre}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ListaMaterias;
