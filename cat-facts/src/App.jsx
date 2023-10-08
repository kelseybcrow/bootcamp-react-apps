import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [facts, setFacts] = useState([]);
  const [factIndex, setFactIndex] = useState(null);

  const fetchData = async () => {
    // const url = 'https://catfact.ninja/fact';
    // const url = 'https://catfact.ninja/facts?limit=5';
    setLoading(true);

    const url = 'http://www.cbp-exercises.test/php/index.php';
    const response = await fetch(url);
    const data = await response.json();

    setLoading(false);
    setFacts(data);
    data.length && setFactIndex(0);
  };

  const showPreviousFact = (event) => {
    event.preventDefault();
    setFactIndex(Math.max(0, factIndex - 1));
  };

  const showNextFact = (event) => {
    event.preventDefault();
    setFactIndex(Math.min(facts.length - 1, factIndex + 1));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Cat facts</h1>
      <div>
        {loading ? <h3>Loading...</h3> : ''}
        {!loading && factIndex !== null ? <p>{facts[factIndex].fact}</p> : ''}
      </div>
      <div>
        {factIndex > 0 ? (
          <button onClick={showPreviousFact}>Previous</button>
        ) : (
          ''
        )}
        {factIndex < facts.length - 1 ? (
          <button onClick={showNextFact}>Next</button>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default App;
