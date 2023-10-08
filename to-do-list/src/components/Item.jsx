import { Toggle } from './Toggle';
export const Item = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
      <Toggle />
    </div>
  );
};
