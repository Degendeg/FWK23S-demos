const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3333;

/*
  CORS middleware. Se: https://expressjs.com/en/resources/middleware/cors.html 
*/
const corsOptions = {
  origin: ['http://localhost:5173'],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// data som skickas i endpoint nedan
const data = {
  message: 'Hello World!'
};

// REST API endpoint, faller under CORS policyn för app.use() är för alla
// funktioner utan konfiguration som säger vilken/vilka eller metoder..
app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
