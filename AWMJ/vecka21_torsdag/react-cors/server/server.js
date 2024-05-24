const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3333;

/*
  CORS middleware. Se: https://expressjs.com/en/resources/middleware/cors.html 
*/

// Lista över tillåtna domäner för DELETE-förfrågningar
const allowedDeleteDomains = ['http://192.168.50.243:5173'];

const corsOptions = (req, callback) => {
  let corsOptions = {
    origin: '*', // Tillåt alla domäner för övriga förfrågningar
    methods: ['GET', 'POST'], // Tillåt endast GET och POST metoder generellt
    allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token'], // Specificera vilka headers som är tillåtna
    credentials: true, // Tillåt cookies att skickas med förfrågningar
  };

  // Hantera DELETE-metoden separat
  if (req.method === 'DELETE' || req.method === 'OPTIONS') {
    const origin = req.header('Origin');
    if (allowedDeleteDomains.includes(origin)) {
      corsOptions.origin = origin; // Tillåt specifika domäner för DELETE
      corsOptions.methods.push('DELETE'); // Lägg till DELETE som tillåten metod
    } else {
      corsOptions.origin = false; // Blockera DELETE för andra domäner
    }
  }

  callback(null, corsOptions); // Skicka tillbaka konfigurerade alternativ
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// data som skickas i endpoint nedan
const data = {
  message: 'Hello World!'
};

// REST API endpoint, faller under CORS policyn för app.use() är för alla
// funktioner utan konfiguration som säger vilken/vilka eller metoder..
app.get('/api/data', (req, res) => {
  res.json(data);
});

app.post('/api/post', (req, res) => {
  const { test } = req.body;
  console.log('test', test);
  res.json('POST kördes! Du skickade: ' + test);
});

app.delete('/api/delete', (req, res) => {
  res.json('you suck!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
