import React, { useState } from 'react';

const WordCounter = () => {
  const [Text, setText] = useState('');

  const countWords = () => {
    return Text.trim().split(/\s+/).filter(Boolean).length;
  };

  const countCharacters = () => {
    return Text.length;
  };

  return (
    <div>
      <textarea
        value={Text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text..."
        rows={4}
        cols={50}
      />
      <div>
        <p>Number of Words used in text: {countWords()}</p>
        <p>Number of Characters used in text: {countCharacters()}</p>
      </div>
    </div>
  );
};

export default WordCounter;
