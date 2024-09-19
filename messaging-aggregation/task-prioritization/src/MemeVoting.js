import React, { useState } from 'react';

function MemeVoting() {
  const [memeVotes, setMemeVotes] = useState({});
  const [memeName, setMemeName] = useState('');

  const voteMeme = () => {
    setMemeVotes((prevVotes) => ({
      ...prevVotes,
      [memeName]: (prevVotes[memeName] || 0) + 1,
    }));
    setMemeName('');
  };

  return (
    <div>
      <h2>Meme Voting</h2>
      <input
        type="text"
        value={memeName}
        onChange={(e) => setMemeName(e.target.value)}
        placeholder="Enter meme name"
      />
      <button onClick={voteMeme}>Submit Vote</button>
      <ul>
        {Object.keys(memeVotes).map((meme) => (
          <li key={meme}>
            {meme}: {memeVotes[meme]} votes
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MemeVoting;



 
