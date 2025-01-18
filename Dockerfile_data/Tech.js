const express = require('express');
const app = express();
const port = 9999;

// GET
app.get('/', (req, res) => {
    res.status(200).send('Dockerfile Node js Çalıştı.');
});

// LISTEN
app.listen(port, () => {
    console.log(`Tech js app listening Server http://localhost:${port} portunda çalışıyor`);
});
