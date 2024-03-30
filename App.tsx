import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const data = {
  allLanguageOfBooks: [
    {
      id: "clrur5z8i0000plu3mcpfrw61",
      name: "Khmer",
      createdById: "clrur87al0004plu3605uk4sc",
      createdAt: "2024-01-26T14:43:02.943Z",
      updatedAt: "2024-01-26T14:47:09.738Z",
    },
    {
      id: "clrur5z8o0001plu3z806t80d",
      name: "English",
      createdById: "clrur87al0004plu3605uk4sc",
      createdAt: "2024-01-26T14:43:02.943Z",
      updatedAt: "2024-01-26T14:47:09.738Z",
    },
    {
      id: "clrur5z8o0002plu36ww37y2w",
      name: "Thai",
      createdById: "clrur87al0004plu3605uk4sc",
      createdAt: "2024-01-26T14:43:02.943Z",
      updatedAt: "2024-01-26T14:47:09.738Z",
    },
  ],
  allCategories: [
    {
      id: "clrurbpi60008plu3tzghcas7",
      name: "Cartoon",
      createdById: "clrur87al0004plu3605uk4sc",
      createdAt: "2024-01-26T14:47:30.271Z",
      updatedAt: "2024-01-26T14:50:01.869Z",
    },
    {
      id: "clrurcjir0009plu3p0nnbn0h",
      name: "Comedy",
      createdById: "clrur87al0004plu3605uk4sc",
      createdAt: "2024-01-26T14:48:09.171Z",
      updatedAt: "2024-01-26T14:50:01.869Z",
    },
    {
      id: "clrurcu8t000aplu3tyukms48",
      name: "Movie",
      createdById: "clrur87al0004plu3605uk4sc",
      createdAt: "2024-01-26T14:48:23.070Z",
      updatedAt: "2024-01-26T14:50:01.869Z",
    },
  ],
  selectedLanguages: ["Khmer", "English"],
  selectedCategories: ["Cartoon", "Comedy"],
};

const CustomCheckbox = ({
  label,
  checked,
  onPress,
}: {
  label: string;
  checked: boolean;
  onPress: () => void;
}) => (
  <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
    {checked ? (
      <MaterialCommunityIcons name="check-circle" size={24} color="black" />
    ) : (
      <MaterialCommunityIcons
        name="square-rounded-outline"
        size={24}
        color="black"
      />
    )}

    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

interface Props {
  // Add any additional props you might need here (optional)
}
const page = (props: Props) => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(
    data.selectedLanguages
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    data.selectedCategories
  );

  const handleSubmit = () => {
    console.log("selectedLanguages:", selectedLanguages);
    console.log("selectedCategories:", selectedCategories);
    // Add your form submission logic here (e.g., API calls, etc.)
  };

  const handleLanguageChange = (language: string) => {
    const newSelectedLanguages = selectedLanguages.includes(language)
      ? selectedLanguages.filter((l) => l !== language)
      : [...selectedLanguages, language];
    setSelectedLanguages(newSelectedLanguages);
  };

  const handleCategoryChange = (category: string) => {
    const newSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newSelectedCategories);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Languages</Text>
      {data.allLanguageOfBooks.map((language) => (
        <CustomCheckbox
          key={language.id}
          label={language.name}
          checked={selectedLanguages.includes(language.name)}
          onPress={() => handleLanguageChange(language.name)}
        />
      ))}
      <Text style={styles.selectedText}>
        Selected: {selectedLanguages.join(", ")}
      </Text>

      <Text style={styles.label}>Select Category</Text>
      {data.allCategories.map((category) => (
        <CustomCheckbox
          key={category.id}
          label={category.name}
          checked={selectedCategories.includes(category.name)}
          onPress={() => handleCategoryChange(category.name)}
        />
      ))}
      <Text style={styles.selectedText}>
        Selected: {selectedCategories.join(", ")}
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Button title="Update" onPress={handleSubmit} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  selectedText: {
    fontSize: 14,
    fontStyle: "italic",
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  button: {},
});

export default page;
