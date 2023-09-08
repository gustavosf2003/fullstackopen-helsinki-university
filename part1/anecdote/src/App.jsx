import { useState } from "react";

const anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is the same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  "The only way to go fast is to go well.",
];

const MostVoted = ({ votes }) => {
  const highestVote = Math.max(...votes);
  return (
    <>
      <p>{anecdotes[votes.indexOf(highestVote)]}</p>
      <p>{highestVote} votes</p>
    </>
  );
};
const Button = ({ handleClick, children }) => {
  return <button onClick={handleClick}>{children}</button>;
};

const AnecdotesContainer = ({ votes, selected }) => {
  return (
    <>
      <p>{anecdotes[selected]}</p>
      <p>{votes[selected]}</p>
    </>
  );
};

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(8).fill(0));

  const handleVotes = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  const handleSortClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Button handleClick={handleVotes}>vote</Button>
      <Button handleClick={handleSortClick}>next anecdote</Button>
      <AnecdotesContainer votes={votes} selected={selected} />
      {Math.max(...votes) > 0 && (
        <>
          <h1>Anecdote with most votes</h1>
          <MostVoted votes={votes} />
        </>
      )}
    </div>
  );
};

export default App;
