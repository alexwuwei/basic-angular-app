'use strict';

let express = require('express');
let app = express();

// let publicRouter = express.Router();
//
// app.use('/', publicRouter);

app.use(express.static('./public'))

app.listen(3000, () => {
  console.log('listening on 3000');
});

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html')
// });
