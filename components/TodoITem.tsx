import { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


interface Props {
    texto : string
}

const TodoItem = ({ texto }: Props) => {

    const [clicked, setClicked] = useState(true);

    const check = clicked ? "checkmark-circle-outline" : "checkmark-circle-sharp";

    const trocarStyle = () => {
        setClicked(!clicked);
    }
    
  return (
    <View style={styles.container}>

      <Text style={clicked ? styles.textClikec : styles.textNormal}>
        {texto}
      </Text>

      <Ionicons name={check} size={24} color="black" onPress={() => trocarStyle()}/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    justifyContent:'space-between',
    borderWidth: 1,
    borderColor: '#CCC',
    marginTop: 4,
    marginBottom: 4,
    marginInline: 10,
    borderRadius: 5,
  },
  textNormal: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    textDecorationColor: '#CCC'
  },
  textClikec: {
    fontSize: 16,
    
  }
});

export default TodoItem;
