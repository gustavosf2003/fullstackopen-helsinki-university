const Header = (props) => {
  return <h1>{props.course}</h1>;
};
const Part = (props) => {
  console.log(props);
  return (
    <p>
      {props.part.title} {props.part.subtitle}
    </p>
  );
};
const Content = (props) => {
  return (
    <>
      <Part part={props.content[0]} />
      <Part part={props.content[1]} />
      <Part part={props.content[2]} />
    </>
  );
};
const Total = (props) => {
  return (
    <p>
      Number of exercises
      {props.content[0].subtitle +
        props.content[1].subtitle +
        props.content[2].subtitle}
    </p>
  );
};
const App = () => {
  const course = "Half Stack application development";
  const content = [
    { title: "Fundamentals of React", subtitle: 10 },
    { title: "Using props to pass data", subtitle: 7 },
    { title: "State of a component", subtitle: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total content={content} />
    </div>
  );
};

export default App;
