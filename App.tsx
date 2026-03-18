import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TextScreen from './components/TextInput';
import TodoItem from './components/TodoITem';
import { useState } from 'react';


interface TodoItem {
  texto : string
}
export default function App() {

  const [text, setText] = useState('');
  const [arr, setArr] = useState<TodoItem[]>([]);

  const adicionaTodo = () => {
    if (text.trim() === '') return; 

    const novoTodo: TodoItem = { 
      texto: text 
    };
    setArr((prev) => [...prev, novoTodo]);
    setText('');
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TextScreen onChangeTextValue={setText} onSubmit={adicionaTodo}></TextScreen>

        <FlatList 
          data={arr}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return <TodoItem texto={item.texto} ></TodoItem>
          }}
        />
          
        <StatusBar style="auto" />
      </SafeAreaView >
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
