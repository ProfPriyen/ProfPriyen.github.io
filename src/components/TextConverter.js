import React, { useState } from 'react';
import '../App.css'

const TextConverter = () => {
  const [inputText, setInputText] = useState('');

  const handleUpperCase = () => {
    setInputText(inputText.toUpperCase());
  };

  const handleLowerCase = () => {
    setInputText(inputText.toLowerCase());
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="form-group">
            <textarea
              className="form-control"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              rows={4}
            />
          </div>
          <div className="text-center">
            <button className="btn btn-primary mr-2" onClick={handleUpperCase}>
              Convert to Uppercase
            </button>
            <button className="btn btn-primary" onClick={handleLowerCase}>
              Convert to Lowercase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextConverter;
