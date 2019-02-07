const express = require('express');
const path = require('path');
const PORT = 8000;
const parser = require('body-parser');
// const routes = require("./routes.js");//needed later for functionallity 


const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended:true}));
app.use(express.static(path.resolve(__dirname, "../static")));
// app.use("/products", routes);

app.listen(PORT, () => console.log("hello from PORT:", PORT))