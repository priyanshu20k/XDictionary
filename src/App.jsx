import { useState } from "react";

const dictionaryData = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  { 
    word: "Component", 
    meaning: "A reusable building block in React." 
  },
  { 
    word: "State", 
    meaning: "An object that stores data for a component." 
  },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    // 1. Convert input to lowercase for comparison
    const lowerCaseSearch = searchTerm.toLowerCase();

    // 2. Find exact match (Dictionary apps usually look for the specific word)
    const foundEntry = dictionaryData.find(
      (entry) => entry.word.toLowerCase() === lowerCaseSearch
    );

    if (searchTerm.trim() === "") {
      setDefinition("Word not found in the dictionary.");
    } else if (foundEntry) {
      setDefinition(foundEntry.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <h3>Definition:</h3>
      {/* The text must be rendered simply to allow the test to find the string */}
      <p>{definition}</p>
    </div>
  );
};

export default App;
