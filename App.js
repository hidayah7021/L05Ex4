import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Image } from 'react-native';

const App = () => {
  return (
      <View style={styles.container}>
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title, bgColor } }) => (
                <View style={[styles.headerContainer, { backgroundColor: bgColor }]}>
                  <Text style={styles.headerText}>{title}</Text>
                </View>
            )}
            keyExtractor={(item, index) => item.key + index}
        />
        <StatusBar style="auto" />
      </View>
  );
};

const renderItem = ({ item }) => {
  return (
      <TouchableOpacity style={styles.itemContainer}>
        <Text style={styles.textStyle}>{item.key}</Text>
        <Image source={item.image} style={styles.imageStyle} />
      </TouchableOpacity>
  );
};

const datasource = [
  {
    title: 'Dogs',
    bgColor: '#f4a261',
    data: [
      {
        key: 'Yellow Collie',
        image: require('./img/yellowCollie.jpg'),
      },
      {
        key: 'Grey Collie',
        image: require('./img/greyCollie.jpg'),
      },
    ],
  },
  {
    title: 'Cats',
    bgColor: '#2a9d8f',
    data: [
      {
        key: 'Yellow Cat',
        image: require('./img/yellowCat.jpg'),
      },
      {
        key: 'Grey Cat',
        image: require('./img/greyCat.jpg'),
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10
  },
  headerContainer: {
    padding: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    padding: 20
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  textStyle: {
    fontSize: 18,
    color: '#333',
  },
  imageStyle: {
    width: 120,
    height: 120,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});

export default App;
