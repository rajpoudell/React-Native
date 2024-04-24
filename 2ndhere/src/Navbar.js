import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Navbar = ({ navigation }) => {
  const handlePress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.menu}>
      <Button label="Home" onPress={() => navigation.navigate('Home')} />
      <Button label="About" onPress={() => navigation.navigate('About')} />
      <Button label="Contact" onPress={() => navigation.navigate('Contact')} />
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: '20%',
    minHeight: '100%',
  },
  menuItem: {
    fontSize: 18,
    marginBottom: 10,
    color: '#007bff',
  },
});

export default Navbar;
