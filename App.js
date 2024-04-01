import React, { useState } from 'react';
import { View, Text, TextInput, Switch, StyleSheet, FlatList } from 'react-native';
import { surahNames } from './QuranData'; // Importing Surah names array from QuranData.js

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const filteredSurahs = surahNames.filter(
    (surah) =>
      surah.nameEnglish.toLowerCase().includes(searchTerm.toLowerCase()) ||
      surah.nameArabic.includes(searchTerm)
  );

  const renderItem = ({ item }) => (
    <View style={[styles.surahItem, darkMode ? styles.darkSurahItem : styles.lightSurahItem]}>
      <Text style={styles.surahNameEnglish}>{item.nameEnglish}</Text>
      <Text style={styles.surahNameArabic}>{item.nameArabic}</Text>
    </View>
  );

  return (
    <View style={[styles.container, darkMode && styles.darkMode]}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Quran Explorer</Text>
        <Switch
          value={darkMode}
          onValueChange={(value) => setDarkMode(value)}
          style={styles.switch}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Search Surah"
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />
      <FlatList
        data={filteredSurahs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Default light mode background color
    padding: 10,
  },
  darkMode: {
    backgroundColor: '#333', // Dark mode background color
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Header text color
  },
  switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }], // Adjusting switch size
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff', // Input background color
  },
  surahItem: {
    marginBottom: 5,
    padding: 10,
    borderRadius: 5,
  },
  lightSurahItem: {
    backgroundColor: '#f0f0f0', // Surah item background color in light mode
  },
  darkSurahItem: {
    backgroundColor: '#444', // Surah item background color in dark mode
  },
  surahNameEnglish: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'purple', // Surah name text color (changed to purple)
  },
  surahNameArabic: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 5,
    color: '#000', // Surah name text color
  },
});

export default App;
