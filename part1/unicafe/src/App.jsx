import { useState } from "react";

const Button = ({ handleClick, children }) => {
  return <button onClick={handleClick}>{children}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      {neutral + good + bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <tr>
              <td>good</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>neutral</td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>bad</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>all</td>
              <td>{neutral + good + bad}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{((good - bad) / (good + neutral + bad)).toFixed(2)}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td>{((good / (good + neutral + bad)) * 100).toFixed(2)}%</td>
            </tr>
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
