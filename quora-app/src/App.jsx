import { Answer } from './components/Answer';
import { Question } from './components/Question';

function App() {
  const questions = [
    { name: 'slavo', text: 'Why is React the best?' },
    { name: 'jan', text: 'What framework should I use for PHP backend?' },
  ];

  return (
    <div>
      {questions.forEach((q) => {
        <Question name={questions.name} text={questions.text} />;
      })}
    </div>
  );
}

export default App;
