const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'Cat' && password === 'Reloaded') {
        res.send('Login successful!');
    } else {
        res.send('Login failed. Please check your username and password.');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
