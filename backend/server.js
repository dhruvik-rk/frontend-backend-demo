import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'joke one',
            content: 'this is joke one'
        },
        {
            id: 2,
            title: 'joke two',
            content: 'this is joke two'
        },
        {
            id: 3,
            title: 'joke three',
            content: 'this is joke three'
        },
        {
            id: 4,
            title: 'joke four',
            content: 'this is joke four'
        },
        {
            id: 5,
            title: 'joke five',
            content: 'this is joke five'
        }
    ]
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server at port ${ port }`);
})