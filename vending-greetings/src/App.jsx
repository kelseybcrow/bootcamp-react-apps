import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');

  return (
    <>
      {greeting === '' ? (
        <h1>Please provide information</h1>
      ) : (
        <h1>{greeting}</h1>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (gender === `male`) {
            setGreeting(`Hello, Mr. ${name}`);
          } else if (gender === 'female') {
            if (age > 25) {
              setGreeting(`Hello, Mrs. ${name}`);
            } else {
              setGreeting(`Hello, Miss ${name}`);
            }
          } else {
            setGreeting(`Hello, ${name}`);
          }
        }}
      >
        <input
          type='text'
          value={name}
          placeholder='name'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='number'
          value={age}
          // placeholder='age'
          onChange={(e) => setAge(e.target.value)}
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value='male'>male</option>
          <option value='female'>female</option>
          <option value='other'>other</option>
        </select>
        <button type='submit'>Greet!</button>
      </form>
    </>
  );
}

export default App;
