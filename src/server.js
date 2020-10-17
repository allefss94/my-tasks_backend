const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const routes = require('./routes/routes');
try {
  mongoose.connect('mongodb://localhost/super-task', {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });
} catch (error) {
  console.log(error);
}

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(3030, () => {
  console.log('Server running on port 3030');
});
