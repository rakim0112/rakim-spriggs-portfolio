const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const serverRoutes = require('./app_server/routes/index');
const apiRoutes = require('./app_api/routes/index');

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/', serverRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Rakim Spriggs Portfolio running on http://localhost:${PORT}`);
});