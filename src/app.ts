import express from 'express';

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Hello Dhananjaya Lakshan');
});

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
});
