const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./routes/routes');
const cors = require('cors');

try {
  mongoose.connect(
    'mongodb://localhost/super-task'',
    {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    }
  );
} catch (error) {
  console.log(error);
}

app.use(express.json());
app.use(cors());

app.use(router);
const port = process.env.PORT
app.listen(port || 3030, () => {
  console.log('Server running on port'+ port || 3030);
});
