require('dotenv').config();
const express = require('express');
const fetchApplicationData = require('./src/fetchData');
const evaluate = require('./src/evaluateRules');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  try {
    const data = await fetchApplicationData();
    const result = evaluate(data);
    res.send(result); // Sends the result as JSON
  } catch (error) {
    res.status(500).send('Error fetching or evaluating data');
  }
});

app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});