const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

try {
  mongoose.connect('mongodb://localhost/mongo', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
} catch (error) {
  console.log(error);
}

app.use(express.json());
app.use(cors());

app.use(require('./routes/routes'));

app.listen(3030, () => {
  console.log('Server running on port 3030');
});
