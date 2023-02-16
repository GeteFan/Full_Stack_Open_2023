const Header = (props) => {
  console.log("1")
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <>
      <h2> Part {props.number} "{props.parts}" has {props.exercises} exercises</h2> 
    </>
  )
}

const Content = (props) => {
  console.log("2")
  return (
    <>
      <Part number="1" parts={props.parts[0]} exercises={props.exercises[0]}/>
      <Part number="2" parts={props.parts[1]} exercises={props.exercises[1]}/>
      <Part number="3" parts={props.parts[2]} exercises={props.exercises[2]}/>
    </>
  )
}

const Total = (props) => {
  let total = 0
  props.exercises.forEach(element => {
    total += element
  });
  console.log("3")
  return (
    <>
      <h3>Total number of exercises: {total}! </h3>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content parts = {[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

export default App