const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    return res.send('Hello World!')
})

app.post('/count', (req, res) => {
    const { a, b } = req.body
    if(a === undefined || b === undefined) return res.status(400).send('a or b is undefined')
    return res.send(`a + b = ${a + b}`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
