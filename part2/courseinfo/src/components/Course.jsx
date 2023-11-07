const Header = ({ name }) => {
  return <h1>{name}</h1>;
};
const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};
const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part part={part} key={part.name} />
      ))}
    </>
  );
};
const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises: {parts.reduce((acc, cur) => acc + cur.exercises, 0)}
    </p>
  );
};

export default function Course({ item }) {
  return (
    <>
      <Header name={item.name} />
      <Content parts={item.parts} />
      <Total parts={item.parts} />
    </>
  );
}
