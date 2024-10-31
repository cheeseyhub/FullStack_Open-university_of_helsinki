import { useState } from "react";

function Button({ text, handleClick }) {
  return <button onClick={handleClick}>{text}</button>;
}

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });

  function nextAnecdote() {
    const max = anecdotes.length - 1;
    const next = Math.floor(Math.random() * max) + 1;

    setSelected(next);
  }

  function incrementVote() {
    setVotes((prevState) => ({
      ...prevState,
      [selected]: prevState[selected] + 1,
    }));
  }

  function highestVoted() {
    let highestValue = Math.max(...Object.values(votes));

    for (let key in votes) {
      if (votes[key] === highestValue) {
        return (
          <div>
            {anecdotes[key]} <div>has {highestValue}</div>
          </div>
        );
      }
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p style={{ fontWeight: "bolder" }}>{votes[selected]}</p>
      <Button text="Next Ancedote" handleClick={nextAnecdote} />
      <Button text="Vote" handleClick={incrementVote} />

      <div>
        <h1>Ancedote with the most votes</h1>
        {highestVoted()}
      </div>
    </div>
  );
}

export default App;
