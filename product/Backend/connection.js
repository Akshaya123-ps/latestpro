const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Akshaya:akshayaps@cluster0.ptolx.mongodb.net/vimala1?retryWrites=true&w=majority&appName=cluster0')
  .then(() => console.log('Connected!'))
  .catch((err) => console.log(err))