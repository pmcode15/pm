import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function TodoApp() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (text.trim() !== '') {
      setTodos([...todos, text]);
      setText('');
    }
  };

  return (
    <View style={styles.container}>

      {/* Input and Button Row */}
      <Text style={styles.label}>
        TextInput & Button Row:
      </Text>

      <View style={styles.inputRow}>

        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Enter a task"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={addTodo}
        >
          <Text style={styles.buttonText}>
            Add Task
          </Text>
        </TouchableOpacity>

      </View>

      {/* Task List Title */}
      <Text style={styles.listTitle}>
        Rendered Task List (&lt;Text&gt; Elements):
      </Text>

      {/* Todo List */}
      {todos.map((item, i) => (
        <View style={styles.task} key={i}>
          <Text style={styles.taskText}>
            {i + 1}. {item}
          </Text>
        </View>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    margin: 10,
    padding: 24,
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#dbe3ec',
    borderRadius: 8,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#5c7897',
    marginBottom: 10,
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  input: {
    flex: 1,
    height: 44,
    borderWidth: 2,
    borderColor: '#2563eb',
    borderRadius: 7,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: 'white',
  },

  button: {
    height: 44,
    paddingHorizontal: 18,
    backgroundColor: '#2563eb',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },

  listTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#5c7897',
    marginTop: 22,
    marginBottom: 10,
  },

  task: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#dbe3ec',
    borderRadius: 6,
    padding: 11,
    marginBottom: 8,
  },

  taskText: {
    fontSize: 16,
    color: '#111827',
  },

});

npx create-expo-app@latest ica --template blank
npx expo start