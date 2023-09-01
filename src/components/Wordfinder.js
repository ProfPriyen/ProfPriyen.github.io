import React, { useState } from 'react';

const WordFinder = () => {
  const [originalMessage, setOriginalMessage] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [foundWords, setFoundWords] = useState([]);

  const handleMessageChange = (e) => {
    setOriginalMessage(e.target.value);
  };

  const handleSearchWordChange = (e) => {
    setSearchWord(e.target.value);
  };

  const findWordInMessage = () => {
    const regex = new RegExp(`\\b(${searchWord})\\b`, 'gi'); // Use word boundary (\b) for exact word matching
    const matches = originalMessage.match(regex) || [];
    setFoundWords(matches);
  };

  const handleReset = () => {
    setOriginalMessage('');
    setSearchWord('');
    setFoundWords([]);
  };

  const countOccurrences = () => {
    const regex = new RegExp(`\\b(${searchWord})\\b`, 'gi'); // Use word boundary (\b) for exact word matching
    const matches = originalMessage.match(regex) || [];
    return matches.length;
  };

  const countTotalWords = () => {
    return originalMessage.trim().split(/\s+/).filter(Boolean).length;
  };

  const countTotalCharacters = () => {
    return originalMessage.length;
  };

  return (
    <div>
      <div>
        <textarea
          value={originalMessage}
          onChange={handleMessageChange}
          placeholder="Enter your message..."
          rows={4}
          cols={50}
        />
      </div>
      <div>
        <input
          type="text"
          value={searchWord}
          onChange={handleSearchWordChange}
          placeholder="Enter word to find..."
        />
        <button onClick={findWordInMessage}>Find Word</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      {foundWords.length > 0 ? (
        <>
          <p>The word is found in the message:</p>
          <div>
            {originalMessage.split(/\s+/).map((word, index) => (
              <span
                key={index}
                style={{
                  fontWeight: foundWords.includes(word.toLowerCase()) ? 'bold' : 'normal',
                  color: foundWords.includes(word.toLowerCase()) ? 'red' : 'black',
                }}
              >
                {word}{' '}
              </span>
            ))}
          </div>
          <p>Occurrences of the word: {countOccurrences()}</p>
        </>
      ) : (
        <p>The word is not found in the message.</p>
      )}
      <table>
        <thead>
          <tr>
            <th>Total Words</th>
            <th>Total Characters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{countTotalWords()}</td>
            <td>{countTotalCharacters()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WordFinder;
