const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('/redirect', (req, res) => {
    const productId = req.query.id || 'defaultId';
    res.redirect(`joguapp://detalle_producto/${productId}`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
