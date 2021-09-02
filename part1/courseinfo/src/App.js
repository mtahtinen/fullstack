import React from 'react'


const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.content} {props.exercises}
      
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part content= {props.course.parts[0].name} exercises={props.course.parts[0].exercises} />
      <Part content= {props.course.parts[1].name} exercises={props.course.parts[1].exercises} />
      <Part content= {props.course.parts[2].name} exercises={props.course.parts[2].exercises} />
    </div>
  )
}
const Total = (props) => {
  return (//use Map?
    <div>
      Number of exercises
     <> {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</>
    </div>
  )
}

const Course = (props) => {
  return (//use Map?
    <div>
      <Header course={props.course} />
      <Content course = {props.course} />
      <Total course = {props.course}/>
    </div>
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
      <Course course={course} />
    </div>
  )
}

export default App
