import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { addTodo } from "../actions/index";
class AddTodo extends React.Component {
  state = {
    text: ""
  };

  addTodo = text => {
    //redux store
    this.props.dispatch(addTodo(text));
    this.setState({ text: "" });
  };
  render() {
    return (
      <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
        <TextInput
          onChangeText={text => this.setState({ text })}
          value={this.state}
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
        <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
          <View
            style={{
              height: 50,
              backgroundColor: "eaeaea",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Ionicons
              name="md-add"
              size={30}
              style={{ color: "#de9595", padding: 10 }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(AddTodo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
