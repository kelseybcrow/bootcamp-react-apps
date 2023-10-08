import { useState } from 'react';

import check from '../assets/check.svg';
import cross from '../assets/cross.svg';
import question from '../assets/question.svg';

export const Toggle = () => {
  const [state, setState] = useState(0);

  const handleClick = () => {
    if (state === 2) {
      setState(0);
    } else {
      setState(state + 1);
    }
  };

  if (state === 0) {
    return <img src={check} onClick={handleClick} />;
  } else if (state === 1) {
    return <img src={cross} onClick={handleClick} />;
  } else if (state === 2) {
    return <img src={question} onClick={handleClick} />;
  }
};
