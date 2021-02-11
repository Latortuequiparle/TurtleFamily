const express = require('express');
const app = express();


app.listen(port, () => {
    console.log(`Le serveur ecoute sur le port ${port}`);
});