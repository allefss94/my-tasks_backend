const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./routes/routes');
const cors = require('cors');

try {
  mongoose.connect(
    'mongodb+srv://test:test@my-task.nqi5g.mongodb.net/my-task?retryWrites=true&w=majority',
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

app.listen('https://supertasks.herokuapp.com/' || 3030, () => {
  console.log('Server running on port 3030');
});
