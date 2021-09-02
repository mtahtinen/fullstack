import React, { useState } from 'react'


// a proper place to define a component

const Button = (props) => {
  return (
    <>
      <button onClick={props.increaseByOne}> {props.text} </button>
      </>
    ) 
}

const StatisticLine = (props) => {
  //let all = props.bad+props.neutral+props.good
  
  return (
    <tr>
      <td>{props.text} </td>
      <td>{props.value} </td>
      </tr>
    ) 
}

const Statistics = (props) => {
  let all = props.bad+props.neutral+props.good
  let positive = 100*props.good/(all) + ' %'
  let average = (props.good-props.bad)/all
  
  if (all > 0) {
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value ={props.good} />
        <StatisticLine text="neutral" value ={props.neutral} />
        <StatisticLine text="bad" value ={props.bad} />
        <StatisticLine text="all" value ={all} />
        <StatisticLine text="average" value ={average} />
        <StatisticLine text="positive" value ={positive } />
      </tbody>
    </table>
    ) }
  return (
      <div>No feedback given</div>
    )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const increaseGoodByOne = () => setGood(good + 1)
  const increaseBadByOne = () => setBad(bad + 1)
  const increaseNeutralByOne = () => setNeutral(neutral + 1)
  
  return (
    <div>
      <h2>give feedback</h2>
      <Button increaseByOne={increaseGoodByOne} text='good' />
      <Button increaseByOne={increaseNeutralByOne} text='neutral' />
      <Button increaseByOne={increaseBadByOne} text='bad'/>
      <h2>statistics</h2>
      <Statistics bad={bad} good={good} neutral={neutral}/>
    </div>
  )
}

export default App
