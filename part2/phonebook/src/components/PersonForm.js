import React from 'react'

const PersonForm = (props) => {
    
    console.log('input .persons', props.newName)
    return(
      <form onSubmit={props.addName}>
      <div>
      name: <input
        value={props.newName}
        onChange={props.handleNameChange}
      />
      <div>number: <input 
      value={props.newNumber}  onChange={props.handleNumberChange}/></div>
      </div>
      <div>
      <button type="submit">add</button>
      </div>
    </form>  
    )
  }

export default PersonForm