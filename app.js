const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Маршрут для генерації випадкового числа від 1 до 6
app.get('/', (req, res) => {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  res.json({ random_number: randomNum });
});

// Сервер слухає запити на заданому порті
app.listen(port, () => {
  console.log(`Сервер працює на порту ${port}`);
});
