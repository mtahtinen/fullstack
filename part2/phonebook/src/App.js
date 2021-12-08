import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import './index.css'

const App = (props) => {
  
  const [ newName, setNewName ] = useState('') 
  const [ newNumber, setNewNumber ] = useState('')
  const [ persons, setPersons ] = useState([])
  const [notification, setNotification] = useState(null)


  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    console.log('addname button clicked', event.target)
    console.log('addname button clicked', newName)
    
    const personObject = {
      name: newName,
      number: newNumber
    }

    const found = persons.find(element => element.name === newName);

      if(found === undefined) {
        setPersons(persons.concat(personObject))
        console.log('henkilot', persons)
        setNewName('')
        setNewNumber('')

        personService
      .create(personObject)

      setNotification(
        `Added '${newName}' `
      )
      setTimeout(() => {
        setNotification(null)
      }, 5000)
      }
      else {
        window.alert(`${newName} is already added to phonebook`)
        console.log('alert', newName)
      }
  }

  /*
  const deletePersonId = (id) => {
    var result = window.confirm("are you sure to delete " +  id)
    console.log('importance of ' + id + ' needs to be toggled')
    
    if(result===true)
      personService
          .deletePerson(id)
  }
*/

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="notification">
        {message}
      </div>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2> 
      <Notification message={notification} />
      <h3>Add a new</h3>
      <PersonForm 
      persons={persons} newName={newName} newNumber= {newNumber} handleNameChange={handleNameChange} 
      handleNumberChange={handleNumberChange} addName={addName}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App
