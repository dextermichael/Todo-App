import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AddTodo from "./containers/AddTodo";
import VisibleTodos from "./containers/VisibleTodos";

state = {
  todos: [],
  visibilityFilter: "SHOW_ALL_Todos"
};

export default class TodoApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AddTodo />
        <View>
          <VisibleTodos />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40
  }
});
