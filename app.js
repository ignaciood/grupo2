const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

const staticFolder = path.resolve(__dirname, './public');
app.use(express.static(staticFolder));


//Routes
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})


app.get('/search', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/search.html"))
})

app.post('/search', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/search.html"))
    console.log(req)
})

//Listening port
app.listen(PORT, () => {
    console.log('server running in port: ' + PORT)
})
