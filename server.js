const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); 

// Data awal
let characters = [
    { id: 1, name: "Aulia Vika Rahman", age: 19, power: "Menghitung Aljabar" },
    { id: 2, name: "Sadinal Mufti", age: 21, power: "Menendang bola dengan akurat" },
    { id: 3, name: "M Habil Aswad", age: 21, power: "Membuat Machine Learning" }
];

// Endpoint API
app.get('/characters', (req, res) => res.json({ data: characters }));

app.post('/characters', (req, res) => {
    const { name, age, power } = req.body;
    const newCharacter = { id: characters.length + 1, name, age, power };
    characters.push(newCharacter);
    res.status(201).json(newCharacter);
});

// Jalankan server
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));