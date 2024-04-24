import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Button = ({ label }) => {
  const handlePress = () => {
    alert(`You Press: ${label}`);
  };
  return (
    <View>
      <Text onPress={handlePress} style={styles.button}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: 5,
    textAlign: 'center',
    borderRadius: 5,
  },
});

export default Button;
