const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

let users = [];

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === parseInt(id));
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.json(user);
});

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send('Both name and email are required');
  }
  const newUser = {
    id: users.length + 1,
    name,
    email
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const userIndex = users.findIndex(u => u.id === parseInt(id));
  if (userIndex === -1) {
    return res.status(404).send('User not found');
  }
  users[userIndex] = {
    ...users[userIndex],
    name: name || users[userIndex].name,
    email: email || users[userIndex].email
  };
  res.json(users[userIndex]);
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex(u => u.id === parseInt(id));
  if (userIndex === -1) {
    return res.status(404).send('User not found');
  }
  users.splice(userIndex, 1);
  res.status(204).send();
});

app.post('/addCharvi', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: 'Charvi Pandey',
    email: 'charvipandey@gmail.com'
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
