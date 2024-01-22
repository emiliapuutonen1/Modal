
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const ModalContent = ({ onClose }) => {
  return (
    <View style={styles.modalContainer}>
      <Text style={styles.modalText}>Here is the modal content!</Text>
      <Pressable style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>Close</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    modalContainer: {
        padding: 16,
        backgroundColor: 'pink', 
        borderRadius: 8,
      },
      modalText: {
        fontSize: 18,
        marginBottom: 16,
        color: 'black', 
      },
      closeButton: {
        padding: 10,
        backgroundColor: 'black',
        borderRadius: 8,
        alignItems: 'center',
      },
      closeButtonText: {
        color: 'pink',
        fontSize: 16,
      },
});

export default ModalContent;
