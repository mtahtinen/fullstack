import React from 'react'
import personService from '../services/persons'

//import App from '../App'

const deletePersonId = (id) => {
  var tempperson = personService.getPerson(id)
 // console.log('importance of ' + tempperson.then(val => {
 //   tempperson.setState({tempperson: val}) + ' needs to be toggled'))}

  var result = window.confirm("are you sure to delete " +  tempperson.name)
  console.log('importance of ' + id + ' needs to be toggled')
  //props.persons.filter(n => n.id !== id)

  if(result===true) {
    personService
        .deletePerson(id)
        console.log('deleted ' + id)
  }
  else {console.log('passed delete ' + id)}
}


const Person = (props) => {
    
    return(
          <li key={props.person.id}>
              {props.person.name} {props.person.number}<button onClick={() => deletePersonId(props.person.id)}>{"delete"}</button>
              </li> 
    )
  }
  
  const Persons = (props) => {
   
    return(
      <ul>
          {props.persons.map(person => 
            <Person person={person}/>
          )}
        </ul>
    )
  }

export default Persons