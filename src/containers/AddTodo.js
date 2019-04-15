import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class AddTodo extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
        <TextInput
          placeholder="Ex.Create New Video"
          style={{
            borderWidth: 1,
            borderColor: "#f2f2e1",
            backgroundColor: "eaeaea",
            height: 50,
            flex: 1,
            padding: 5
          }}
        />
        <TouchableOpacity onPress={() => alert("added too")}>
          <View style={{ height: 50, backgroundColor: "eaeaea" }}>
            <Ionicons name="md-add" size={30} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
