const mongoose = require('mongoose');
const dbgr = reqire("debug")("development:mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/ekartdb')
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB:', err));
module.exports = mongoose.connection;