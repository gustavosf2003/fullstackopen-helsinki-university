import { useState } from "react";

const Button = ({ handleClick, children }) => {
  return <button onClick={handleClick}>{children}</button>;
};

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      {neutral + good + bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticsLine text="good" value={good} />
            <StatisticsLine text="neutral" value={neutral} />
            <StatisticsLine text="bad" value={bad} />
            <StatisticsLine text="all" value={good + neutral + bad} />
            <StatisticsLine
              text="average"
              value={((good - bad) / (good + neutral + bad)).toFixed(2)}
            />
            <StatisticsLine
              text="positive"
              value={((good / (good + neutral + bad)) * 100).toFixed(2) + "%"}
            />
          </tbody>
        </table>
      )}
    </>
  );
};

const App = () => {
  const [statistics, setStatistics] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const handleButtonClick = (type) => {
    setStatistics({ ...statistics, [type]: statistics[type] + 1 });
  };
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => handleButtonClick("good")}>good</Button>
      <Button handleClick={() => handleButtonClick("neutral")}>neutral</Button>
      <Button handleClick={() => handleButtonClick("bad")}>bad</Button>

      <h1>Statistics</h1>
      <Statistics
        good={statistics.good}
        neutral={statistics.neutral}
        bad={statistics.bad}
      />
    </div>
  );
};

export default App;
