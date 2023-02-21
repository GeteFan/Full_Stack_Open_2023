const Header = (props) => {
  console.log("")
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log("")
  console.log()
  return (
    <>
      <h2> Part "{props.parts.name}" has {props.parts.exercises} exercises</h2> 
    </>
  )
}

const Content = (props) => {
  console.log()
  return (
    <>
      <Part parts={props.parts[0]} />
      <Part parts={props.parts[1]} />
      <Part parts={props.parts[2]} />
    </>
  )
}

const Total = (props) => {
  console.log(props.exercises)
  let total = 0
  props.exercises.forEach(element => {
    total += element.exercises
  });
  return (
    <>
      <h3>Total number of exercises: {total}! </h3>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content parts = {course.parts} />
      <Total exercises={course.parts} />
    </div>
  )
}

export default App