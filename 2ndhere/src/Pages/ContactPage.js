// ContactPage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Menu from '../components/Menu';

const ContactPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Menu navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.subtitle}>This is the contact page</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
});

export default ContactPage;
