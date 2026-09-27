import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [zadanie, setZadanie] = useState('');
  const [lista, setLista] = useState<string[]>([]);

  const dodajZadanie = () => {
    if (zadanie.trim() !== '') {
      setLista([...lista, zadanie]);
      setZadanie('');
    }
  };

  const usunZadanie = (indexDoUsuniecia: number) => {
    setLista(lista.filter((_, index) => index !== indexDoUsuniecia));
  };

  return (
    <View style={styles.container}>
      <Stack screenOptions={{ headerShown: false }}/>
      <Text style={styles.tytul}>Lista Zadań</Text>

      <TextInput
        style={styles.input}
        placeholder="Wpisz zadanie, które chcesz dodać"
        value={zadanie}
        onChangeText={setZadanie}
      />
      <TouchableOpacity style={styles.przyciskDodaj} onPress={dodajZadanie}>
        <Text style={styles.tekstPrzyciskuDodaj}>Dodaj</Text>
      </TouchableOpacity>

      <FlatList
        data={lista}
        renderItem={({ item, index }) => (
          <View style={styles.wiersz}>
            <Text style={styles.element}>- {item}</Text>
            
            <TouchableOpacity 
              style={styles.przyciskUsun} 
              onPress={() => usunZadanie(index)}
            >
              <Text style={styles.tekstUsun}>Usuń</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 60,
    backgroundColor: '#5b5b5b',
  },
  tytul: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  wiersz: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#777',
  },
  element: {
    fontSize: 18,
    color: '#fff',
    flex: 1,
  },
  przyciskUsun: {
    backgroundColor: '#a72828',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
  },
  tekstUsun: {
    color: '#fff',
    fontWeight: 'bold',
  },
  przyciskDodaj: {
    backgroundColor: '#000000',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
  },
  tekstPrzyciskuDodaj: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});