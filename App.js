/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavBar} from "./components/Header";
import {AddToDo} from "./components/AddToDo";
import {Task} from "./components/Tasks";
import {useState} from 'react';

// ____________ styles for App component_____________

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: {
        color: "#069",
        fontSize: 20,
    },
});


const App: () => React$Node = () => {
    const [toDo, setToDo] = useState([])

    const addTask = (task) => {
        const newTask = {
            id: Date.now().toString(),
            task
        }
        setToDo([...toDo, newTask])
    }

  return (
      <View style={styles.container}>
      <NavBar text={"First App!"}/>
  <AddToDo onSubmit={addTask}/>
  <Text
  style={styles.text}
      >
      Hello world!
  </Text>
  {toDo.map(
      task => <Task
    key={task.id}
    task={task.task}
    />
  )}
<StatusBar style="auto"/>
      </View>
);
}

export default App;



