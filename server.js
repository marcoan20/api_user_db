const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes");
const app = express();

const connection = mongoose.connect(`mongodb+srv://marco:marco1230@cluster0.rjtjn.mongodb.net/DB?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, console.log("DB Is Connected"));

app.use(express.json());

app.use(routes);

app.listen(3000);