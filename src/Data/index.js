const mongoose = require('mongoose');
const conn = 'mongodb://127.0.0.1:27017/mybooks';

mongoose.connect(conn, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
(err) =>{
    if(!err)
        console.log('Connection Successfully');

    else
        console.log(`Connection failed with error ${err}`);
});

module.exports = mongoose;