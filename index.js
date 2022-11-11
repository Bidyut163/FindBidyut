const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.render('Home');
});

app.listen(PORT, () => {
    console.log('Server is running');
});
