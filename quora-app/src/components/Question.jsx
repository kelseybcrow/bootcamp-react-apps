import { useState } from 'react';
import { Answer } from './Answer';

export const Question = ({ name, text }) => {
  const [input, setInput] = useState('');

  const answers = [];

  return (
    <div>
      <h2>{text}</h2>
      <p>{name}</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setUserAnswer(input);
          setInput('');
        }}
      >
        <label>Your name:</label>
        <input
          type='text'
          value={input}
          name='name'
          onChange={(event) => setInput(event.target.value)}
        />
        <label>Your question:</label>
        <input
          type='text'
          value={input}
          name='question'
          onChange={(event) => setInput(event.target.value)}
        />
        <button type='submit'>Submit answer</button>
      </form>
    </div>
  );
};
