import express from 'express';
import serverRenderer from './middleware/renderer';
import { catsList, sharksList } from './data';

const PORT = 3000;
const path = require('path');

const app = express();
const router = express.Router();

router.use('^/$',  serverRenderer);
router.use(express.static(
  path.resolve(__dirname, '..', 'build')
));

app.get('/images', (req, res) => {
  switch (req.params) {
    case 'sharks':
    console.log('sharks');
      return res.json([...sharksList]);
    case 'cats':
    console.log('cats');
      return res.json([...catsList]);
    case 'both':
      return res.json([...sharksList, ...catsList])
    default:
      return res.json([...catsList]);
  }
})

app.use(router);

app.listen(PORT, (error) => {
  error ? console.log('An error has occurred', error) : '';
});

console.log('Listening on ' + PORT);