const app = require('./app');

const port = app.get('port');

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
});
