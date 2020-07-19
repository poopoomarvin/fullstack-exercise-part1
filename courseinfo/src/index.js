import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
  <h1>{props.course.name}</h1>
)

const Part = (props) => {
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Content = (props) => {
  return (
    <>
    <Part part={props.course.parts[0].name} exercise={props.course.parts[0].exercises}/>
    <Part part={props.course.parts[1].name} exercise={props.course.parts[1].exercises}/>
    <Part part={props.course.parts[2].name} exercise={props.course.parts[2].exercises}/>
    </>
  )
}

const Total = (props) => (
  <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[2].exercises + props.course.parts[2].exercises}</p>
)
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises : 10
      },
      {
        name: 'Using props to pass data',
        exercises : 7
      },
      {
        name: 'State of a component',
        exercises : 14
      }
    ]
  }
  
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))