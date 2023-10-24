// Autocomplete.jsx
import React, { useState } from 'react';

const Autocomplete = ({ suggestions }) => {
  const [text, setText] = useState('');

  const onTextChanged = (e) => {
    const value = e.target.value;
    setText(value);
  };

  const suggestionsList = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={onTextChanged}
        placeholder="Type to search"
      />
      <ul>
        {suggestionsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
