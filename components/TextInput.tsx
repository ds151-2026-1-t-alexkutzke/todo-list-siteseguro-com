import { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';


interface Props {
  onChangeTextValue: (value: string) => void;
  onSubmit: (value: string) => void;
}

const TextScreen = ({ onChangeTextValue, onSubmit }: Props) => {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Digite aqui"
        onChangeText={(value) => onChangeTextValue(value)}
        onEndEditing={() => console.log('Edição concluída')}
        onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  textOutput: {
    fontSize: 16,
  }
});

export default TextScreen;
