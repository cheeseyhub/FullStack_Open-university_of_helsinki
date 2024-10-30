import { useState } from "react";

function Button({ handleClick, text }) {
  return (
    <button onClick={handleClick} style={{ marginInline: "5px" }}>
      {text}
    </button>
  );
}
function Count({ name, total }) {
  return (
    <>
      <table
        style={{
          tableLayout: "fixed",
          width: "15vw",
        }}
      >
        <tbody>
          <tr>
            <td>
              <h4 style={{ margin: "0px", padding: "2px" }}>{name}</h4>
            </td>

            <td>
              <span>
                {isNaN(total) ? 0 : total} {name === "Positive" ? " %" : ""}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
function StatisticsLine({ text, value }) {
  return <Count name={text} total={value} />;
}
function Statistics({ good, bad, neutral }) {
  const totalSum = good + bad + neutral;
  const average = (Math.abs(good - bad) / totalSum).toFixed(2);
  const percentage = ((good / totalSum) * 100).toFixed(2);

  return good || bad || neutral ? (
    <>
      <h1>Statistics</h1>
      <StatisticsLine text="Good" value={good} />
      <StatisticsLine text="Neutral" value={neutral} />
      <StatisticsLine text="Bad" value={bad} />
      <StatisticsLine text="All" value={good + neutral + bad} />
      <StatisticsLine text="Average" value={average} />
      <StatisticsLine text="Positive" value={percentage} />
    </>
  ) : (
    <>
      <h1>Statistics</h1>
      <h3>No FeedBack Given</h3>
    </>
  );
}
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleGoodClick() {
    const updatedClick = good + 1;
    setGood(updatedClick);
  }
  function handleNeutralClick() {
    const updatedClick = neutral + 1;
    setNeutral(updatedClick);
  }
  function handleBadClick() {
    const updatedClick = bad + 1;
    setBad(updatedClick);
  }
  return (
    <div>
      <h1>Give FeedBack</h1>
      <div>
        <Button text="Good" handleClick={handleGoodClick} />
        <Button text="Neutral" handleClick={handleNeutralClick} />
        <Button text="Bad" handleClick={handleBadClick} />
      </div>

      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
}

export default App;
