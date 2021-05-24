const express = require('express');
const Joi = require('joi');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json())

app.get('/', (req, res) => {
    res.send('This server is working!');
});

app.get('/api', (req, res) => {
    res.send([1,2,3]);
});

const database = [
    {id: 1, name: 'kipp'},
    {id: 2, name: 'mauriah'},
    {id: 3, name: 'yara'}
]

app.get('/api/course/:id', (req, res) => {
    const data = database.find(db => db.id === parseInt(req.params.id));
    if (!data) {
        res.status(404).send('The id that you are searching for does not exist.')
    } else {
        res.status(200).send(data)
    }


})

app.post('/api/courses/', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    }

    const result = Joi.valid(req.body, schema)
    console.log(result.error())
    if (result.error) {
        res.status(400).send(result.error)
    } else {
        res.status(201).send(course)
    }

    const course = {
        id: database.length + 1,
        name: req.body.name,
    }

    database.push(course)
    
})

app.get('/api/data/', (req, res) => {
    const queryData = req.query;
    res.send(queryData);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
