import { useState } from 'react';
import { Likes } from './Likes';

export const Answer = ({ answerProp }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [input, setInput] = useState('');

  return (
    <div>
      <div>
        <h3>{answerProp}</h3>
        <Likes />
        {userAnswer !== '' && <p>{userAnswer}</p>}
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setUserAnswer(input);
          setInput('');
        }}
      >
        <input
          type='text'
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type='submit'>Submit answer</button>
      </form>
    </div>
  );
};
