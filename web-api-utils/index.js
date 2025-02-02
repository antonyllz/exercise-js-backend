import express from 'express';
import format from '../web-api-utils/util/string.js';
import calculator from '../web-api-utils/util/numbers.js';

const app = express();
app.use(express.json());

app.get('/util/numbers/:operation', (req, res) => {
  const { operation } = req.params;
  const numbers = req.query.input.split(',').map(Number);
  const result = {
    operation,
    input: numbers,
    output: calculator(numbers, operation), 
  };

  res.send(result);
});

app.post('/util/string/:operation', (req, res) => {
  const { operation } = req.params;
  const { input: textInput } = req.body;

  const result = {
    operation,
    input: textInput,
    output: format(textInput, operation), 
  };

  res.send(result);
});

app.listen(3000, () => {
  console.log('Aplicação rodando em http://localhost:3000');
});