const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.parts[props.number].name} {props.parts[props.number].exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      <Part parts={props.parts} number={0} />
      <Part parts={props.parts} number={1} />
      <Part parts={props.parts} number={2} />
    </>
  );
};

const Total = (props) => {
  console.log(props.parts);
  return (
    <p>
      Number of exercises{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half stack application development.",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
