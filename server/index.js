import express from 'express';
import path from 'path';

import router from './routes';

const app = express();

app.use(express.urlencoded({
  extended: false,
}));

// client static files
app.use(express.static(path.join(__dirname, '../dist')));

// API 
app.use('/api', router);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
app.listen(3000, () => {
  console.log('listening on port 3000');
});