const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello COVID-free World!... Jesus Please make things back to normal'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
