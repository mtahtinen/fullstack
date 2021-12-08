import React from 'react';
const Header = ({ course }) => {
    console.log('course1 value is', course.props.name)
    return (
      <h2>{course.props.name}</h2>
    )
  }
  
  const Total = ({ course }) => {
    let sum = 0
  
    //const reducer = (accumulator, currentValue) => accumulator.exercises + currentValue.exercises;
    //const sum2 = course.parts.reduce(reducer)
  
    for (const value of course.props.parts) {
      sum = sum + value.exercises
    }
    return(
      <h4>Total of {sum} exercises</h4>
    ) 
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }
  
  const Content = ({ course }) => {

    return (
      <div>
        {course.props.parts.map(part => 
            <Part key={part.id} part={part} />
          )}
       
      </div>
    )
  }
  
  const Course = (props) => {
    return (
      <div>
        <Header course={props} />
        <Content course = {props} />
        <Total course = {props} />
      </div>
    )
  }
  export default Course
