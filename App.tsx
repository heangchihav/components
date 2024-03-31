import React, { useState } from "react";
import { View, TextInput, Button, TouchableOpacity, Text } from "react-native";

interface Input {
  isbn: string;
  quantity: string;
}

function AddItems() {
  const [inputs, setInputs] = useState<Input[]>([{ isbn: "", quantity: "1" }]);

  const handleAddMore = () => {
    setInputs([...inputs, { isbn: "", quantity: "1" }]);
  };

  const handleInputChange = (
    index: number,
    value: string,
    field: keyof Input
  ) => {
    const newInputs = [...inputs];
    newInputs[index][field] = value;
    setInputs(newInputs);
  };

  const handleRemove = (index: number) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  const handleSubmit = async () => {
    console.log(inputs);
  };

  return (
    <View>
      {inputs.map((item, index) => (
        <View key={index}>
          <TextInput
            value={item.isbn}
            onChangeText={(value) => handleInputChange(index, value, "isbn")}
            placeholder="ISBN"
          />
          <TextInput
            value={item.quantity}
            onChangeText={(value) =>
              handleInputChange(index, value, "quantity")
            }
            placeholder="Quantity"
          />
          <TouchableOpacity onPress={() => handleRemove(index)}>
            <Text>Remove</Text>
          </TouchableOpacity>
        </View>
      ))}
      <Button title="Add ISBN" onPress={handleAddMore} />
      <Button title="Add" onPress={handleSubmit} />
    </View>
  );
}

export default AddItems;
