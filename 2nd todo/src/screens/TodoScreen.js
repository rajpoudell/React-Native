import {
    FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import React from "react";
const dummyData =[{
    id: "01",
    title:"wash car"
},
{
    id: "02",
    title:"read books"
}
]

const TodoScreen = () => {
    const renderTodos = ({item,index}) =>{
        return (
            <View
            style={{
                backgroundColor: "lightgray",
                borderRadius:6,
                paddingHorizontal:6,
                paddingVertical:12,
                marginVertical:12

            }}
            >
                <Text>-   {item.title}</Text>
            </View>
        )
    }
  return (
    <View style={{ marginHorizontal: 16 }}>
      <Text>TodoScreen</Text>
      <TextInput style={styles.textInput} placeholder="Enter a task" />
      <TouchableOpacity style={styles.Btnouter}>
        <Text style={styles.Btn}>Add</Text>
      </TouchableOpacity>


      {/* rendering dummy data  */}
      <FlatList
      data = {dummyData} renderItem={renderTodos}
      />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 6,
    marginVertical: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  Btnouter: {
    backgroundColor: "lightblue",
    borderRadius: 6,
    paddingVertical: 8,
    // paddingHorizontal:60,
    marginTop: 23,
    alignItems: "center",
  },
  Btn: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
