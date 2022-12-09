const oracledb = require('oracledb')

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || '3000';


connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render(
    'index', 
    { 
      title: 'Coming Soon!', 
      mainText: 'Newly Admitted Students!', 
      subText: `Drop your email address below and you will be added to a Newly Admitted Students email list! 
      <br>Brought to you by PGJ Programming`
    }
    );
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});