import { useState } from 'react';

export const Likes = () => {
  const [likes, setLikes] = useState(0);

  const handleLikes = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <p>Likes: {likes}</p>
      <button onClick={handleLikes}>Like</button>
    </div>
  );
};
