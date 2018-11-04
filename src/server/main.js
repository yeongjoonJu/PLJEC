import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname, './../public')));

app.get('/hello', (req, res) => {
    return res.send('Hello CodeLab');
});

app.listen(port, () => {
    console.log('Express is listening on port', port);
});