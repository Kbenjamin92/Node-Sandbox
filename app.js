const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('This server is working!');
});

app.get('/api', (req, res) => {
    res.send([1,2,3]);
});

app.get('/api/courses/:id/:year/:month', (req, res) => {
    const id = req.params.id;
    const year = req.params.year;
    const month = req.params.month;
    const paramsObj = {
        id: id,
        year: year,
        month: month,
    }

    res.send([paramsObj]);
})

app.get('/api/data/', (req, res) => {
    const queryData = req.query;
    res.send(queryData);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
