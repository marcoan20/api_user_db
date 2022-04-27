// Importando o express
const express = require('express');
// Atribuindo a app o express
const app = express();
// Importando o mongoose
const mongoose = require('mongoose');



// Coloque a sua url onde está escrito URL
// Não se esqueça de substituir <user> e <password> pelo seu usuario cadastrado no mongoDB sem os < >

// Conexão com o banco de dados
const connection = mongoose.connect(`URL`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, console.log("Banco conectado"));

// Criando nosso modelo de usuário para o banco
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  idade: Number,
  matricula: Number,
  password: String
});

// Criando nossa entidade no banco
const User = mongoose.model("User", userSchema);

// Permitindo que o express entenda o formato JSON
app.use(express.json());

// Rota para listar todos os usuários
app.get('/user', async (req, res) => {
  // Buscando todos os usuários do banco
  const users = await User.find({});

  // Retornando os usuários em formato JSON
  return res.json(users);
});

// Rota para criar um usuário
app.post('/user', async (req, res) => {

  // Pegando os dados de dentro do body da requisição 
  const { name, email, password } = req.body;

  // Utilizando o async/await para esperar o banco de dados criar
  // um novo usuário    
  const user = await User.create({ name, email, password });

  // Retornando o usuário criado em formato JSON
  return res.json(user);
});


// Inicializando o servidor na porta 3000
app.listen(3000);