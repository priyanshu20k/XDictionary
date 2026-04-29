import { useState } from "react";

const data = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

const App = () => {
  const [words, setWords] = useState(data);
  const [input, setInput] = useState("");
  const [flag, setFlag] = useState(false);

  const searchHandler = () => {
    if (!input.trim()) {
      setWords([]);
      setFlag(true);
      return;
    }

    const findWord = data.filter((ele) =>
      ele.word.toLowerCase().includes(input.toLowerCase())
    );

    setWords(findWord);
    setFlag(true);
  };

  const getContent = () => {
    if (!flag) return null;

    if (words.length === 0) {
      return <p>Word not found in the dictionary.</p>;
    }

    return words.map((ele, index) => <p key={index}>{ele.meaning}</p>);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setFlag(false);
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Search for a word..."
        />
        <button onClick={() => searchHandler()}>Search</button>

        <p>
          <b>Definition:</b>
        </p>
        {getContent()}
      </div>
    </div>
  );
};

export default App;