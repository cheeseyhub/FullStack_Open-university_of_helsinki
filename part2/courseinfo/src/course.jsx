const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />

      <h4>
        <Total parts={course.parts} />
      </h4>
    </div>
  );
};
const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = (props) => {
  const partsContent = props.parts.map((element) => {
    return (
      <Part
        name={element.name}
        exercises={element.exercises}
        key={element.id}
      />
    );
  });

  return partsContent;
};

const Total = ({ parts }) => {
  let total = parts.reduce((sum, element) => {
    return sum + element.exercises;
  }, 0);
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
};

export default Course;
