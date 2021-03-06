const express = require("express");
const path = require("path");
const bodyParser = require(`body-parser`)
const mongoose = require(`mongoose`)
const api = require(`./server/routes/api`)
const app = express();

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/react-bank`,{ useNewUrlParser: true , useUnifiedTopology: true})

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
//     next()

// })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'build')));


app.use(`/`, api)


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const PORT = 4000;
app.listen(process.env.PORT || PORT, () => console.log(`Server is running on port ${PORT}`));