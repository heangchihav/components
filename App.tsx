import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";

interface Input {
  isbn: string;
  quantity: string;
}

const AddItems: React.FC = () => {
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

  const handleSubmit = () => {
    // Merge quantities for the same ISBN
    const mergedInputs: Input[] = [];
    const isbnMap: Record<string, number> = {};

    for (const input of inputs) {
      const { isbn, quantity } = input;
      if (isbnMap[isbn]) {
        isbnMap[isbn] += parseInt(quantity, 10);
      } else {
        isbnMap[isbn] = parseInt(quantity, 10);
      }
    }

    for (const isbn in isbnMap) {
      mergedInputs.push({ isbn, quantity: isbnMap[isbn].toString() });
    }

    // Handle form submission logic here (e.g., send data to a server)
    console.log("Submitted inputs:", mergedInputs);
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
};

export default AddItems;