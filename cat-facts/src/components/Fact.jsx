import { data } from './CatData';

export const Fact = () => {
  const renderFact = () => {
    data.forEach((fact) => {
      const factText = document.createElement('p');
      factText.textContent = fact.value;
    });
  };

  return (
    <div>
      <p>{renderFact}</p>
    </div>
  );
};
