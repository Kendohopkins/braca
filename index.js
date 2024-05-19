const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json([
    {
      name: 'Bob',
      email: 'bob@gmail.com'
    },
    {
      name: 'Alice',
      email: 'Alice@yahoo.com'
    },
    {
      name: 'Anna',
      email: 'Anna@mail.ru'
    },
    {
      name: 'Jake',
      email: 'Jake@outlook.com'
    }
  ]))
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})