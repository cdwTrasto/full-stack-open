const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <>
      <p>Number of exercises {props.exercises}</p>
    </>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 7
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />

      {/* <Content
        part1={part1} part2={part2} part3={part3}
        exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}
      /> */}
      <Part part={part1.name} exercises={part1.exercises} />
      <Part part={part2.name} exercises={part2.exercises} />
      <Part part={part3.name} exercises={part3.exercises} />
      <Total exercises={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App