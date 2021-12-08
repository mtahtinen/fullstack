const express = require('express')
const morgan = require('morgan')
const app = express()

const cors = require('cors')

app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())


let persons = [ 
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"  
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },

    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122" 
    }
]

  app.get('/api/persons', (req, res) => {
    res.json(persons)
  })
  
  app.post('/api/persons', (request, response) => {
    const body = request.body
  
    if (!body.name) {
      return response.status(400).json({ 
        error: 'name missing' 
      })
    }

    if (!body.number) {
        return response.status(400).json({ 
          error: 'number missing' 
        })
      }

      if(persons.some(function(o){return o["name"] === body.name;}))
      {
        return response.status(400).json({ 
          error: 'name must be unique' 
        })
      }

  
    const person_id = Math.floor(Math.random() * 99999999)
    const person = {
        id: person_id,
      name: body.name,
      number: body.number
      
    }
  
    persons = persons.concat(person)
  
    response.json(person)
  })
  
  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
  
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })

  app.get('/info', (request, response) => {

  const person_info = 'Phone books has info for ' + persons.length + ' persons. '  + Date()

    if (persons) {
      response.json(person_info)
    } else {
      response.status(404).end()
    }
  })
  
  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
  })
  
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })